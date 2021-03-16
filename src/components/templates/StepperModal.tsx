import React from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import GIF_ChooseScool from "../../assets/choose_school.gif";
import GIF_CopyStory from "../../assets/copy_story.gif";
import GIF_EditCalendar from "../../assets/edit_calendar.gif";
import { useStepper } from "../../hooks/useStepper";

const steps = [
  {
    label: "Choose School Type",
    content: (
      <div>
        <div>Choose Scool!</div>
        <img src={GIF_ChooseScool} alt="chooseScool" />
      </div>
    ),
  },
  {
    label: "Click Copy button",
    content: (
      <div>
        <div>Click [copy] Button and then check your calendar!</div>
        <img src={GIF_CopyStory} alt="CopyStory" />
      </div>
    ),
  },
  {
    label: "Edit your calendar",
    content: (
      <div>
        <div>Edit your plan!</div>
        <img src={GIF_EditCalendar} alt="Edit Calendar" />
      </div>
    ),
  },
  { label: "Done!", content: <div>:D Let's Enjoy!</div> },
] as const;

export function StepperModal() {
  const { activeStepIdx, isOpen, close, next, back } = useStepper();

  const isFirstStep = React.useMemo(() => activeStepIdx === 0, [activeStepIdx]);
  const isLastStep = React.useMemo(() => activeStepIdx === steps.length - 1, [
    activeStepIdx,
  ]);

  return (
    <Dialog open={isOpen} onClose={close}>
      <DialogTitle>
        <span>How To Use</span>
        <Stepper activeStep={activeStepIdx} alternativeLabel>
          {steps.map(({ label }) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </DialogTitle>
      <DialogContent>
        <div>{steps[activeStepIdx].content}</div>
      </DialogContent>
      <div>
        <Button onClick={back} disabled={isFirstStep}>
          Back
        </Button>
        {isLastStep ? (
          <Button onClick={close}>Let's try!</Button>
        ) : (
          <Button onClick={next} color="primary" variant="contained">
            Next
          </Button>
        )}
        <Button onClick={close}>Close</Button>
      </div>
    </Dialog>
  );
}

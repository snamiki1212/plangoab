import React from "react";
import styled from "styled-components";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import { DatePicker } from "@material-ui/pickers";
import Avatar from "@material-ui/core/Avatar";
import { PolicyExplanation } from "@/components/atoms/PolicyExplanation";
import { useModal } from "@/hooks/useModal";
import { useUserCalendar } from "@/hooks/useUserCalendar";
import { useUser } from "@/hooks/useUser";
import { AdvancedOptions } from "@/components/organisms/AdvancedOptions";
import { useTemplateOptions } from "@/hooks/useTemplateOptions";

export function WelcomeModal() {
  const { calendar } = useUserCalendar();
  const shouldSkipIntroFlow = !!calendar;
  const { isOpen, close } = useModal(!shouldSkipIntroFlow);
  const { init: initUserCalendar } = useUserCalendar();
  const { birth, setBirth } = useUser();
  const { options } = useTemplateOptions();
  const workingholidayPeriod = React.useMemo(
    () => options.workingholidayPeriod,
    [options.workingholidayPeriod]
  );

  const handleFinish = React.useCallback(() => {
    initUserCalendar({ birthday: birth, workingholidayPeriod });
    close();
  }, [close, initUserCalendar, birth, workingholidayPeriod]);

  const handleDateChange = React.useCallback(
    (date: Date | null) => {
      if (!date) return;
      setBirth(date.toISOString());
    },
    [setBirth]
  );

  return (
    <Dialog open={isOpen}>
      <DialogTitle>
        <Title>Welcome to Plangoab🐱</Title>
      </DialogTitle>
      <DialogContent>
        <Text>
          <p>
            hi 👋
            <br />
            <br />
            Plangoab helps you to create awesome plan to go abroad!
            <br />
            <br />
            Let's input your birthday and create your plans✈️
          </p>
          <InputContainer>
            <Avatar alt="you" />
            <DatePicker
              disableFuture
              openTo="year"
              format="yyyy-MM-dd"
              label="Date of birth"
              views={["year", "month", "date"]}
              value={birth}
              onChange={handleDateChange}
            />
          </InputContainer>
          <ButtonsContainer>
            <Button
              onClick={handleFinish}
              variant="contained"
              color="primary"
              style={{ textTransform: "none" }}
            >
              ✈️Create Calendar
            </Button>
            <AdvancedOptions />
          </ButtonsContainer>
        </Text>
      </DialogContent>
      <Divider />
      <DialogActions>
        <PolicyExplanation />
      </DialogActions>
    </Dialog>
  );
}

const Title = styled.span`
  font-weight: 900;
  font-family: var(--font-header1);
  color: var(--base-dark1);
`;

const Text = styled.div`
  font-family: var(--font-text1);
  color: var(--base-dark1);
`;

const InputContainer = styled.div`
  display: flex;
  gap: 1rem;
  padding: 2rem;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

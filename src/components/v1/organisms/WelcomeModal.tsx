import React from "react";
import styled from "styled-components";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import DatePicker from "@mui/lab/DatePicker";
import Avatar from "@mui/material/Avatar";
import { PolicyExplanation } from "@/components/v1/atoms/PolicyExplanation";
import { useModal } from "@/hooks/v1/useModal";
import { useUserCalendar } from "@/hooks/v1/useUserCalendar";
import { useUser } from "@/hooks/v1/useUser";
import { AdvancedOptions } from "@/components/v1/organisms/AdvancedOptions";
import { useTemplateOptions } from "@/hooks/v1/useTemplateOptions";

export function WelcomeModal() {
  const { isAlreadyCreated: shouldSkipIntroFlow } = useUserCalendar();
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
              openTo="year"
              label="Date of birth"
              renderInput={(params) => <TextField {...params} />}
              views={["year", "month", "day"]}
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
  color: var(--color-dark1);
`;

const Text = styled.div`
  font-family: var(--font-text1);
  color: var(--color-dark1);
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

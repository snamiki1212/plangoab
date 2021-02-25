import React from "react";
import styled from "styled-components";
import { DatePicker } from "@material-ui/pickers";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";

import { useUser } from "../../hooks/useUser";
import { useTemplateOptions } from "../../hooks/useTemplateOptions";

// TODO: Use react-hook-form because of reducing render cost
export function ProfileCard() {
  const { birth, setBirth } = useUser();
  const { update: updateOption, options } = useTemplateOptions();
  const { workingholidayPeriod } = options;

  const handleDateChange = React.useCallback(
    (date: Date | null) => {
      if (!date) return;
      setBirth(date.toISOString());
    },
    [setBirth]
  );

  const handleChangeWorkingholidayPeriod = React.useCallback(
    (_event) => {
      const value = _event.target.value;
      const maybeNum = value === "" ? 0 : parseInt(value);
      if (!Number.isInteger(maybeNum)) return;
      updateOption({ workingholidayPeriod: maybeNum });
    },
    [updateOption]
  );

  return (
    <Card>
      <CardContent>
        <InnerContainer>
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
          <TextField
            value={workingholidayPeriod}
            onChange={handleChangeWorkingholidayPeriod}
            label="Working Holiday Period"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">Month</InputAdornment>
              ),
            }}
          />
        </InnerContainer>
      </CardContent>
    </Card>
  );
}

const InnerContainer = styled.div`
  display: flex;
  gap: 1rem;
  padding: 2rem;
`;

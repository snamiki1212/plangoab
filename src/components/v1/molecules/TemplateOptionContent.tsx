import React from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Checkbox from "@mui/material/Checkbox";
import { useTemplateOptions } from "~/src/hooks/v1/useTemplateOptions";

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
] as const;

// TODO: Use react-hook-form because of reducing render cost
export function TemplateOptionContent() {
  const { update: updateOption, options } = useTemplateOptions();
  const {
    schoolPeriod,
    coopPeriod,
    monthsOfStartSchool,
    pgwpPeriod,
    workingholidayPeriod,
  } = options;

  const handleChangeSchoolPeriod = React.useCallback(
    (_event) => {
      const value = _event.target.value;
      const maybeNum = value === "" ? 0 : parseInt(value);
      if (!Number.isInteger(maybeNum)) return;
      updateOption({ schoolPeriod: maybeNum });
    },
    [updateOption]
  );

  const handleChangeCoopPeriod = React.useCallback(
    (_event) => {
      const value = _event.target.value;
      const maybeNum = value === "" ? 0 : parseInt(value);
      if (!Number.isInteger(maybeNum)) return;
      updateOption({ coopPeriod: maybeNum });
    },
    [updateOption]
  );

  const handleChangePgwpPeriod = React.useCallback(
    (_event) => {
      const value = _event.target.value;
      const maybeNum = value === "" ? 0 : parseInt(value);
      if (!Number.isInteger(maybeNum)) return;
      updateOption({ pgwpPeriod: maybeNum });
    },
    [updateOption]
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

  const handleCheck = React.useCallback(
    (_event) => {
      const month = parseInt(_event.target.value);
      const newMonthsOfStartSchool = monthsOfStartSchool.includes(month)
        ? monthsOfStartSchool.filter((_month) => _month !== month)
        : [...monthsOfStartSchool, month].sort((a, b) => a - b);
      updateOption({ monthsOfStartSchool: newMonthsOfStartSchool });
    },
    [updateOption, monthsOfStartSchool]
  );

  return (
    <Container>
      <Content>
        <Title>Periods</Title>
        <PeriodContainer>
          <TextField
            value={schoolPeriod}
            onChange={handleChangeSchoolPeriod}
            label="School Period"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">Month</InputAdornment>
              ),
            }}
          />
          <TextField
            value={coopPeriod}
            onChange={handleChangeCoopPeriod}
            label="Co-op Period"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">Month</InputAdornment>
              ),
            }}
          />
          <TextField
            value={pgwpPeriod}
            onChange={handleChangePgwpPeriod}
            label="PWGP Period"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">Month</InputAdornment>
              ),
            }}
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
        </PeriodContainer>
      </Content>

      <Content>
        <Title>School start from (Month)</Title>
        <div>
          {MONTHS.map((month, idx) => {
            const monthNum = idx + 1;
            const isChecked = monthsOfStartSchool.includes(monthNum);
            return (
              <CheckboxListItem key={month}>
                <label>{month}</label>
                <Checkbox
                  value={monthNum}
                  checked={isChecked}
                  onChange={handleCheck}
                />
              </CheckboxListItem>
            );
          })}
        </div>
      </Content>
    </Container>
  );
}

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Title = styled.div`
  color: var(--color-dark1);
  font-family: var(--font-header1);
  font-size: 1.5rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

const CheckboxListItem = styled.div`
  display: inline-block;
  margin-right: 1rem;
`;

const PeriodContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  margin-bottom: 1rem;
`;

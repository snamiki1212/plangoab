import React from "react";
import styled from "styled-components";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Checkbox from "@material-ui/core/Checkbox";
import { useTemplateOptions } from "../../hooks/useTemplateOptions";

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
export function TemplateOptionCard() {
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
    <Card>
      <CardContent>
        <h2>Template Options</h2>
        <InnerContainer>
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

          <div>
            <label>School start from (Month)</label>
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
          </div>
        </InnerContainer>
      </CardContent>
    </Card>
  );
}

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
const InnerContainer = styled.div``;

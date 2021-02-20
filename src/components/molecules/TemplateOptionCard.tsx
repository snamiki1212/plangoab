import React from "react";
import styled from "styled-components";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Checkbox from "@material-ui/core/Checkbox";
import { useTemplateOptions } from "../../hooks/useTemplateOptions";

export function TemplateOptionCard() {
  const { update: updateOption, options } = useTemplateOptions();
  const { schoolPeriod, coopPeriod, monthsOfStartSchool } = options;

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

  const handleCheck = React.useCallback(
    (_event) => {
      const month = parseInt(_event.target.value);
      const newMonthsOfStartSchool = monthsOfStartSchool.includes(month)
        ? monthsOfStartSchool.filter((_month) => _month === month)
        : [...monthsOfStartSchool, month];
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
          </PeriodContainer>

          <div>
            <label>School start from (Month)</label>
            <div>
              {Array.from({ length: 12 }).map((_, idx) => {
                const month = idx + 1;
                const isChecked = monthsOfStartSchool.includes(month);
                return (
                  <CheckboxListItem key={month}>
                    <label>{month}</label>
                    <Checkbox
                      value={month}
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
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 1rem;
`;
const InnerContainer = styled.div``;

import React from "react";
import styled from "styled-components";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import { useTemplateOptions } from "../../hooks/useTemplateOptions";

export function TemplateOptionCard() {
  const [schoolPeriod, setSchoolPeriod] = React.useState(12 * 2);
  const [coopPeriod, setCoopPeriod] = React.useState(12);
  const { update: updateOption } = useTemplateOptions(); // TODO:  Update update-method in redux

  const handleChangeSchoolPeriod = React.useCallback(
    (e) => {
      const value = e.target.value;
      const maybeNum = value === "" ? 0 : parseInt(value);
      if (!Number.isInteger(maybeNum)) return;
      setSchoolPeriod(maybeNum);
      updateOption({ schoolPeriod: maybeNum });
    },
    [updateOption]
  );

  const handleChangeCoopPeriod = React.useCallback(
    (e) => {
      const value = e.target.value;
      const maybeNum = value === "" ? 0 : parseInt(value);
      if (!Number.isInteger(maybeNum)) return;
      setCoopPeriod(maybeNum);
      updateOption({ coopPeriod: maybeNum });
    },
    [updateOption]
  );

  return (
    <Card>
      <CardContent>
        <h2>Template Options(TODO: not working yet)</h2>
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
                return (
                  <CheckboxListItem key={month}>
                    <label>{month}</label>
                    <input type="checkbox" value={month} />
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

import React from "react";
import styled from "styled-components";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const MAX_PERIOD_MONTH = 12 * 5;

export function TemplateOptionCard() {
  return (
    <Card>
      <CardContent>
        <h2>Template Options(TODO: not working yet)</h2>
        <InnerContainer>
          <SchoolPeriodLabel>School Period(Month)</SchoolPeriodLabel>
          <SchoolPeriodInput
            type="range"
            min="0"
            max={MAX_PERIOD_MONTH}
            id="schoolPeriod"
          />
          <CoopPeriodLabel>Co-op Period(Month)</CoopPeriodLabel>
          <CoopPeriodInput
            type="range"
            min="0"
            max={MAX_PERIOD_MONTH}
            id="schoolPeriod"
          />
          <StartSchoolFrom>Start From (Month)</StartSchoolFrom>
          <StartSchoolOptions>
            {Array.from({ length: 12 }).map((_, idx) => {
              const month = idx + 1;
              return (
                <CheckboxListItem>
                  <label>{month}</label>
                  <input type="checkbox" value={month} />
                </CheckboxListItem>
              );
            })}
          </StartSchoolOptions>
        </InnerContainer>
      </CardContent>
    </Card>
  );
}

const CheckboxListItem = styled.div`
  display: inline-block;
  margin-right: 0.5rem;
`;

const InnerContainer = styled.div`
  display: grid;
  gap: 1rem;
  padding: 0.5rem;
  grid-template-areas:
    "schoolPeriodLabel schoolPeriodInput"
    "coopPeriodLabel coopPeriodInput"
    "startSchoolFrom startSchoolOptions";
`;

const SchoolPeriodLabel = styled.label`
  grid-area: schoolPeriodLabel;
`;

const SchoolPeriodInput = styled.input`
  grid-area: schoolPeriodInput;
`;

const CoopPeriodLabel = styled.label`
  grid-area: coopPeriodLabel;
`;

const CoopPeriodInput = styled.input`
  grid-area: coopPeriodInput;
`;

const StartSchoolFrom = styled.div`
  grid-area: startSchoolFrom;
`;

const StartSchoolOptions = styled.div`
  grid-area: startSchoolOptions;
`;

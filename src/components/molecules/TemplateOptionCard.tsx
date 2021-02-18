import React from "react";
import styled from "styled-components";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const MAX_PERIOD_MONTH = 12 * 5;

export function TemplateOptionCard() {
  const [schoolPeriod, setSchoolPeriod] = React.useState(12 * 2);
  const [coopPeriod, setCoopPeriod] = React.useState(12);

  const handleChangeSchoolPeriod = React.useCallback((e) => {
    setSchoolPeriod(e.target.value);
  }, []);

  const handleChangeCoopPeriod = React.useCallback((e) => {
    setCoopPeriod(e.target.value);
  }, []);

  return (
    <Card>
      <CardContent>
        <h2>Template Options(TODO: not working yet)</h2>
        <InnerContainer>
          <label>School Period(Month)</label>
          <span>{schoolPeriod}</span>
          <input
            type="range"
            min="0"
            max={MAX_PERIOD_MONTH}
            id="schoolPeriod"
            onChange={handleChangeSchoolPeriod}
            defaultValue={schoolPeriod}
          />
          <label>Co-op Period(Month)</label>
          <span>{coopPeriod}</span>
          <input
            type="range"
            min="0"
            max={MAX_PERIOD_MONTH}
            id="schoolPeriod"
            onChange={handleChangeCoopPeriod}
            defaultValue={coopPeriod}
          />
          <label>School start from (Month)</label>
          <span>{/* EMPTY */}</span>
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
        </InnerContainer>
      </CardContent>
    </Card>
  );
}

const CheckboxListItem = styled.div`
  display: inline-block;
  margin-right: 1rem;
`;

const InnerContainer = styled.div`
  display: grid;
  gap: 1rem;
  padding: 0.3rem;
  grid-template-columns: auto auto 1fr;
  grid-template-rows: auto;
`;

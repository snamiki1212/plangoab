import React from "react";
import styled from "styled-components";

const MAX_PERIOD_MONTH = 12 * 5;

export function TemplateOptionCard() {
  return (
    <Container>
      <h2>Options(TODO: not working yet)</h2>
      <div>
        <label>School Period(Month)</label>
        <input type="range" min="0" max={MAX_PERIOD_MONTH} id="schoolPeriod" />
      </div>
      <div>
        <label>Co-op Period(Month)</label>
        <input type="range" min="0" max={MAX_PERIOD_MONTH} id="schoolPeriod" />
      </div>
      <div>
        <span>Start From (Month)</span>
        <span>
          {Array.from({ length: 12 }).map((_, idx) => {
            const month = idx + 1;
            return (
              <CheckboxListItem>
                <label>{month}</label>
                <input type="checkbox" value={month} />
              </CheckboxListItem>
            );
          })}
        </span>
      </div>
    </Container>
  );
}

const CheckboxListItem = styled.div`
  display: inline-block;
  margin-right: 0.5rem;
`;

const Container = styled.div``;

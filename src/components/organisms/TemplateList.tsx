import React from "react";
import styled from "styled-components";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import { PrivateCollegeTemplate } from "../molecules/PrivateCollegeTemplate";
import { useModal } from "../../hooks/useModal";

const MAX_PERIOD_MONTH = 12 * 5;
export function TemplateList() {
  const {
    open: openPrivateCollege,
    close: closePrivateCollege,
    isOpen: isOpenPrivateCollege,
  } = useModal();

  return (
    <>
      <Card>
        <CardContent>
          <h2>Templates</h2>
          <ButtonsContainer>
            <Button variant="contained" onClick={openPrivateCollege}>
              Private College
            </Button>
            <Button disabled variant="contained">
              TODO: Public College
            </Button>
            <Button disabled variant="contained">
              TODO: ESL
            </Button>
          </ButtonsContainer>
          
          <OptionContainer>
            <h2>Options(TODO: not working yet)</h2>
            <div>
              <label>School Period(Month)</label>
              <input
                type="range"
                min="0"
                max={MAX_PERIOD_MONTH}
                id="schoolPeriod"
              />
            </div>
            <div>
              <label>Co-op Period(Month)</label>
              <input
                type="range"
                min="0"
                max={MAX_PERIOD_MONTH}
                id="schoolPeriod"
              />
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
          </OptionContainer>
        </CardContent>
      </Card>

      {/* Modal */}
      <Dialog
        fullScreen
        open={isOpenPrivateCollege}
        onClose={closePrivateCollege}
      >
        <ModalInnerContainer>
          <button onClick={closePrivateCollege}>Close</button>
          <PrivateCollegeTemplate />
        </ModalInnerContainer>
      </Dialog>
    </>
  );
}

const ButtonsContainer = styled.div`
  display: flex;
`;

const ModalInnerContainer = styled.div`
  display: grid;
  gap: 2rem;
  padding: 3rem;
`;

const CheckboxListItem = styled.div`
  display: inline-block;
  margin-right: 0.5rem;
`;

const OptionContainer = styled.div``;

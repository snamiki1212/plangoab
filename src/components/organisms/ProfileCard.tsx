import React from "react";
import styled from "styled-components";
import { DatePicker } from "@material-ui/pickers";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";

import { useUser } from "../../hooks/useUser";

export function ProfileCard() {
  const {
    birth,
    age,
    setBirth,
    toggleWorkingholiday,
    canWorkingholiday,
  } = useUser();

  const handleDateChange = React.useCallback(
    (date: Date | null) => {
      if (!date) return;
      setBirth(date.toISOString());
    },
    [setBirth]
  );

  const handleToggleWorkingholiday = React.useCallback(() => {
    toggleWorkingholiday();
  }, [toggleWorkingholiday]);

  return (
    <Card>
      <CardContent>
        <h2>Profile</h2>
        <InnerContainer>
          <Avatar alt="you" />
          <TextField
            id="age-text"
            label="Your Age"
            disabled
            InputProps={{
              readOnly: true,
            }}
            InputLabelProps={{
              shrink: true,
            }}
            type="number"
            value={age}
          />
          <DatePicker
            disableFuture
            openTo="year"
            format="yyyy-MM-dd"
            label="Date of birth"
            views={["year", "month", "date"]}
            value={birth}
            onChange={handleDateChange}
          />
          <div>
            <span>with working holiday</span>
            <Checkbox
              checked={canWorkingholiday}
              onChange={handleToggleWorkingholiday}
            />
          </div>
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

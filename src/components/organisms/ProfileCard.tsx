import React from "react";
import styled from "styled-components";
import { DatePicker } from "@material-ui/pickers";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";

import { useAgeContext } from "../../hooks/useAgeContext";

export function ProfileCard() {
  const { birth, age, setBirth } = useAgeContext();

  const handleDateChange = React.useCallback(
    (date: Date | null) => {
      if (!date) return;
      setBirth(date.toISOString());
    },
    [setBirth]
  );

  return (
    <_Card>
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
    </_Card>
  );
};

const _Card = styled(Card)`
  display: flex;
  gap: 1rem;
`;

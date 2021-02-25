import React from "react";
import styled from "styled-components";
import { DatePicker } from "@material-ui/pickers";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import { useUser } from "../../hooks/useUser";

export function ProfileCard() {
  const { birth, setBirth } = useUser();

  const handleDateChange = React.useCallback(
    (date: Date | null) => {
      if (!date) return;
      setBirth(date.toISOString());
    },
    [setBirth]
  );

  return (
    <Card>
      <CardContent>
        <InnerContainer>
          <Avatar alt="you" />
          <DatePicker
            disableFuture
            openTo="year"
            format="yyyy-MM-dd"
            label="Date of birth"
            views={["year", "month", "date"]}
            value={birth}
            onChange={handleDateChange}
          />
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

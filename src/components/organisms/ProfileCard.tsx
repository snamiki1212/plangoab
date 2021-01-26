import React from "react";
import { DatePicker } from "@material-ui/pickers";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";

import { useAgeContext } from "../../hooks/useAgeContext";

export const ProfileCard: React.FC = () => {
  const { birth, age, setBirth } = useAgeContext();

  const handleDateChange = React.useCallback(
    (date: Date | null) => {
      if (!date) return;
      console.log(date);
      setBirth(date.toISOString());
    },
    [setBirth]
  );

  return (
    <Card>
      <Avatar alt="you" />
      <div>
        <div>age:{age}</div>
        <DatePicker
          disableFuture
          openTo="year"
          format="yyyy-MM-dd"
          label="Date of birth"
          views={["year", "month", "date"]}
          value={birth}
          onChange={handleDateChange}
        />
      </div>
    </Card>
  );
};

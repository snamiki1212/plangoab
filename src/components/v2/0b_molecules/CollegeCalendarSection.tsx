import React, { PropsWithChildren } from "react";
import styled from "styled-components";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Paper from "@mui/material/Paper";
import { PrivateCollegeCalendar } from "~/src/components/v2/0b_molecules/PrivateCollegeCalendar";
import { PublicCollegeCalendar } from "~/src/components/v2/0b_molecules/PublicCollegeCalendar";

function TabPanel({
  shouldShow,
  children,
}: PropsWithChildren<{
  shouldShow: boolean;
}>) {
  return (
    <div
      role="tabpanel"
      style={{ display: shouldShow ? "block" : "none", padding: "1rem" }}
    >
      {children}
    </div>
  );
}

export function CollegeCalendarSection() {
  const [selectedIdx, setSelectedIdx] = React.useState(0);

  const handleChange = React.useCallback((_event, newValue) => {
    setSelectedIdx(newValue);
  }, []);

  return (
    <Paper elevation={8}>
      <Tabs
        value={selectedIdx}
        onChange={handleChange}
        textColor="primary"
        indicatorColor="primary"
      >
        <Tab
          icon={<Icon>🏫</Icon>}
          label="Private College"
          style={{
            textTransform: "none",
            fontFamily: `var(--font-text1)`,
            fontWeight: 900,
          }}
        />
        <Tab
          icon={<Icon>🎓</Icon>}
          label="Public College"
          style={{
            textTransform: "none",
            fontFamily: `var(--font-text1)`,
            fontWeight: 900,
          }}
        />
      </Tabs>
      <TabPanel shouldShow={selectedIdx === 0}>
        <div style={{ height: "75vh" }}>
          <PrivateCollegeCalendar />
        </div>
      </TabPanel>
      <TabPanel shouldShow={selectedIdx === 1}>
        <div style={{ height: "75vh" }}>
          <PublicCollegeCalendar />
        </div>
      </TabPanel>
    </Paper>
  );
}

const Icon = styled.span`
  font-size: 2rem;
`;

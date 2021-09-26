import React, { PropsWithChildren } from "react";
import styled from "styled-components";
import Divider from "@mui/material/Divider";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { PrivateCollegeCalendar } from "@/components/organisms/PrivateCollegeCalendar";
import { PublicCollegeCalendar } from "@/components/organisms/PublicCollegeCalendar";

function TabPanel({
  shouldShow,
  children,
}: PropsWithChildren<{
  shouldShow: boolean;
}>) {
  return (
    <div role="tabpanel" style={{ display: shouldShow ? "block" : "none" }}>
      <Box p={3}>{children}</Box>
    </div>
  );
}

export function CollegeCalendarSection() {
  const [selectedIdx, setSelectedIdx] = React.useState(0);

  const handleChange = React.useCallback((_event, newValue) => {
    setSelectedIdx(newValue);
  }, []);

  return (
    <Box>
      <Paper elevation={8}>
        <PaperHeader>
          <Title>Templates</Title>
        </PaperHeader>
        <Divider />
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
          <PrivateCollegeCalendar />
        </TabPanel>
        <TabPanel shouldShow={selectedIdx === 1}>
          <PublicCollegeCalendar />
        </TabPanel>
      </Paper>
    </Box>
  );
}

const PaperHeader = styled.div`
  padding: 2rem;
`;

const Title = styled.span`
  font-size: 2rem;
  margin-right: 1rem;
  font-weight: 900;
  font-family: var(--font-header1);
  color: var(--color-dark1);
`;

const Icon = styled.span`
  font-size: 2rem;
`;

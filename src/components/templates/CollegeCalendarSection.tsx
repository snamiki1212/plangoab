import React, { PropsWithChildren } from "react";
import styled from "styled-components";
import Divider from "@material-ui/core/Divider";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import { PrivateCollegeCalendar } from "../organisms/PrivateCollegeCalendar";
import { PublicCollegeCalendar } from "../organisms/PublicCollegeCalendar";

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
            style={{ textTransform: "none" }}
          />
          <Tab
            icon={<Icon>🎓</Icon>}
            label="Public College"
            style={{ textTransform: "none" }}
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
  font-weight: 900;
  margin-right: 1rem;
`;

const Icon = styled.span`
  font-size: 2rem;
`;

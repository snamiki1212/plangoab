import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";

import { PrivateCollegeTemplate } from "./PrivateCollegeTemplate";
import { PublicCollegeTemplate } from "./PublicCollegeTemplate";
import { EslTemplate } from "./EslTemplate";

const TabPanel = ({
  shouldShow,
  children,
}: {
  shouldShow: boolean;
  children: any;
}) => {
  if (!shouldShow) return <></>;

  return (
    <div role="tabpanel">
      <Box p={3}>{children}</Box>
    </div>
  );
};

export function TemplateList() {
  const [selectedIdx, setSelectedIdx] = React.useState(0);

  const handleChange = React.useCallback((_event, newValue) => {
    setSelectedIdx(newValue);
  }, []);

  return (
    <div>
      <Tabs value={selectedIdx} onChange={handleChange}>
        <Tab label="Private College" />
        <Tab label="Public College" />
        <Tab label="ESL" />
      </Tabs>
      <TabPanel shouldShow={selectedIdx === 0}>
        <PrivateCollegeTemplate />
      </TabPanel>
      <TabPanel shouldShow={selectedIdx === 1}>
        <PublicCollegeTemplate />
      </TabPanel>
      <TabPanel shouldShow={selectedIdx === 2}>
        <EslTemplate />
      </TabPanel>
    </div>
  );
}

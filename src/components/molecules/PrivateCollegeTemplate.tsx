import React from "react";
import { BaseTemplate } from "./BaseTemplate";
import { usePrivateCollegeCalendar } from "../../hooks/usePrivateCollegeCalendar";
import { useUser } from "../../hooks/useUser";

export function PrivateCollegeTemplate() {
  const { birth, canWorkingholiday } = useUser();
  const { resources, events, generate } = usePrivateCollegeCalendar();

  React.useEffect(() => {
    generate({ birth, canWorkingholiday });
  }, [generate, birth, canWorkingholiday]);

  return <BaseTemplate events={events} resources={resources} />;
}

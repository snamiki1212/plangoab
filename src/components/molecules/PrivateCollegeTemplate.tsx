import React from "react";
import { useCommunityCollegeCalendar } from "../../hooks/useCommunityCollegeCalendar";
import { BaseTemplate } from "./BaseTemplate";
import { useUser } from "../../hooks/useUser";

export function PrivateCollegeTemplate() {
  const { birth, canWorkingholiday } = useUser();
  const { resources, events, generate } = useCommunityCollegeCalendar();

  React.useEffect(() => {
    generate({ birth, canWorkingholiday });
  }, [generate, birth, canWorkingholiday]);

  return <BaseTemplate events={events} resources={resources} />;
}

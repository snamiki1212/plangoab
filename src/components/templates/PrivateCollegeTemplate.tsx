import React from "react";
import { BaseTemplate } from "../molecules/BaseTemplate";
import { usePrivateCollegeCalendar } from "../../hooks/usePrivateCollegeCalendar";
import { useUser } from "../../hooks/useUser";

export function PrivateCollegeTemplate() {
  const { birth, canWorkingholiday } = useUser();
  const { resources, events, generate } = usePrivateCollegeCalendar();

  // TODO: receive through arg
  const options = React.useMemo(() => ({
    schoolPeriod: 12 * 2,
    coopPeriod: 12 * 2,
    workingholidayPeriod: 12,
  }), []);

  React.useEffect(() => {
    generate({ birth, canWorkingholiday, options });
  }, [generate, birth, canWorkingholiday, options]);

  return <BaseTemplate events={events} resources={resources} />;
}

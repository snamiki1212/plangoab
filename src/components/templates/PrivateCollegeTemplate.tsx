import React from "react";
import { BaseTemplate } from "../molecules/BaseTemplate";
import { usePrivateCollegeCalendar } from "../../hooks/usePrivateCollegeCalendar";
import { useUser } from "../../hooks/useUser";
import { useTemplateOptions } from "../../hooks/useTemplateOptions";

export function PrivateCollegeTemplate() {
  const { birth, canWorkingholiday } = useUser();
  const { resources, events, generate } = usePrivateCollegeCalendar();
  const { options } = useTemplateOptions();

  // TODO: prevent re-rendering when to select tab again
  React.useEffect(() => {
    generate({ birth, canWorkingholiday, options });
  }, [generate, birth, canWorkingholiday, options]);

  return <BaseTemplate events={events} resources={resources} />;
}

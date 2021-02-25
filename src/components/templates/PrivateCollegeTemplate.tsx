import React from "react";
import { BaseTemplate } from "../molecules/BaseTemplate";
import { usePrivateCollegeCalendar } from "../../hooks/usePrivateCollegeCalendar";
import { useUser } from "../../hooks/useUser";
import { useTemplateOptions } from "../../hooks/useTemplateOptions";

export function PrivateCollegeTemplate() {
  const { birth } = useUser();
  const { resources, events, generate } = usePrivateCollegeCalendar();
  const { options } = useTemplateOptions();

  // TODO: prevent re-rendering when to select tab again
  React.useEffect(() => {
    generate({ birth, options });
  }, [generate, birth, options]);

  return <BaseTemplate events={events} resources={resources} />;
}

import React from "react";
import { BaseTemplate } from "../molecules/BaseTemplate";
import { usePrivateCollegeCalendar } from "../../hooks/usePrivateCollegeCalendar";
import { useUser } from "../../hooks/useUser";
import { useTemplateOptions } from "../../hooks/useTemplateOptions";
import { useTemplateCustomButtons } from "../../hooks/useTemplateCustomButtons";
import { TemplateOptionModal } from "../molecules/TemplateOptionModal";

export function PrivateCollegeTemplate() {
  const { birth } = useUser();
  const { resources, events, generate } = usePrivateCollegeCalendar();
  const { options } = useTemplateOptions();
  const { customButtons, close, isOpen } = useTemplateCustomButtons();

  // TODO: prevent re-rendering when to select tab again
  React.useEffect(() => {
    generate({ birth, options });
  }, [generate, birth, options]);

  return (
    <>
      <BaseTemplate
        events={events}
        resources={resources}
        customButtons={customButtons}
      />
      <TemplateOptionModal onClose={close} isOpen={isOpen} />
    </>
  );
}

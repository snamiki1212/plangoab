import React from "react";
import { BaseTemplate } from "../molecules/BaseTemplate";
import { usePublicCollegeCalendar } from "../../hooks/usePublicCollegeCalendar";
import { useUser } from "../../hooks/useUser";
import { useTemplateOptions } from "../../hooks/useTemplateOptions";
import { useTemplateCustomButtons } from "../../hooks/useTemplateCustomButtons";
import { TemplateOptionModal } from "../molecules/TemplateOptionModal";

export function PublicCollegeTemplate() {
  const { birth } = useUser();
  const { resources, events, generate } = usePublicCollegeCalendar();
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

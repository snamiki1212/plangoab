import React from "react";
import { CollegeCalendarBase } from "@/components/v2/x1_molecules/CollegeCalendarBase";
import { usePrivateCollegeCalendar } from "@/hooks/v1/usePrivateCollegeCalendar";
import { useUser } from "@/hooks/v1/useUser";
import { useTemplateOptions } from "@/hooks/v1/useTemplateOptions";
import { useTemplateCustomButtons } from "@/hooks/v1/useTemplateCustomButtons";
import { TemplateOptionModal } from "@/components/v1/molecules/TemplateOptionModal";

export function PrivateCollegeCalendar() {
  const { birth } = useUser();
  const { resources, events, generate } = usePrivateCollegeCalendar();
  const { options, withWorkingholiday } = useTemplateOptions();
  const { customButtons, close, isOpen } = useTemplateCustomButtons();

  // TODO: prevent re-rendering when to select tab again
  React.useEffect(() => {
    generate({ birth, canWorkingholiday: withWorkingholiday, options });
  }, [generate, birth, withWorkingholiday, options]);

  return (
    <>
      <CollegeCalendarBase
        events={events}
        resources={resources}
        customButtons={customButtons}
      />
      <TemplateOptionModal onClose={close} isOpen={isOpen} />
    </>
  );
}

import { useCallback } from "react";
import {
  useSelectStepName,
  useTutorial,
  useSelectIsFinished,
} from "~/src/hooks/v2/useTutorial";
import { UserCalendarSection } from "~/src/components/v2/0b_molecules/UserCalendarSection";
import { CalendarNewLayout } from "~/src/components/v2/0c_templates/CalendarNewLayout";
import { AppHeader } from "~/src/components/v2/0b_molecules/AppHeader";
import { TemplateSelectionModal } from "~/src/components/v2/0d_pages/TemplateSelectionModal";
import { WelcomeModal } from "~/src/components/v2/0d_pages/WelcomeModal";
import { SaveModal } from "~/src/components/v2/0d_pages/SaveModal";
import { useLeavePageConfirm } from "~/src/hooks/v2/useLeavePageConfirm";
import { useSelectTabAfterTutorial } from "~/src/hooks/v2/useSelectTab";

export function CalendarNewPage() {
  useLeavePageConfirm();
  useSelectTabAfterTutorial();
  const isFinishedAboutTutorial = useSelectIsFinished();
  const { next: nextStep } = useTutorial();
  const stepName = useSelectStepName();

  const shouldShowCalendar =
    isFinishedAboutTutorial || stepName === "SHOW_CALENDAR";
  const shouldShowWelcome = stepName === "INPUT_BIRTHDAY";
  const shouldShowSelection = stepName === "SELECT_TEMPLATE";

  const onCoseTemplateSelection = useCallback(() => {
    if (!isFinishedAboutTutorial) return;
    nextStep();
  }, [nextStep, isFinishedAboutTutorial]);

  return (
    <>
      {/* Step Pages */}
      <WelcomeModal isOpen={shouldShowWelcome} onFinish={nextStep} />
      <TemplateSelectionModal
        isOpen={shouldShowSelection}
        onClose={onCoseTemplateSelection}
      />
      {shouldShowCalendar && (
        <CalendarNewLayout
          header={<AppHeader />}
          body={<UserCalendarSection />}
        />
      )}

      {/* Modals */}
      <SaveModal />
    </>
  );
}

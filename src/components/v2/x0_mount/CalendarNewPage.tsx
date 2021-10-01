import { useSelectStepName, useTutorial } from "@/hooks/v2/useTutorial";
import { UserCalendarSection } from "@/components/v2/x2_feature/UserCalendarSection";
import { TemplateSelectionModal } from "@/components/v2/x0_mount/TemplateSelectionModal";
import { WelcomeModal } from "@/components/v2/x0_mount/WelcomeModal";

export function CalendarNewPage() {
  const { next: nextStep } = useTutorial();
  const stepName = useSelectStepName();

  const shouldShowCalendar = stepName === "SHOW_CALENDAR";
  const shouldShowWelcome = stepName === "INPUT_BIRTHDAY";
  const shouldShowSelection = stepName === "SELECT_TEMPLATE";

  return (
    <>
      <WelcomeModal isOpen={shouldShowWelcome} onFinish={nextStep} />
      <TemplateSelectionModal isOpen={shouldShowSelection} />
      {shouldShowCalendar && <UserCalendarSection />}
    </>
  );
}

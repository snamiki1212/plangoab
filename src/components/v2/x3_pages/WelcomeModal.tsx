import { useMemo, useCallback } from "react";

// TODO: v1
import { useUser } from "@/hooks/v1/useUser";
import { useTemplateOptions } from "@/hooks/v1/useTemplateOptions";
import { useUserCalendar } from "@/hooks/v1/useUserCalendar";
import { Presenter as WelcomeModalPresenter } from "@/components/v1/organisms/WelcomeModal";

type Props = {
  onFinish: () => void;
  isOpen: boolean;
};

export const WelcomeModal: React.VFC<Props> = ({ onFinish, isOpen }) => {
  const { init: initUserCalendar } = useUserCalendar();
  const { birth, setBirth } = useUser();
  const { options } = useTemplateOptions();
  const workingholidayPeriod = useMemo(
    () => options.workingholidayPeriod,
    [options.workingholidayPeriod]
  );
  const handleFinish = useCallback(() => {
    initUserCalendar({ birthday: birth, workingholidayPeriod });
    onFinish();
  }, [onFinish, initUserCalendar, birth, workingholidayPeriod]);
  const handleDateChange = useCallback(
    (date: Date | null) => {
      if (!date) return;
      setBirth(date.toISOString());
    },
    [setBirth]
  );
  return (
    <WelcomeModalPresenter
      birthday={birth}
      isOpen={isOpen}
      onFinish={handleFinish}
      onDateChange={handleDateChange}
    />
  );
};

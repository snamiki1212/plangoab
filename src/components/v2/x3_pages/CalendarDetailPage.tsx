import { useEffect } from "react";
import { usePrevious } from "react-use";
import { useFetchCalendarQuery } from "~/src/redux/v2/services/calendarApi";
import { LoadingPage } from "~/src/components/v1/pages/LoadingPage";
import { ErrorPage } from "~/src/components/v1/pages/ErrorPage";
import { denormalizeCalendar } from "~/src/core/v1/denormalize";
import { CalendarNewLayout } from "~/src/components/v2/x2_templates/CalendarNewLayout";
import { AppHeader } from "~/src/components/v2/x1_molecules/AppHeader";
import { UserCalendarSection } from "~/src/components/v2/x1_molecules/UserCalendarSection";
import { useUserCalendar } from "~/src/hooks/v1/useUserCalendar";

type Props = { calendarId: string };

export const CalendarDetailPage: React.VFC<Props> = ({ calendarId }) => {
  const {
    data: calendar = undefined,
    error,
    isLoading,
  } = useFetchCalendarQuery(calendarId);

  const { replace } = useUserCalendar();

  const denormalized = denormalizeCalendar(calendar);
  console.log({ calendar, denormalized });

  const prevCalendar = usePrevious(denormalized);
  useEffect(() => {
    const shouldInsertIntoReduxOnce = prevCalendar == undefined;
    if (shouldInsertIntoReduxOnce) {
      console.log("Replace");
      replace(denormalized);
    }
  }, [denormalized, prevCalendar]);

  if (error) return <ErrorPage />;
  if (isLoading) return <LoadingPage />;

  return (
    <CalendarNewLayout header={<AppHeader />} body={<UserCalendarSection />} />
  );
};

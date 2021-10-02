import { useEffect, useMemo } from "react";
import { usePrevious } from "react-use";
import { useFetchCalendarQuery } from "~/src/redux/v2/services/calendarApi";
import { CalendarNewLayout } from "~/src/components/v2/0c_templates/CalendarNewLayout";
import { AppHeader } from "~/src/components/v2/0b_molecules/AppHeader";
import { UserCalendarSection } from "~/src/components/v2/0b_molecules/UserCalendarSection";
import { useSelectTabAfterFetch } from "~/src/hooks/v2/useSelectTab";

// TODO: v1 to v2
import { LoadingPage } from "~/src/components/v1/pages/LoadingPage";
import { ErrorPage } from "~/src/components/v1/pages/ErrorPage";
import { denormalizeCalendar } from "~/src/core/v1/denormalize";
import { useUserCalendar } from "~/src/hooks/v1/useUserCalendar";

type Props = { calendarId: string };

export const CalendarDetailPage: React.VFC<Props> = ({ calendarId }) => {
  const {
    data: calendar = undefined,
    error,
    isLoading,
    isSuccess,
  } = useFetchCalendarQuery(calendarId);

  const { replace } = useUserCalendar();

  const denormalized = useMemo(() => denormalizeCalendar(calendar), [calendar]);

  const prevCalendar = usePrevious(denormalized);

  useEffect(() => {
    const shouldInsertIntoReduxOnce = prevCalendar == undefined;
    if (shouldInsertIntoReduxOnce) replace(denormalized);
  }, [denormalized, prevCalendar]);

  useSelectTabAfterFetch(isSuccess);

  if (error) return <ErrorPage />;
  if (isLoading) return <LoadingPage />;

  return (
    <CalendarNewLayout header={<AppHeader />} body={<UserCalendarSection />} />
  );
};

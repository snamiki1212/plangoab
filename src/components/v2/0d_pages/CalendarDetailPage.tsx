import { useFetchCalendarQuery } from "~/src/redux/v2/services/calendarApi";
import { CalendarUpsertLayout } from "~/src/components/v2/0c_templates/CalendarUpsertLayout";
import { AppHeader } from "~/src/components/v2/0b_molecules/AppHeader";
import { UserCalendarSection } from "~/src/components/v2/0b_molecules/UserCalendarSection";
import { useSelectTabAfterFetch } from "~/src/hooks/v2/useSelectTab";
import { useUpdateCalendarOnce } from "~/src/hooks/v2/useUpdateCalendarOnce";

// TODO: v1 to v2
import { LoadingPage } from "~/src/components/v1/pages/LoadingPage";
import { ErrorPage } from "~/src/components/v1/pages/ErrorPage";

type Props = { calendarId: string };

export const CalendarDetailPage: React.VFC<Props> = ({ calendarId }) => {
  const {
    data: calendar = undefined,
    error,
    isLoading,
    isSuccess,
  } = useFetchCalendarQuery(calendarId);

  useUpdateCalendarOnce(calendar);
  useSelectTabAfterFetch(isSuccess);

  if (error) return <ErrorPage />;
  if (isLoading) return <LoadingPage />;

  return (
    <CalendarUpsertLayout
      header={<AppHeader />}
      body={<UserCalendarSection />}
    />
  );
};

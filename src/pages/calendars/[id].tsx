import { useRouter } from "next/router";
import { CalendarDetailPage } from "~/src/components/v2/0d_pages/CalendarDetailPage";

const Page = () => {
  const router = useRouter();
  const { id: calendarId } = router.query;
  if (calendarId == undefined) return <></>;
  return <CalendarDetailPage calendarId={calendarId as string} />;
};

export default Page;

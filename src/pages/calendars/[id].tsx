import { useRouter } from "next/router";
import { CalendarDetailPage } from "@/components/v1/pages/CalendarDetailPage";

const Page = () => {
  const router = useRouter();
  const { id: calendarId } = router.query;
  return <CalendarDetailPage calendarId={calendarId as string} />;
};

export default Page;

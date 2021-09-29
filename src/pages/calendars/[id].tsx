import { useRouter } from "next/router";
import { CalendarDetailPage } from "@/components/v1/pages/CalendarDetailPage";

const Page = () => {
  const router = useRouter();
  const { id } = router.query;
  return <CalendarDetailPage slug={id as string} />;
};

export default Page;

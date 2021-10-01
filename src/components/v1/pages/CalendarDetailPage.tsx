import React from "react";
import { LoadingPage } from "@/components/v1/pages/LoadingPage";

type Props = { calendarId: string };

export const CalendarDetailPage: React.VFC<Props> = ({ calendarId }) => {
  // TODO: fetch data use slug
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    setInterval(() => setLoading(false), 1_000);
  }, []);
  // --

  if (loading) return <LoadingPage />;
  return <div>ok</div>;
};

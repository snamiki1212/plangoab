import React from "react";

type Props = { slug: string };
export const CalendarDetailPage: React.VFC<Props> = ({ slug }) => {
  // fetch data use slug
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    setInterval(() => setLoading(false), 1_000);
  }, []);
  // --

  if (loading) return <div>loading</div>;
  return <div>ok</div>;
};
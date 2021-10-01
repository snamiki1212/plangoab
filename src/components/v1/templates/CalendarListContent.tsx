import Link from "next/link";
import { DataGrid } from "@mui/x-data-grid";
import { ROUTES } from "~/src/constants/routes";

const columns = [
  { field: "id", headerName: "ID", width: 100 },
  {
    field: "birthday",
    headerName: "Birthday",
    width: 250,
    editable: false,
  },
  {
    field: "link",
    headerName: "Link",
    description: "Show calendar",
    sortable: false,
    width: 160,
    renderCell: (params) => (
      <DoLink url={ROUTES.CALENDARS__DETAIL(params.id)} />
    ),
  },
];

const DoLink = ({ url }: { url: string }) => {
  return (
    <Link href={url}>
      <a style={{ textDecoration: "none" }}>Link</a>
    </Link>
  );
};

type Row = { id: number; birthday: Date };
type Props = { rows: Row[] };

export const CalendarListContent: React.VFC<Props> = ({ rows }) => {
  return <DataGrid rows={rows} columns={columns} pageSize={10} />;
};

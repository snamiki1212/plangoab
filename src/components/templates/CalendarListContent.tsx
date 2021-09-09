import Link from "next/link";
import { DataGrid } from "@mui/x-data-grid";
import { ROUTES } from "@/constants/routes";

const columns = [
  { field: "id", headerName: "ID", width: 100 },
  {
    field: "startedAt",
    headerName: "start date",
    width: 150,
    editable: false,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: false,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 110,
    editable: false,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue(params.id, "firstName") || ""} ${
        params.getValue(params.id, "lastName") || ""
      }`,
  },
  {
    field: "link",
    headerName: "Show",
    description: "Show calendar",
    sortable: false,
    width: 160,
    renderCell: (params) => <DoLink url={params.value} />,
  },
];

const DoLink = ({ url }: { url: string }) => {
  return (
    <Link href={url}>
      <a style={{ textDecoration: "none" }}>Link</a>
    </Link>
  );
};

const now = new Date();

const NAIVE_ROWS = [
  { id: 1, startedAt: now, firstName: "Jon", age: 35 },
  { id: 2, startedAt: now, firstName: "Cersei", age: 42 },
  { id: 3, startedAt: now, firstName: "Jaime", age: 45 },
  { id: 4, startedAt: now, firstName: "Arya", age: 16 },
  { id: 5, startedAt: now, firstName: "Daenerys", age: null },
  { id: 6, startedAt: now, firstName: null, age: 150 },
  { id: 7, startedAt: now, firstName: "Ferrara", age: 44 },
  { id: 8, startedAt: now, firstName: "Rossini", age: 36 },
  { id: 9, startedAt: now, firstName: "Harvey", age: 65 },
];

const rows = NAIVE_ROWS.map((item) => ({
  ...item,
  link: ROUTES.CALENDARS__DETAIL(item.id),
}));

export const CalendarListContent = () => {
  return (
    <DataGrid
      rows={[...rows, ...rows, ...rows, ...rows]}
      columns={columns}
      pageSize={5}
      rowsPerPageOptions={[5]}
      // isRowSelectable={() => true}
    />
  );
};

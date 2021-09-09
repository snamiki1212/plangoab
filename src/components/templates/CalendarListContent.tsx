import { DataGrid } from "@mui/x-data-grid";

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
];

const now = new Date();

const rows = [
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

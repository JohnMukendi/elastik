export const columns = [
  { field: "task", headerName: "Task", flex: 1, editable: true },
  {
    field: "firstName",
    headerName: "First name",
    flex: 1,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    flex: 1,
    editable: true,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    flex: 1,
    editable: true,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    flex: 1,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];
export const rowsData = [
  { id: 1, task: "ride bike", lastName: "Snow", firstName: "Jon", age: 35 },
  {
    id: 2,
    task: "ride bike",
    lastName: "Lannister",
    firstName: "Cersei",
    age: 42,
  },
  {
    id: 3,
    task: "ride bike",
    lastName: "Lannister",
    firstName: "Jaime",
    age: 45,
  },
  { id: 4, task: "ride bike", lastName: "Stark", firstName: "Arya", age: 16 },
  {
    id: 5,
    task: "ride bike",
    lastName: "Targaryen",
    firstName: "Daenerys",
    age: null,
  },
  {
    id: 6,
    task: "ride bike",
    lastName: "Melisandre",
    firstName: null,
    age: 150,
  },
  {
    id: 7,
    task: "ride bike",
    lastName: "Clifford",
    firstName: "Ferrara",
    age: 44,
  },
  {
    id: 8,
    task: "ride bike",
    lastName: "Frances",
    firstName: "Rossini",
    age: 36,
  },
  { id: 9, task: "ride bike", lastName: "Roxie", firstName: "Harvey", age: 65 },
];

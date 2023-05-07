import * as React from "react";
import { IconButton, Box,Tooltip } from "@mui/material";
import {
  DataGrid,
  GridToolbar,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarContainer,
} from "@mui/x-data-grid";
import AddchartOutlinedIcon from '@mui/icons-material/AddchartOutlined';
const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export default function DataGridDemo(props) {
  const CustomToolbar = () => {
    return (
      <GridToolbarContainer sx={{width:"100%"}}>
        <GridToolbar sx={{display:"flex"}}/>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            marginLeft:"auto"
          }}
        >
          <Tooltip  title="Add your first task!">
          <IconButton onClick={props.handleCreate} className={props.firstTask ? "shake" : ""} color="success" sx={{borderRadius:"0px"}}>
            <AddchartOutlinedIcon />
            <b style={{fontSize:"14px",marginLeft:"4px"}}>ADD</b>
          </IconButton>
          </Tooltip>
        </Box>
      </GridToolbarContainer>
    );
  };
  return (
    <Box
      sx={{
        height: "70vh",
        width: "100%",
        "& .MuiDataGrid-root": {
          border: `1px solid ${props.theme.background.dark}`,
        },
        "& .MuiDataGrid-columnHeaders": {
          background: props.headerBackground,
        },
        "& .MuiDataGrid-footerContainer": {
          background: props.headerBackground,
        },
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={9}
        pageSizeOptions={[8]}
        checkboxSelection
        disableRowSelectionOnClick
        rowsPerPageOptions={8}
        components={{ Toolbar: CustomToolbar }}
      />
    </Box>
  );
}

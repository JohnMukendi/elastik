import React,{useState} from "react";
import { IconButton, Box,Tooltip } from "@mui/material";
import {
  DataGrid,
  GridToolbar,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarContainer,
} from "@mui/x-data-grid";
import AddchartOutlinedIcon from '@mui/icons-material/AddchartOutlined';
import TaskModal from "../undertakings/taskModal";
const columns = [
  { field: "task", headerName: "Task", flex:1,editable:true },
  {
    field: "firstName",
    headerName: "First name",
    flex:1,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    flex:1,
    editable: true,
  },
  {   
    field: "age",
    headerName: "Age",
    type: "number",
    flex:1,
    editable: true,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    flex:1,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const rows = [
  { id: 1,task:"ride bike", lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2,task:"ride bike", lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3,task:"ride bike", lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4,task:"ride bike", lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5,task:"ride bike", lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6,task:"ride bike", lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7,task:"ride bike", lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8,task:"ride bike", lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9,task:"ride bike", lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export default function DataGridDemo(props) {
  const [openTaskModal,setOpenTaskModal] = useState(false)
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
          <IconButton onClick={()=>setOpenTaskModal(true)} className={props.firstTask ? "shake" : ""} color="success" sx={{borderRadius:"0px"}}>
            <AddchartOutlinedIcon />
            <b style={{fontSize:"14px",marginLeft:"4px"}}>ADD</b>
          </IconButton>
          </Tooltip>
        </Box>
      </GridToolbarContainer>
    );
  };
  return (
    <>
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
    <TaskModal open={openTaskModal} setOpen={setOpenTaskModal} handleCreate={props.handleCreate}/>
    </>
  );
}

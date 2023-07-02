import React, { useState } from "react";
import { IconButton, Box, Tooltip } from "@mui/material";
import {
  DataGrid,
  GridToolbar,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarContainer,
} from "@mui/x-data-grid";
import AddchartOutlinedIcon from "@mui/icons-material/AddchartOutlined";
import TaskModal from "../undertakings/taskModal";
import { updateData } from "../../utils/update-data";

export default function DataGridDemo(props) {
  const [openTaskModal, setOpenTaskModal] = useState(false);

  const handleCreate = (e, newTask) => {
    e.preventDefault();
    console.log(newTask);

    props.setRows({ ...newTask, id: Math.random() });

    setOpenTaskModal(false);
    // setFirstTask(false);
  };
  const CustomToolbar = () => {
    return (
      <GridToolbarContainer sx={{ width: "100%" }}>
        <GridToolbar sx={{ display: "flex", width: { xs: "100%" } }} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            marginLeft: "auto",
          }}
        >
          <Tooltip title={props.firstTask ? "Add your first task!" : "Add another task!"}>
            <IconButton
              onClick={() => setOpenTaskModal(true)}
              className={props.firstTask ? "shake" : ""}
              color="success"
              sx={{ borderRadius: "0px" }}
            >
              <AddchartOutlinedIcon />
              <b style={{ fontSize: "14px", marginLeft: "4px" }}>ADD</b>
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
          rows={props.rows}
          columns={props.columns}
          pageSize={9}
          pageSizeOptions={[8]}
          checkboxSelection
          disableRowSelectionOnClick
          rowsPerPageOptions={8}
          components={{ Toolbar: CustomToolbar }}
        />
      </Box>
      <TaskModal
        fields={props.columns}
        open={openTaskModal}
        setOpen={setOpenTaskModal}
        handleCreate={handleCreate}
        rows={props.rows}
      />
    </>
  );
}

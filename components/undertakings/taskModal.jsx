import React, { useState } from "react";
import FormLayout from "../shared/form-layout";
import { Grid, MenuItem, Select, TextField } from "@mui/material";
function TaskModal(props) {
  const initTask = props.rows[0];

  const [newTask, setNewTask] = useState({});
  const handleChange = (e) => {
    setNewTask({
      ...newTask,
      priority:1,
      [e.target.name]: parseInt(e.target.value) || e.target.value,
      
    });
  };
  return (
    <FormLayout
      open={props.open}
      setOpen={props.setOpen}
      handleSubmit={props.handleCreate}
      header="Add your task:"
      newTask={{ ...newTask }}
    >
      <Grid container spacing={2}>
        {props.fields.map((item) => (
          <Grid item xs={12} sm={6} key={item.field}>
            {item.field === "priority" ? (
              <TextField
                select
                label={item.headerName}
                name={item.field}
                onChange={(e) => handleChange(e)}
                fullWidth
                defaultValue={1}
                
              >
                {[1, 2, 3].map((num) => (
                  <MenuItem value={num} key={num}>{num}</MenuItem>
                ))}
              </TextField>
            ) : (
              <TextField
                autoFocus
                onChange={(e) => handleChange(e)}
                fullWidth
                name={item.field}
                label={item.headerName}
                type={item.type || "text"}
                required
                // value={newTask[item.field]}
              />
            )}
          </Grid>
        ))}
      </Grid>
    </FormLayout>
  );
}

export default TaskModal;

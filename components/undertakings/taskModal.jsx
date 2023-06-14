import React, { useState } from "react";
import FormLayout from "../shared/form-layout";
import { Grid, TextField } from "@mui/material";
function TaskModal(props) {
  const initTask = props.rows[0];
  
  const [newTask, setNewTask] = useState({});
  const handleChange = (e) => {
    setNewTask({ ...newTask, [e.target.name]: parseInt(e.target.value) || e.target.value });
  };
  return (
    <FormLayout
      open={props.open}
      setOpen={props.setOpen}
      handleSubmit={props.handleCreate}
      header="Add your task:"
      newTask={{...newTask}}
    >
      <Grid container spacing={2}>
        {props.fields.map((item) => (
          <Grid item xs={12} sm={6} key={item.field}>
            <TextField
              autoFocus
              onChange={(e)=>handleChange(e)}
              fullWidth
              name={item.field}
              label={item.headerName}
              type={item.type || 'text'}
              required
              // value={newTask[item.field]}            
            />
          </Grid>
        ))}
      </Grid>
    </FormLayout>
  );
}

export default TaskModal;

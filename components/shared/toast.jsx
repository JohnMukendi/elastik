import React from "react";
import { Snackbar,Alert } from "@mui/material";

function Toast(props) {
  return (
    <Snackbar
      open={props.open}
      autoHideDuration={3000}
      onClose={() => props.setOpen(false)}
    >
      <Alert severity={props.type} onClose={() => props.setOpen(false)}>
        {props.message}
      </Alert>
    </Snackbar>
  );
}

export default Toast;

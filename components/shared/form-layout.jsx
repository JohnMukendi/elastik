import React from "react";
import {
  Box,
  Modal,
  Button,
  useTheme,
  Typography,
  Divider,
} from "@mui/material";
function FormLayout(props) {
  const theme = useTheme();
  const handleClose = () => {
    props.setOpen(false);
  };

  return (
    <Modal open={props.open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          background: theme.palette.background.default,
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width:{xs:"80%",sm:"fit-content"},
          ...(props.height && { height: props.height }),
          ...(props.width && { width: props.width }),
          borderRadius: "20px",
        }}
      >
        <Box
          display="flex"
          justifyContent="flex-end"
          width="100%"
          cursor="pointer"
        >
          <Box
            sx={{
              background: "maroon",
              color: "white",
              cursor: "pointer",
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "0px 20px 0px 5px",
              overflow: "hidden",
              margin: "0.3px",
            }}
            onClick={handleClose}
          >
            X
          </Box>
        </Box>
        <Box sx={{ padding: "0px 20px" }}>
          <Typography variant="h4" textAlign={"center"} fontWeight={500}>
            {props.header}
          </Typography>
          <Divider />
        </Box>
        <form onSubmit={(e) => props.handleSubmit(e, props.newTask)}>
          <Box p={2}>{props.children}</Box>
          <Box display="flex" justifyContent="space-between" p={2}>
            <Button onClick={handleClose} color="error" variant="outlined">
              {props.buttonName?.cancel || "Cancel"}
            </Button>
            <Button type="submit" color="success" variant="outlined">
              {props.buttonName?.confirm || "Add"}
            </Button>
          </Box>
        </form>
      </Box>
    </Modal>
  );
}

export default FormLayout;

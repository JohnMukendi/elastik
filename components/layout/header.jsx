import React from "react";
import { Box, Typography } from "@mui/material";

function Header({ name, info }) {
  return (
    <Box pt={2} pb={2} data-aos="fade-left">
      <Typography variant="h4" fontWeight={700} color="primary">
        {name.toUpperCase()}
      </Typography>
      <Typography color="secondary" variant="subtitle1">
        {info}
      </Typography>
    </Box>
  );
}

export default Header;

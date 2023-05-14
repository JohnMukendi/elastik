import React from "react";
import Sidebar from "./Sidebar";
import { Box, useMediaQuery } from "@mui/material";
import SwipeableTemporaryDrawer from "./mobile-drawer";
function Layout({ children }) {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  return (
    <div style={{ transition: "1" }}>
      {isSmallScreen ? (
        <SwipeableTemporaryDrawer isSmallScreen={isSmallScreen}>{children}</SwipeableTemporaryDrawer>
      ) : (
        <Sidebar>
          <Box component="main" pl={5}>
            {children}
          </Box>
        </Sidebar>
      )}
    </div>
  );
}

export default Layout;

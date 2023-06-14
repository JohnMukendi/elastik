import React from "react";
import Sidebar from "./Sidebar";
import { Box, useMediaQuery } from "@mui/material";
import SwipeableTemporaryDrawer from "./mobile-drawer";
function Layout({ children }) {
  const isSmallScreen = useMediaQuery("(max-width:1000px)");
  return (
    <Box style={{ transition: "1" }}>
      {isSmallScreen ? (
        <SwipeableTemporaryDrawer isSmallScreen={isSmallScreen}>{children}</SwipeableTemporaryDrawer>
      ) : (
        <Sidebar>
          <Box component="main" pl={5} width='100%' display={'flex'} flexDirection={'column'}>
            {children}
          </Box>
        </Sidebar>
      )}
    </Box>
  );
}

export default Layout;

import React from "react";
import { useTheme, Box, IconButton, Tooltip, Avatar } from "@mui/material";
import { useThemeSwitch } from "../../theme/theme";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import SettingsApplicationsOutlinedIcon from "@mui/icons-material/SettingsApplicationsOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import HouseOutlinedIcon from "@mui/icons-material/HouseOutlined";

function Topbar(props) {
  const theme = useTheme();
  const { isSmallScreen } = props;
  const { appTheme } = useThemeSwitch();
  return (
    <Box
      display="flex"
      width="100%"
      justifyContent="space-between"
      alignItems="center"
      pt={isSmallScreen ? 0 : 2}
      pb={isSmallScreen ? 0 : 2}
      pl={5}
    >
      <Box display="flex">
        {/* shows on mobile */}
        <Box sx={{ display: { md: "none" } }}>
          <IconButton
            color="primary"
            aria-label="open drawer"
            onClick={props.handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(props.open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
        </Box>

        <Box
          display="flex"
          backgroundColor={theme.palette.background.light}
          borderRadius="50px"
          alignItems="center"
          width={isSmallScreen &&('210px')}
        >
          <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search..." />
          <IconButton sx={{ p: 1 }}>
            <SearchIcon color="inherit" />
          </IconButton>
        </Box>
      </Box>

      {/* ICONS */}
      <Box>
        <IconButton
          onClick={appTheme.toggleTheme}
          sx={{ margin: { xs: "0px",md: "0px 4px",  }, borderRadius: "50%" }}
        >
          {theme.palette.mode === "dark" ? (
            <LightModeOutlinedIcon color="primary" />
          ) : (
            <DarkModeOutlinedIcon color="primary" />
          )}
        </IconButton>
        <IconButton sx={{ margin: { xs: "0px",md: "0px 4px",  } }}>
          <SettingsApplicationsOutlinedIcon color="primary" />
        </IconButton>
        <IconButton sx={{margin: { xs: "0px",md: "0px 4px",  }}}>
          <Avatar />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Topbar;

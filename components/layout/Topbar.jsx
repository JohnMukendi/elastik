import React from "react";
import { useTheme, Box, IconButton, Tooltip, Avatar } from "@mui/material";
import { useThemeSwitch } from "../../theme/theme";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import SettingsApplicationsOutlinedIcon from "@mui/icons-material/SettingsApplicationsOutlined";
import MenuIcon from "@mui/icons-material/Menu";

function Topbar(props) {
  const theme = useTheme();
  const { appTheme } = useThemeSwitch();
  return (
    <Box
      display="flex"
      width="100%"
      justifyContent="space-between"
      alignItems="center"
      p={2}
    >
      <Box display="flex">
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
          borderRadius="3px"
          alignItems="center"
        >
          <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search..." />
          <IconButton sx={{ p: 1 }}>
            <SearchIcon color="inherit" />
          </IconButton>
        </Box>
      </Box>

      {/* ICONS */}
      <Box display="flex" justifyContent="space-evenly">
        <IconButton onClick={appTheme.toggleTheme}>
          {theme.palette.mode === "dark" ? (
            <LightModeOutlinedIcon color="primary" />
          ) : (
            <DarkModeOutlinedIcon color="primary" />
          )}
        </IconButton>
        <IconButton>
          <SettingsApplicationsOutlinedIcon color="primary" />
        </IconButton>
        <IconButton>
          <Avatar />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Topbar;

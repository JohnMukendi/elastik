import * as React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";
import Image from "next/image";
import Topbar from "./Topbar";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import ShowChartOutlinedIcon from "@mui/icons-material/ShowChartOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useRouter } from "next/router";
export default function SwipeableTemporaryDrawer({ children }) {
  const router = useRouter();
  const theme = useTheme();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const currentRoute = (pageName) => {
    if (pageName === "Dashboard" && router.pathname === "/") {
      return true;
    }
    if (
      router.pathname.includes(`/${pageName.toLowerCase().replace(/ /g, "-")}`)
    ) {
      return true;
    } else {
      return false;
    }
  };
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box
        pt={3}
        pb={2}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box display="flex" justifyContent="center" alignItems="center" ml={6}>
          <Link href="/">
            <Box>
              <IconButton color="primary">
                <Image src="/favicon.ico" width={40} height={40} alt="logo" />
              </IconButton>
            </Box>
          </Link>
          <Box>
            <Link
              href="/"
              style={{
                textDecoration: "none",
              }}
            >
              <Typography
                color="primary"
                sx={{
                  fontSize: "20px",
                  letterSpacing: "2px",
                  textAlign: "center",
                }}
                fontWeight={700}
                mr={3}
              >
                LASTIK
              </Typography>
            </Link>
          </Box>

          <Box
            sx={{
              position: "relative",
              top: "-2px",
              marginLeft: "auto",
              mr: 2,
            }}
          >
            <IconButton onClick={() => setState({ left: false })}>
              <ChevronLeftIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
      <Divider />
      <Divider sx={{ display: open ? "block" : "none" }} />

      <Box
        mt={2}
        sx={{
          // height: open ? "220px" : "0px",
          display: "flex",
          transition: "1s",
          opacity: open ? 1 : 0,
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Image
          height={open ? 120 : 0}
          width={open ? 120 : 0}
          src="/profile.jpg"
          alt="profile"
          style={{
            borderRadius: "50%",
            background: "blue",
            // transition: "0.6s",
            // display: open ? "block" : "none",
          }}
        />
        <Typography
          color="primary"
          mt={2}
          fontSize={28}
          fontWeight={700}
          noWrap={true}
          sx={{ width: "100%", textAlign: "center", opacity: open ? 1 : 0 }}
        >
          John Mukendi
        </Typography>
      </Box>

      <Divider sx={{ display: open ? "block" : "none" }} />

      <List>
        {[
          { name: "Dashboard", icon: <DashboardOutlinedIcon /> },
          { name: "Undertakings", icon: <AssignmentOutlinedIcon /> },
          { name: "Analytics", icon: <ShowChartOutlinedIcon /> },
          { name: "Calendar", icon: <CalendarMonthOutlinedIcon /> },
          { name: "Plans", icon: <EditNoteOutlinedIcon /> },
        ].map(({ name: text, icon }) => (
          <Link
            key={text}
            href={
              text === "Dashboard"
                ? "/"
                : `/${text.toLowerCase().replace(/ /g, "-")}`
            }
            style={{
              textDecoration: "none",
              margin: "0px",
              padding: "0px",
              color: currentRoute(text)
                ? theme.palette.primary.main
                : theme.palette.text.unselected,
            }}
          >
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {React.cloneElement(icon, {
                    sx: {
                      color: currentRoute(text)
                        ? theme.palette.primary.main
                        : "",
                    },
                  })}
                </ListItemIcon>
                <ListItemText
                  primary={currentRoute(text) ? <b>{text}</b> : text}
                  sx={{
                    opacity: open ? 1 : 0,
                    fontWeight: currentRoute(text) ? "700" : "700",
                  }}
                />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <Typography textAlign="center" mt={1}>
        Charts
      </Typography>
      <List>
        {[
          {
            name: "Pie Chart",
            icon: <PieChartOutlineOutlinedIcon />,
            path: "/pie-chart",
          },
        ].map((item, index) => (
          <Link
            href={item.path}
            key={item.path}
            style={{
              textDecoration: "none",
              margin: "0px",
              padding: "0px",
              color: currentRoute(item.name)
                ? theme.palette.primary.main
                : theme.palette.text.unselected,
            }}
          >
            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {React.cloneElement(item.icon, {
                    sx: {
                      color: currentRoute(item.name)
                        ? theme.palette.primary.main
                        : "",
                    },
                  })}
                </ListItemIcon>

                <ListItemText
                  primary={
                    currentRoute(item.name) ? <b>{item.name}</b> : item.name
                  }
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Topbar
            open={state.left}
            isSmallScreen
            handleDrawerOpen={() => setState({ left: true })}
          />
          <Box p={4}>{children}</Box>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
            sx={{
              "& .MuiDrawer-paper": {
                background: theme.palette.background.light,
              },
            }}
          >
            {list("left")}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}

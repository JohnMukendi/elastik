import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Topbar from "./Topbar";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import ShowChartOutlinedIcon from "@mui/icons-material/ShowChartOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer({ children }) {
  const theme = useTheme();
  const router = useRouter();

  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
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
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        sx={{
          ...(!open && { width: { sm: "100%", md: "95%" } }),
          background: theme.palette.background.default,
          display: "flex",
          alignItems: "center",
        }}
        elevation={0}
      >
        <Topbar open={open} handleDrawerOpen={handleDrawerOpen} />
      </AppBar>
      <Drawer
        variant="permanent"
        open={open}
        sx={{
          "& .MuiDrawer-paper": {
            background: theme.palette.background.light,
          },
        }}
      >
        <DrawerHeader
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box pt={3} pb={2} display="flex" alignItems="center">
            <Link href="/">
              <Box>
                <IconButton color="primary">
                  <img
                    src="favicon.ico"
                    style={{ width: "40px", height: "40px" }}
                  />
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

            <Box sx={{ position: "relative", top: "-2px" }}>
              {open ? (
                <IconButton onClick={handleDrawerClose}>
                  <ChevronLeftIcon />
                </IconButton>
              ) : (
                <IconButton onClick={handleDrawerOpen}>
                  <ChevronRightIcon />
                </IconButton>
              )}
            </Box>
          </Box>
        </DrawerHeader>
        <Divider sx={{ display: open ? "block" : "none" }} />

        <Box
          mt={2}
          sx={{
            height: open ? "220px" : "0px",
            display: "flex",
            transition: "0.6s",

            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Image
            height={open ? 120 : 0}
            width={open ? 120 : 0}
            src="/profile.jpg"
            style={{
              borderRadius: "50%",
              background: "blue",
              transition: "0.6s",
              // display: open ? "block" : "none",
            }}
          />
          <Typography
            color="primary"
            mt={2}
            fontSize={28}
            fontWeight={700}
            noWrap={true}
            sx={{ width: "100%", textAlign: "center" }}
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
              href={
                text === "Dashboard"
                  ? "/"
                  : `/${text.toLowerCase().replace(/ /g, "-")}`
              }
              style={{
                textDecoration: "none",
                margin: "0px",
                padding: "0px",
                color: currentRoute(text) ? theme.palette.primary.main : "#222",
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
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
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
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
}

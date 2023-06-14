import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import React, { useState } from "react";
import { Box, Typography, Grid } from "@mui/material";
import { useThemeSwitch } from "../theme/theme";
import { useTheme } from "@mui/material";
import Header from "../components/layout/header";
import InfoBox from "../components/dashboard/info-box";
import Brightness3OutlinedIcon from "@mui/icons-material/Brightness3Outlined";
import Brightness2OutlinedIcon from "@mui/icons-material/Brightness2Outlined";
import Brightness1OutlinedIcon from "@mui/icons-material/Brightness1Outlined";
import HourglassFullOutlinedIcon from "@mui/icons-material/HourglassFullOutlined";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { appTheme } = useThemeSwitch();
  const theme = useTheme();
  return (
    <Box>
      <Head>
        <title>Elastik | Dashbaord</title>
      </Head>
      {/* header */}

      <Header
        name="dashboard"
        info="Welcome to your dashbaord,this is an overview of all your task"
      />
      <Grid container spacing={2}>
        <Grid item xs={6} md={3}>
          <InfoBox
            palette={theme.palette}
            level="lowLevel"
            title="Low level"
            icon={<Brightness3OutlinedIcon />}
            info={{ percentage: "0.75", tasksCompleted: 100 }}
            size="50px"
            
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <InfoBox
            palette={theme.palette}
            level="mediumLevel"
            title="Medium level"
            icon={<Brightness2OutlinedIcon />}
            info={{ percentage: "0.45", tasksCompleted: 73 }}
            size="50px"
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <InfoBox
            palette={theme.palette}
            level="fullLevel"
            title="Full level"
            icon={<Brightness1OutlinedIcon />}
            info={{ percentage: "0.15", tasksCompleted: 23 }}
            size="50px"
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <InfoBox
            palette={theme.palette}
            level="total"
            title="Total number of Tasks Completed"
            icon={<HourglassFullOutlinedIcon />}
            info={{ percentage: "0.18", tasksCompleted: 196 }}
            size="50px"
          />
        </Grid>
        <Grid item xs={12} md={9}>
          <Box
            elevation={5}
            sx={{
              background: "#eee",
              height: "240px",
              border: `1px solid ${theme.palette.background.default}`,
              borderRadius: "40px",
              transition: "0.5s",
              "&:hover": {
                scale: "1.03",
                cursor: "pointer",
                transition: "0.5s",
              },
            }}
          >
            {" "}
          </Box>
        </Grid>
        <Grid item xs={6} md={3}>
          <Box
            elevation={5}
            sx={{
              background: "#eee",
              height: "240px",
              border: `1px solid ${theme.palette.background.default}`,
              borderRadius: "40px",
              overflowY: "scroll",
              transition: "0.5s",
              "&:hover": {
                scale: "1.1",
                cursor: "pointer",
                transition: "0.5s",
              },
            }}
          >
            {" "}
            <Box height="400px" />
          </Box>
        </Grid>
        <Grid item xs={6} md={4}>
          <Box
            elevation={5}
            sx={{
              background: "transparent",
              height: "100%",

              border: `1px solid ${theme.palette.background.default}`,
              borderRadius: "40px",
              transition: "0.5s",
              "&:hover": {
                scale: "1.1",
                cursor: "pointer",
                transition: "0.5s",
              },
            }}
          >
            {" "}
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            elevation={5}
            sx={{
              background: "transparent",
              height: "100%",

              border: `1px solid ${theme.palette.background.default}`,
              borderRadius: "40px",
              transition: "0.5s",
              "&:hover": {
                scale: "1.1",
                cursor: "pointer",
                transition: "0.5s",
              },
            }}
          >
            {" "}
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            elevation={5}
            sx={{
              background: "transparent",
              height: "170px",
              border: `1px solid ${theme.palette.background.default}`,
              borderRadius: "40px",
              transition: "0.5s",
              "&:hover": {
                scale: "1.1",
                cursor: "pointer",
                transition: "0.5s",
              },
            }}
          >
            {" "}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

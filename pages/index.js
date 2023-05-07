import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import React, { useState } from "react";
import { Box, Typography, Grid } from "@mui/material";
import { useThemeSwitch } from "../theme/theme";
import { useTheme, Paper } from "@mui/material";
import Header from "../components/layout/header";
import InfoBox from "../components/dashboard/info-box";
import Brightness3OutlinedIcon from "@mui/icons-material/Brightness3Outlined";
import Brightness2OutlinedIcon from "@mui/icons-material/Brightness2Outlined";
import Brightness1OutlinedIcon from "@mui/icons-material/Brightness1Outlined";

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
        <Grid item md={3}>
          <InfoBox
            palette={theme.palette}
            level="lowLevel"
            title="Low Level"
            icon={<Brightness3OutlinedIcon />}
            info={{ percentage: "0.75", tasksCompleted: 100 }}
            size="50px"
          />
        </Grid>
        <Grid item md={3}>
          <InfoBox
            palette={theme.palette}
            level="mediumLevel"
            title="Medium Level"
            icon={<Brightness2OutlinedIcon />}
            info={{ percentage: "0.45", tasksCompleted: 73 }}
            size="50px"
          />
        </Grid>
        <Grid item md={3}>
          <InfoBox
            palette={theme.palette}
            level="fullLevel"
            title="Full Level"
            icon={<Brightness1OutlinedIcon />}
            info={{ percentage: "0.15", tasksCompleted: 23 }}
            size="50px"
          />
        </Grid>
        <Grid item md={3}>
          <Paper
            elevation={5}
            sx={{
              background: "transparent",
              height: "100%",
              transition: "0.5s",
              "&:hover": {
                scale: "1.1",
                cursor: "pointer",
                transition: "0.5s",
              },
            }}
          >
          {" "}
          </Paper>
        </Grid>
        <Grid item md={9}>
          <Paper
            elevation={5}
            sx={{
              background: "transparent",
              height: "240px",
              transition: "0.5s",
              "&:hover": {
                scale: "1.03",
                cursor: "pointer",
                transition: "0.5s",
              },
            }}
          >
          {" "}
          </Paper>
        </Grid>
        <Grid item md={3}>
          <Paper
            elevation={5}
            sx={{
              background: "transparent",
              height: "240px",
              overflowY:"scroll",
              transition: "0.5s",
              "&:hover": {
                scale: "1.1",
                cursor: "pointer",
                transition: "0.5s",
              },
            }}
          >
          {" "}<Box height='400px'/>
          </Paper>
        </Grid>
        <Grid item md={4}>
          <Paper
            elevation={5}
            sx={{
              background: "transparent",
              height: "100%",
              transition: "0.5s",
              "&:hover": {
                scale: "1.1",
                cursor: "pointer",
                transition: "0.5s",
              },
            }}
          >
          {" "}
          </Paper>
        </Grid>
        <Grid item md={4}>
          <Paper
            elevation={5}
            sx={{
              background: "transparent",
              height: "100%",
              transition: "0.5s",
              "&:hover": {
                scale: "1.1",
                cursor: "pointer",
                transition: "0.5s",
              },
            }}
          >
          {" "}
          </Paper>
        </Grid>
        <Grid item md={4}>
          <Paper
            elevation={5}
            sx={{
              background: "transparent",
              height: "170px",
              transition: "0.5s",
              "&:hover": {
                scale: "1.1",
                cursor: "pointer",
                transition: "0.5s",
              },
            }}
          >
          {" "}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { useThemeSwitch } from "../theme/theme";
import { useTheme } from "@mui/material";
import Header from "../components/layout/header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { appTheme } = useThemeSwitch();
  const theme = useTheme();
  return (
    <Box>
      <Head><title>Elastik | Dashbaord</title></Head>
      {/* header */}
      
      <Header
        name="dashboard"
        info="Welcome to your dashbaord,this is an overview of all your task"
      ></Header>
    </Box>
  );
}

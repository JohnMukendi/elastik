import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import { useThemeSwitch } from "../theme/theme";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { appTheme } = useThemeSwitch();

  return (
    <Box>
      <Button onClick={appTheme.toggleTheme}>Click Me</Button>
    </Box>
  );
}

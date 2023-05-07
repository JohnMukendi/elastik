import React from "react";
import Header from "../components/layout/header";
import Head from "next/head";
import { Box } from "@mui/material";
import PieChartComp from "../components/shared/pie-chart";
function PieChart() {
  return (
    <Box>
      <Head>
        <title>Elastik | PieChart</title>
      </Head>
      <Header
        name="Pie Chart"
        info="A breakdown of your tasks in a pie chart format"
      />
      <Box height="60vh">
        <PieChartComp />
      </Box>
    </Box>
  );
}

export default PieChart;

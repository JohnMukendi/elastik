import React, { useState, useEffect } from "react";
import { Box, useTheme } from "@mui/material";
import Header from "../components/layout/header";
import Head from "next/head";
import TasksList from "../components/Lists/tasks-list";
import Toast from "../components/shared/toast";
import { getUnderTakings } from "../utils/apis";
import { useFireBase } from "../lib/firebase";
import { updateData } from "../utils/update-data";
import { useTasks } from "../contexts/tasks/tasks-context";

function Undertakings() {
  const theme = useTheme();
  const { state, dispatch } = useTasks();
  const { tasks: rows, taskColumns, firstTask } = state;
  const { db } = useFireBase();

  useEffect(() => {
    async function getData() {
      // const [tasks,err] = await getUnderTakings(db)
      // console.log({tasks,err})
    }
    getData();
  }, []);

  return (
    <Box>
      <Head>
        <title>Elastik | Undertakings</title>
      </Head>
      {/* header */}
      <Header
        name="undertakings"
        info="These below are the set of tasks you set for yourself"
      ></Header>
      <TasksList
        // handleCreate={handleCreate}
        firstTask={firstTask}
        headerBackground={theme.palette.background.dark}
        theme={theme.palette}
        rows={rows}
        setRows={(data) => {
          dispatch("isFirstTask", false);
          dispatch("addTask", data);
        }}
        columns={taskColumns}
      />
    </Box>
  );
}

export default Undertakings;

import React, { useState, useEffect } from "react";
import { Box, useTheme } from "@mui/material";
import Header from "../components/layout/header";
import Head from "next/head";
import TasksList from "../components/Lists/tasks-list";
import Toast from "../components/shared/toast";
import { getUnderTakings } from "../utils/apis";
import { useFireBase } from "../lib/firebase";

function Undertakings() {
  const theme = useTheme();
  const [firstTask, setFirstTask] = useState(true);
  const {db} = useFireBase()  
  useEffect(() => {
    async function getData() {
      const [tasks,err] = await getUnderTakings(db)
      // console.log({tasks,err})
    }
    getData()
    
  }, [])
  
  const handleCreate = (e) => {
    e.preventDefault()
    setFirstTask(false);
  };
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
        handleCreate={handleCreate}
        firstTask={firstTask}
        headerBackground={theme.palette.background.dark}
        theme={theme.palette}
        
      />
      
    </Box>
  );
}

export default Undertakings;

import React from 'react'
import {Box} from "@mui/material"
import Header from "../components/layout/header";
import Head from 'next/head'
import TasksList from '../components/Lists/tasks-list'

function Undertakings() {
  return (
    <Box>
      <Head><title>Elastik | Undertakings</title></Head>
      {/* header */}
      <Header
        name="undertakings"
        info="These below are the set of tasks you set for yourself"
      ></Header>
      <TasksList/>
    </Box>
  )
}

export default Undertakings
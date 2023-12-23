import React from "react";
import PropTypes from "prop-types";
import "../../components/css styles/taskboard.css";

import { Grid, GridItem, Hide, Show } from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import AllTasks from "./AllTasks";
import { Outlet } from "react-router-dom";
const TaskBoard = (props) => {
  return (
    <Grid
      templateColumns="repeat(12, 1fr)"
      gap={6}
      className=" overflow-hidden  text-gray-200 bg-gray-200 "
    >
      <Show above="md">
        {" "}
        <GridItem colSpan={3} w={"100%"}>
          <Sidebar />
        </GridItem>
        <GridItem colSpan={9} className="bg-taskboard">
          <Outlet />
        </GridItem>
      </Show>
      <Show below="md">
        <GridItem colSpan={12}>
          <Sidebar />
        </GridItem>
        <GridItem colSpan={12} className="bg-taskboard">
          <Outlet />
        </GridItem>
      </Show>
    </Grid>
  );
};

TaskBoard.propTypes = {};

export default TaskBoard;

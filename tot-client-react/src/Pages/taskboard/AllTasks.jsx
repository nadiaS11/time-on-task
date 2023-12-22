import React from "react";
import PropTypes from "prop-types";
import "../../components/css styles/taskboard.css";
import useAllTasks from "../../hooks/useAllTasks";
import TaskList from "./TaskList";
import { Wrap, WrapItem } from "@chakra-ui/react";
const AllTasks = () => {
  const tasks = useAllTasks();
  console.log(tasks);
  return (
    <div className="w-full  space-y-8 p-10 min-h-screen">
      <Wrap spacing={"10px"}>
        <WrapItem mx={"auto"}>
          <TaskList list={"To-Do"} tasks={tasks} status={"todo"} />
        </WrapItem>
        <WrapItem mx={"auto"}>
          <TaskList list={"Ongoing"} tasks={tasks} status={"ongoing"} />
        </WrapItem>
        <WrapItem mx={"auto"}>
          <TaskList list={"Completed"} tasks={tasks} status={"completed"} />
        </WrapItem>
      </Wrap>
    </div>
  );
};

AllTasks.propTypes = {};

export default AllTasks;

import React from "react";
import PropTypes from "prop-types";
import "../../components/css styles/taskboard.css";
import { Box, StackDivider, VStack } from "@chakra-ui/react";
import TaskBoardProfile from "./TaskBoardProfile";
import TaskBoardNav from "./TaskBoardNav";
const Sidebar = (props) => {
  return (
    <div className="bg-taskboard  min-h-screen">
      <VStack
        height={"100vh"}
        divider={<StackDivider borderColor="cornsilk" />}
        spacing={4}
        align="stretch"
        padding={"30px 10px"}
      >
        <Box h="35%">
          <TaskBoardProfile />{" "}
        </Box>
        <Box>
          <TaskBoardNav />
        </Box>
      </VStack>
    </div>
  );
};

Sidebar.propTypes = {};

export default Sidebar;

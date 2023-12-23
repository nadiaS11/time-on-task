import React from "react";
import PropTypes from "prop-types";
import { VStack, Box, Text, Flex } from "@chakra-ui/react";
import { FaHome } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import useMenu from "../../hooks/useMenu";
import { auth } from "../../Auths/firebase.config";
const TaskBoardNav = (props) => {
  const menu = useMenu();
  return (
    <VStack spacing={2} align={"center"} w={"400px"}>
      <Box
        href="/taskboard"
        as="a"
        h="40px"
        display={"Flex"}
        alignItems={"center"}
        gap={"10px"}
      >
        <MdDashboard />
        <Text w={"150px"}>All Tasks</Text>
      </Box>
      {menu?.map((item, id) => (
        <Box
          key={id}
          href={item?.path ? `/taskboard/${item?.path}` : "/"}
          as="a"
          h="40px"
          display={"inline-flex"}
          alignItems={"center"}
          gap={"10px"}
        >
          {item?.icon}
          <Text w={"150px"}>{item?.name}</Text>
        </Box>
      ))}
    </VStack>
  );
};

TaskBoardNav.propTypes = {};

export default TaskBoardNav;

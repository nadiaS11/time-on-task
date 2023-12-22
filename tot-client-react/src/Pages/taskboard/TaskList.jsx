import React from "react";
import PropTypes from "prop-types";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { FaPenSquare } from "react-icons/fa";
const TaskList = ({ list, tasks, status }) => {
  console.log(tasks);
  return (
    <TableContainer className="pt-5" maxW={"fit-content"} borderRadius="md">
      <Table variant="striped" colorScheme="white">
        <TableCaption
          borderTopRadius="lg"
          placement="top"
          bgGradient={
            list === "To-Do"
              ? ["linear(to-br, blue.600, blue.400)"]
              : list === "Completed"
              ? ["linear(to-br, green.600, green.400)"]
              : list === "Ongoing"
              ? ["linear(to-br, yellow.700, yellow.400)"]
              : ["linear(to-br, purple.900, pink.400)"]
          }
          //   _hover={{
          //     bgGradient: "linear(to-br, purple.900, pink.400)",
          //   }}
          fontSize={"24px"}
          color={"white"}
        >
          {list}
        </TableCaption>
        <Thead bgColor={"whitesmoke"}>
          <Tr>
            <Th>Name</Th>
            <Th>Deadline</Th>
            <Th>Status</Th>
            <Th>Edit</Th>
          </Tr>
        </Thead>
        <Tbody>
          {tasks
            ?.filter((task) => task.status === status)
            .map((filteredTask) => (
              <Tr key={filteredTask.id}>
                <Td>{filteredTask.title}</Td>
                <Td>{filteredTask.deadline} (mm)</Td>
                <Td>{filteredTask.priority}</Td>
                <Td>
                  <FaPenSquare />
                </Td>
              </Tr>
            ))}
        </Tbody>
        {/* <Tfoot>
          <Tr>
            <Th
              bgGradient={["linear(to-tr, purple.900, pink.400)"]}
              _hover={{
                bgGradient: "linear(to-br, purple.900, pink.400)",
              }}
              color="white"
            >
              Add Task
            </Th>
          </Tr>
        </Tfoot> */}
      </Table>
    </TableContainer>
  );
};
TaskList.propTypes = {
  tasks: PropTypes.array,
};

export default TaskList;

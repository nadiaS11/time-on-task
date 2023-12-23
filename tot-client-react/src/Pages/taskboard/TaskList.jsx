import React, { useState } from "react";
import PropTypes from "prop-types";

import { FaPenSquare, FaTrash, FaTrashAlt } from "react-icons/fa";
import { Draggable, Droppable } from "react-beautiful-dnd";
import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import UpdateTask from "./UpdateTask";
import { getDeadline } from "../../utils/util";

const TaskList = ({ list, tasks, status, refetch, mutate }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  console.log(tasks);
  const [selectedTaskId, setSelectedTaskId] = useState(null);

  const handleDelete = (_id) => {
    toast((t) => (
      <span className="flex flex-col gap-2">
        Are you sure you want to <b>delete the task?</b>
        <br />
        <button
          onClick={() => {
            mutate(_id, {
              onSuccess: () => {
                toast.dismiss(t.id);
                refetch();
                toast.success("Deleted");
              },
            });
          }}
          className="bg-red-700 bg-opacity-80 p-4 text-white"
        >
          Delete
        </button>
        <button
          onClick={() => toast.dismiss(t.id)}
          className="bg-slate-800 bg-opacity-70 p-4 text-white"
        >
          Dismiss
        </button>
      </span>
    ));
  };

  return (
    <>
      <div className="mt-5 rounded-md text-wrap border-white border-2 w-full h-full 2xl:w-[30%]">
        <div className="text-white w-full  ">
          <Box
            textAlign={"center"}
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
            fontSize={"24px"}
            color={"white"}
          >
            {list}
          </Box>

          <div className="flex flex-col space-y-2 p-5">
            <Droppable droppableId={status}>
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="flex flex-col gap-3"
                >
                  {tasks
                    ?.filter((task) => task.status === status)
                    ?.map((filteredTask, idx) => (
                      <Draggable
                        key={filteredTask?._id}
                        draggableId={filteredTask?._id}
                        index={idx}
                      >
                        {(provided) => (
                          <div
                            className="flex items-center   justify-between rounded-md p-3  bg-slate-500 mx-auto w-full  "
                            key={filteredTask?._id}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                          >
                            <div className="w-full mr-4  ">
                              {filteredTask?.title}
                            </div>
                            <div className="w-full mr-4">
                              {getDeadline(filteredTask?.deadline)}{" "}
                            </div>
                            <div className="w-full mr-4">
                              {filteredTask?.priority}
                            </div>
                            <div className="  flex flex-col items-center gap-5 ">
                              <Link
                                to={`/taskboard/update-task/${filteredTask?._id}`}
                              >
                                <FaPenSquare size={"1.3rem"} />
                              </Link>
                              <Link
                                onClick={() => handleDelete(filteredTask?._id)}
                              >
                                <FaTrashAlt size={"1.3rem"} />
                              </Link>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <UpdateTask selectedTaskId={selectedTaskId} />{" "}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
TaskList.propTypes = {
  tasks: PropTypes.array,
};

export default TaskList;

import React from "react";
import PropTypes from "prop-types";
import { Draggable } from "react-beautiful-dnd";
import { FaPenSquare, FaTrashAlt } from "react-icons/fa";

const TaskItem = ({ task, index }) => (
  <Draggable draggableId={task?._id} index={index}>
    {(provided) => (
      <div
        className="flex items-center my-4  justify-between p-4 h-20  mx-auto w-full  text-left rounded bg-gray-500"
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}
      >
        <div className="w-full mr-4">{task?.title}</div>
        <div className="w-full mr-4">{task?.deadline}</div>
        <div className="w-full mr-4">{task?.priority}</div>
        <div className=" flex items-center  ">
          <FaPenSquare className="  mr-4" />
          <FaTrashAlt />
        </div>
      </div>
    )}
  </Draggable>
);

TaskItem.propTypes = {
  task: PropTypes.object,
};

export default TaskItem;

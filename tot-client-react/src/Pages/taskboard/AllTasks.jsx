import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "../../components/css styles/taskboard.css";
import useAllTasks from "../../hooks/useAllTasks";
import TaskList from "./TaskList";
import { Wrap, WrapItem } from "@chakra-ui/react";
import { DragDropContext } from "react-beautiful-dnd";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";
const AllTasks = () => {
  const axiosSecure = useAxiosSecure();
  const [all, isTaskasLoading, refetch, mutate] = useAllTasks();
  const [tasks, setTasks] = useState([]);

  console.log(tasks);
  useEffect(() => {
    setTasks(all);
  }, [all]);

  const onDragEnd = async (result) => {
    console.log(result);
    const { draggableId, source, destination } = result;
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    try {
      // Clone the tasks array to avoid modifying the original array
      const updatedTasks = [...tasks];

      // Find the task being moved in the copied array
      const movedTask = updatedTasks.find((task) => task._id === draggableId);

      // Remove the task from the source list
      const sourceList = tasks.filter(
        (task) => task.status === source.droppableId
      );
      sourceList.splice(source.index, 1);

      // Insert the task into the destination list
      const destinationList = tasks.filter(
        (task) => task.status === destination.droppableId
      );
      destinationList.splice(destination.index, 0, movedTask);

      // Update the status of the moved task
      movedTask.status = destination.droppableId;

      // Update the state or trigger a re-render
      setTasks(updatedTasks);
      // refetch();
    } catch (error) {
      console.error("Error during drag-and-drop:", error.message);
    }

    if (source.droppableId === "todo") {
      if (destination.droppableId === "ongoing") {
        try {
          const { data } = await axiosSecure.patch(`/task/${draggableId}`, {
            status: "ongoing",
          });
          console.log(data);

          if (data?.modifiedCount > 0) {
            const wait = await refetch();
            return toast.success("Task status updated.");
          }
        } catch (err) {
          console.log(err.message);
        }
      } else if (destination.droppableId === "completed") {
        try {
          const { data } = await axiosSecure.patch(`/task/${draggableId}`, {
            status: "completed",
          });
          refetch();
          console.log(data);
          return toast.success("Task status updated.");
        } catch (err) {
          console.log(err.message);
        }
      } else {
        return;
      }
    }

    if (source.droppableId === "completed") {
      if (destination.droppableId === "ongoing") {
        try {
          const { data } = await axiosSecure.patch(`/task/${draggableId}`, {
            status: "ongoing",
          });
          console.log(data);
          refetch();
          return toast.success("Task status updated.");
        } catch (err) {
          console.log(err.message);
        }
      } else if (destination.droppableId === "todo") {
        try {
          const { data } = await axiosSecure.patch(`/task/${draggableId}`, {
            status: "todo",
          });
          console.log(data);
          refetch();
          return toast.success("Task status updated.");
        } catch (err) {
          console.log(err.message);
        }
      } else {
        return;
      }
    }
    if (source.droppableId === "ongoing") {
      if (destination.droppableId === "completed") {
        try {
          const { data } = await axiosSecure.patch(`/task/${draggableId}`, {
            status: "completed",
          });
          console.log(data);
          refetch();
          return toast.success("Task status updated.");
        } catch (err) {
          console.log(err.message);
        }
      } else if (destination.droppableId === "todo") {
        try {
          const { data } = await axiosSecure.patch(`/task/${draggableId}`, {
            status: "todo",
          });
          console.log(data);
          refetch();
          return toast.success("Task status updated.");
        } catch (err) {
          console.log(err.message);
        }
      } else {
        return;
      }
    }
  };

  // if (isTaskasLoading) {
  //   return (
  //     <div className="flex flex-col mt-32 animate-spin">
  //       <FaSpinner />
  //     </div>
  //   );
  // }

  return (
    <DragDropContext
      onDragEnd={onDragEnd}
      // onDragEnd={this.onDragEnd}
    >
      <div className="flex flex-wrap w-full   space-y-8 p-10 min-h-screen    gap-10">
        <TaskList
          list={"To-Do"}
          tasks={tasks}
          status={"todo"}
          refetch={refetch}
          mutate={mutate}
        />

        <TaskList
          list={"Ongoing"}
          tasks={tasks}
          status={"ongoing"}
          refetch={refetch}
          mutate={mutate}
        />

        <TaskList
          list={"Completed"}
          tasks={tasks}
          status={"completed"}
          refetch={refetch}
          mutate={mutate}
        />
      </div>
    </DragDropContext>
  );
};

AllTasks.propTypes = {};

export default AllTasks;

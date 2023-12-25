import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { MdWarning } from "react-icons/md";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { Center, Container, Spinner } from "@chakra-ui/react";

const UpdateTask = () => {
  const { id } = useParams();
  console.log(id);
  const queryClient = new QueryClient();

  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const navigate = useNavigate();
  const {
    data: singleTask = {},
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["task", id, user],

    queryFn: async () => {
      const res = await axiosSecure(`/tasks/${id}`);
      console.log("API Response:", res.data);
      return res.data;
    },
  });
  console.log(singleTask);

  const { mutate } = useMutation({
    mutationKey: ["updatedTask"],
    mutationFn: (newTask) => {
      return axiosSecure.patch(
        `/update-task/${id}?email=${user?.email}`,
        newTask
      );
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["task"] });
      await refetch();
      toast.success("Task Updated.");
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const newTask = {
      email: user?.email,
      updatedAt: new Date().getTime(),
      list: data.list,
      title: data.title,
      description: data.description,
      deadline: data.deadline,
      priority: data.priority,
      status: data.status ? data.status : singleTask?.status,
    };
    console.log(newTask);
    try {
      mutate(newTask);
      await refetch();
      // reset();

      navigate("/taskboard");
      // toast.success("Task update successfully!");
    } catch (err) {
      toast.error(err.message);
    }
    console.log(newTask);
  };

  return (
    <div>
      {isLoading ? (
        <Container centerContent>
          <Center className="w-full h-screen">
            {" "}
            <Spinner />
          </Center>
        </Container>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-xl mx-auto space-y-8 p-10 mt-10 text-xl font-medium"
        >
          {/* list name */}
          <div className="flex flex-col gap-1">
            <label>List name:</label>
            <input
              type="text"
              {...register("list")}
              className="   rounded p-2 text-black"
              placeholder="Task List Name"
              defaultValue={singleTask?.list}
            />
          </div>
          {/* Title */}
          <div className="flex flex-col gap-1">
            <label>Title:</label>
            <input
              type="text"
              {...register("title", { required: true })}
              className="   rounded p-2 text-black"
              placeholder="Task title"
              defaultValue={singleTask?.title}
            />
            {errors.title && (
              <span className="text-red-600 pl-3 inline-flex items-center">
                Title is required
              </span>
            )}
          </div>

          {/* Description */}
          <div className="flex flex-col gap-1">
            <label>Description:</label>
            <textarea
              {...register("description")}
              className="   rounded p-2 text-black"
              placeholder="Task description"
              defaultValue={singleTask?.description}
            />
          </div>

          {/* Deadline */}
          <div className="flex flex-col gap-1">
            <label>Deadline:</label>

            <input
              type="datetime-local"
              {...register("deadline", { required: true })}
              className=" text-black rounded p-2"
              defaultValue={singleTask?.deadline}
            />
            {errors.deadline && (
              <span className="text-red-600 pl-3 inline-flex items-center">
                Deadline is required
              </span>
            )}
          </div>

          {/* Priority */}
          <div className="flex flex-col gap-1">
            <label>Priority:</label>
            <select
              {...register("priority", { required: true })}
              className=" uppercase  rounded p-2 text-black"
              defaultValue={singleTask?.priority}
            >
              <option value="low">Low</option>
              <option value="moderate">Moderate</option>
              <option value="high">High</option>
            </select>

            {errors.priority && (
              <span className="text-red-600 pl-3 inline-flex items-center">
                <MdWarning /> Priority is required
              </span>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label>Task Status:</label>
            <select
              {...register("status", { required: true })}
              defaultValue={singleTask?.status}
              className=" uppercase  rounded p-2 text-black"
            >
              <option value="todo">To-Do</option>
              <option value="ongoing">Ongoing</option>
              <option value="completed">Completed</option>
            </select>

            {errors.status && (
              <span className="text-red-600 pl-3 inline-flex items-center">
                <MdWarning /> Status is required
              </span>
            )}
          </div>

          {/* Submit Button */}
          <input
            type="submit"
            value="Update Task"
            className="  p-5 bg-gray-800 bg-opacity-50 rounded py-2 text-white hover:bg-gray-600 hover:bg-opacity-50 mt-2"
          />
        </form>
      )}
    </div>
  );
};

UpdateTask.propTypes = {};

export default UpdateTask;

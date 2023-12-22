import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { MdWarning } from "react-icons/md";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AddTask = (props) => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const newTask = {
      email: user?.email,
      createdAt: new Date().getTime(),
      list: data.list,
      title: data.title,
      description: data.description,
      deadline: data.deadline,
      priority: data.priority,
      status: data.status ? data.status : "todo",
    };

    try {
      const res = await axiosSecure.post("/add-task", newTask);
      console.log(res.data);
      if (res.data.insertedId) {
        reset(); // Clear the form after submission
        toast.success("Task added successfully!");
      }
    } catch (err) {
      toast.error(err.message);
    }
    console.log(newTask);
  };

  return (
    <div>
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
          />
        </div>

        {/* Deadline */}
        <div className="flex flex-col gap-1">
          <label>Deadline:</label>

          <input
            type="datetime-local"
            {...register("deadline", { required: true })}
            className=" text-black rounded p-2"
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
            className="   rounded p-2 text-black"
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

        {/* Submit Button */}
        <input
          type="submit"
          value="Add Task"
          className="  p-5 bg-gray-800 bg-opacity-50 rounded py-2 text-white hover:bg-gray-600 hover:bg-opacity-50 mt-2"
        />
      </form>
    </div>
  );
};

AddTask.propTypes = {};

export default AddTask;

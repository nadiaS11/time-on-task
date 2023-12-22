import React from "react";
import PropTypes from "prop-types";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";

const useAllTasks = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: tasks = [] } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await axiosSecure(`/tasks?email=${user?.email}`);
      console.log("API Response:", res.data);

      return res.data;
    },
  });
  console.log(tasks);
  return tasks;
};

useAllTasks.propTypes = {};

export default useAllTasks;

import React from "react";
import PropTypes from "prop-types";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";

const useAllTasks = () => {
  const { user } = useAuth();
  console.log(user);
  const axiosSecure = useAxiosSecure();

  const {
    data: all = [],
    isLoading: isTaskasLoading,
    refetch,
  } = useQuery({
    queryKey: ["all", user],
    queryFn: async () => {
      const res = await axiosSecure(`/tasks?email=${user?.email}`);
      console.log("API Response:", res.data);

      return res.data;
    },
  });
  const queryClient = new QueryClient();

  const { mutate } = useMutation({
    mutationKey: ["task"],
    mutationFn: (id) => {
      return axiosSecure.delete(`/delete-task/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["all"]);
    },
  });
  console.log(all);
  return [all, isTaskasLoading, refetch, mutate];
};

useAllTasks.propTypes = {};

export default useAllTasks;

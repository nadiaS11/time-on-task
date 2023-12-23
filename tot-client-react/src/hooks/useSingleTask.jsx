import React from "react";
import PropTypes from "prop-types";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@chakra-ui/react";
import { QueryClient, useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

const useSingleTask = ({ setSelectedTaskId }) => {
  console.log({ setSelectedTaskId });
  const { user } = useAuth();
  console.log(user);
  const axiosSecure = useAxiosSecure();

  const { data: task = {}, refetch } = useQuery({
    queryKey: ["task", user],
    queryFn: async () => {
      const res = await axiosSecure(`/task/${id}?email=${user?.email}`);
      console.log("API Response:", res.data);

      return res.data;
    },
  });
  const queryClient = new QueryClient();

  const { mutate } = useMutation({
    mutationKey: ["task"],
    mutationFn: (id) => {
      return axiosSecure.patch(`/update-task/${id}`);
    },
    onSuccess: () => {
      toast.success("Task Updated.");
      queryClient.invalidateQueries(["task"]);
    },
  });
  console.log(task);
  return [task, refetch, mutate];
};

useSingleTask.propTypes = {};

export default useSingleTask;

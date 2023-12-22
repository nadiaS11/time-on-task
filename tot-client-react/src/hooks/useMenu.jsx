import React from "react";
import PropTypes from "prop-types";
import { TbUrgent } from "react-icons/tb";
import { LuListTodo } from "react-icons/lu";
import { FaCheck, FaList, FaPenFancy, FaPenNib } from "react-icons/fa";
import { MdPendingActions } from "react-icons/md";

const useMenu = (props) => {
  const menu = [
    { name: "To-Do", path: "todo", icon: <FaList /> },
    { name: "Ongoing", path: "ongoing", icon: <MdPendingActions /> },
    { name: "Completed", path: "completed", icon: <FaCheck /> },
    { name: "Add A Task", path: "add-task", icon: <FaPenFancy /> },
  ];
  return menu;
};

useMenu.propTypes = {};

export default useMenu;

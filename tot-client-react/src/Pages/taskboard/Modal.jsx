import React from "react";
import PropTypes from "prop-types";

import UpdateTask from "./UpdateTask";
import { FaPenAlt, FaPenSquare } from "react-icons/fa";

const Modal = (props) => {
  return (
    <>
      <Button onClick={onOpen}>
        <FaPenSquare />
      </Button>
    </>
  );
};

Modal.propTypes = {};

export default Modal;

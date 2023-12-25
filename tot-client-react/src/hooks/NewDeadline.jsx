import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const NewDeadline = ({ date }) => {
  const calculateTimeDifference = () => {
    const deadline = new Date(date); // Replace with your actual deadline
    const currentDate = new Date();
    return deadline - currentDate;
  };
  const [timeDifference, setTimeDifference] = useState(
    calculateTimeDifference()
  );

  useEffect(() => {
    // Update time every second
    const intervalId = setInterval(() => {
      setTimeDifference(calculateTimeDifference());
    }, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means this effect runs once on mount

  const calculateDays = (timeDifference) =>
    Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const calculateRemainingHours = (timeDifference) =>
    Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const calculateRemainingMinutes = (timeDifference) =>
    Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const calculateSeconds = (timeDifference) =>
    Math.floor((timeDifference % (1000 * 60)) / 1000);

  const formatTime = () => {
    if (timeDifference < 0) {
      toast.error("Your task has expired.");
      return "Expired";
    }

    const days = calculateDays(timeDifference);
    const remainingHours = calculateRemainingHours(timeDifference);
    const remainingMinutes = calculateRemainingMinutes(timeDifference);
    const seconds = calculateSeconds(timeDifference);

    return `${days}d ${remainingHours}h ${remainingMinutes}m ${seconds}s `;
  };
};

NewDeadline.propTypes = {};

export default NewDeadline;

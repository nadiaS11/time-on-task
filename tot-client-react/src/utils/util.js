import axios from "axios";
import { TbUrgent } from "react-icons/tb";

export const imgUpload = async (image) => {
  const formData = new FormData();
  formData.append("image", image);
  const { data } = await axios.post(
    `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KEY}`,
    formData
  );
  return data;
};

export const clearCookie = async () => {
  const res = await axios.get("/logout");
  return res.data;
};

export const getDeadline = (date) => {
  const deadline = new Date(date);
  const currentDate = new Date();
  const timeDifference = deadline - currentDate;

  if (timeDifference < 0) {
    // The deadline is in the past
    return "Expired";
  }

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const remainingHours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const remainingMinutes = Math.floor(
    (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
  );

  return `${days}d ${remainingHours}h ${remainingMinutes}m`;
};

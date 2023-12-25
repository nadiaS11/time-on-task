import axios from "axios";
import toast from "react-hot-toast";
import { FcHighPriority } from "react-icons/fc";

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

export const getDeadline = (date, title) => {
  const deadline = new Date(date);
  const currentDate = new Date();
  // console.log(currentDate, "current", deadline, "from get deadline");
  const timeDifference = deadline - currentDate;
  // console.log(timeDifference);
  if (timeDifference < 0) {
    toast.error(`Your task ${title.toUpperCase()} has expired.`);
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

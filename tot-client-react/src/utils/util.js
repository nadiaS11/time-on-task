import axios from "axios";

export const imgUpload = async (image) => {
  const formData = new FormData();
  formData.append("image", image);
  const { data } = await axios.post(
    `https://api.imgbb.com/1/upload?key=${
      import.meta.env.NEXT_PUBLIC_nextImgbbKey
    }`,
    formData
  );
  return data;
};

export const clearCookie = async () => {
  const res = await axios.get("/logout");
  return res.data;
};

export const imgUpload = async (image) => {
  const formData = new FormData();
  formData.append("image", image);
  console.log("nextImgbbKey:", process.env.NEXT_PUBLIC_nextImgbbKey);

  const res = await fetch(
    `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_nextImgbbKey}`,

    {
      method: "POST",
      body: formData,
    }
  );
  //   console.log(res);
  const { data } = await res.json();
  console.log(data);
  return data;
};

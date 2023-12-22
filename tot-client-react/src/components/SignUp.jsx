import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { imgUpload } from "../utils/util";
import useAxiosPublic from "../hooks/useAxiosPublic";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
// import { imgUpload } from "@/utils/imgUpload";

const SignUp = (props) => {
  const axiosPublic = useAxiosPublic();
  const { createUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);

    const upload = await imgUpload(data?.image[0]);
    const imgUrl = upload.data?.display_url;
    console.log(imgUrl);
    const user = {
      name: data?.name,
      email: data?.email,
      image: imgUrl,
    };
    console.log(user, data.password);

    try {
      const newUser = await createUser(data?.email, data?.password);
      console.log(newUser);

      const res = await axiosPublic.post("/user", user);
      console.log(res.data);

      await updateUserProfile(data?.name, imgUrl);

      toast.success("Sign up successful.");
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col max-w-xl mx-auto gap-5  mt-5 w-full"
    >
      <div className="flex flex-col gap-1">
        <input
          type="file"
          {...register("image", {
            maxLength: 1,
          })}
          className=" p-2  rounded"
        />
      </div>
      <div className="flex flex-col gap-1">
        <input
          type="text"
          {...register("name", {
            required: true,
          })}
          className="p-2 rounded"
          placeholder="Your name "
        />
        {errors?.name?.type === "required" && <p>This field is required</p>}
      </div>
      <div className="flex flex-col gap-2">
        <input
          type="email"
          {...register("email", {
            required: true,
          })}
          className="p-2 rounded"
          placeholder="Your email address"
        />
        {errors?.firstName?.type === "required" && (
          <p>This field is required</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <input
          {...register("password", {
            required: true,
            minLength: 8,
            maxLength: 20,
            pattern: /^(?=.*?[!@#$&*~])(?=.*[A-Z]).{8,}$/,
          })}
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          autoComplete="current-password"
          required
          className="p-2 rounded"
        />{" "}
        {errors.password?.type === "required" && (
          <span className="text-red-600">Password is required</span>
        )}
        {errors.password?.type === "pattern" && (
          <span className="text-red-600">
            Password must have at least one special character and One capital
            letter.
          </span>
        )}
      </div>
      <input
        type="submit"
        value={"Sign Up"}
        className="btn btn-block bg-blue-800 bg-opacity-50 rounded py-2 text-white hover:bg-blue-600 hover:bg-opacity-50 mt-2"
      />
    </form>
  );
};

SignUp.propTypes = {};

export default SignUp;

import { useEffect } from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const Login = () => {
  const { user, signInUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // const from = location?.state?.from?.pathname
  //   ? location?.state?.from?.pathname
  //   : "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const toastId = toast.loading("Logging...");

    try {
      const user = await signInUser(data?.email, data?.password);
      toast.success("Logged in successfully.", { id: toastId });
      navigate(
        location?.state?.from?.pathname ? location?.state?.from?.pathname : "/"
      );
    } catch (err) {
      console.log(err);
      toast.error(err.message, { id: toastId });
    }
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col max-w-xl mx-auto gap-5  mt-5 w-full"
      >
        <div className="flex flex-col gap-1">
          <input
            type="email"
            {...register("email", {
              required: true,
            })}
            className="input input-bordered rounded p-2"
            placeholder="Your email address"
          />
          {errors?.email?.type === "required" && <p>This field is required</p>}
        </div>

        <div className="flex flex-col gap-1">
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
            autoComplete="current-password"
            required
            className="input input-bordered rounded  p-2"
            placeholder="Password"
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
          value={"Log In"}
          className="btn btn-block bg-blue-800 bg-opacity-50 rounded py-2 text-white hover:bg-blue-600 hover:bg-opacity-50 mt-2"
        />
      </form>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col max-w-xl mx-auto w-full"
      >
        <input
          type="submit"
          value={"Guest Log In"}
          className="btn btn-block bg-rose-700 bg-opacity-50 rounded py-2 text-white hover:bg-rose-600 hover:bg-opacity-50 mt-2"
        />
      </form>
    </>
  );
};

Login.propTypes = {};

export default Login;

import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useLocation, useNavigate } from "react-router-dom";
import { FaCog, FaGithub, FaGoogle } from "react-icons/fa";

const GithubButton = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname
    ? location?.state?.from?.pathname
    : "/";

  const axiosPublic = useAxiosPublic();
  const { githubLogin } = useAuth();

  const handleGithub = async () => {
    try {
      const { user } = await githubLogin();
      console.log(user.displayName);

      const saveUser = await axiosPublic.post("/user", {
        name: user.displayName,
        email: user.email,
        image: user.photoURL,
      });
      console.log(saveUser);
      toast.success("Logged in successfully");
      navigate(from, { replace: true });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <button
      onClick={handleGithub}
      className=" inline-flex justify-center w-full  border border-blue-800 border-opacity-50 rounded py-2  hover:bg-blue-800 hover:bg-opacity-50 hover:border-none duration-500 hover:text-white mt-2"
    >
      <FaGithub size={"1.6rem"} className="mr-4" /> Continue With Github
    </button>
  );
};

GithubButton.propTypes = {};

export default GithubButton;

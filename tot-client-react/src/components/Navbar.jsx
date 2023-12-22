import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { FaAlignJustify } from "react-icons/fa";

import { Image, Switch } from "@chakra-ui/react";
import useAuth from "../hooks/useAuth";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const handleLogOut = () => {
    logOut();
  };
  const [open, setOpen] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  return (
    <div className="shadow">
      <div className=" relative z-40 p-5    flex items-center justify-center max-w-screen-2xl mx-auto">
        <nav className="flex   px-2  text-white font-semibold tracking-wider items-center justify-between lg:container mx-auto flex-grow">
          <a className="mx-auto md:mx-0 ">
            {" "}
            <img src={"/tot-logo.png"} className="w-16 h-auto" />
          </a>{" "}
          <div className="flex items-center order-first md:order-none mx-auto">
            <FaAlignJustify
              onClick={() => setOpen(!open)}
              className=" md:hidden    mr-2 "
              size={"1.5rem"}
            />
            <ul
              onClick={() => setOpen(!open)}
              className={`absolute left-2 grid text-right duration-100 z-50   ${
                open
                  ? "top-24  backdrop-blur text-slate-800   md:bg-none rounded space-y-2"
                  : "-top-60 "
              } md:static md:flex md:gap-5 py-2     px-2`}
            >
              <NavLink
                className={({ isActive }) =>
                  isActive ? "        " : "    md:text-white      "
                }
                to={"/"}
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "    text-black          "
                    : "    md:text-white      "
                }
                to={"/add-product"}
              >
                Add Product
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "              " : " md:text-white          "
                }
                to={`/cart`}
              >
                My Cart
              </NavLink>
            </ul>
          </div>
          <figure>
            <img
              className="w-32 rounded"
              src="/logo.png
        "
              alt=""
            />
          </figure>
          <div className="flex flex-row-reverse items-center gap-5 lg:justify-between">
            <Switch
              onChange={handleToggle}
              // type="checkbox"
              // checked={theme === "light" ? false : true}
              colorScheme=""
              className="bg-gray-900 rounded-full"
              size="lg"
            />
            {!user ? (
              <NavLink
                className={({ isActive }) =>
                  isActive ? "      " : "text-white border-white        "
                }
                to={"/login"}
              >
                Log In
              </NavLink>
            ) : (
              <div className="flex gap-2 items-center  ">
                {/* <Icon
                as={MdDashboard}
                onClick={() => setOpenProfile(!openProfile)}
                className="md:hidden font-medium text-7xl mr-2 "
              /> */}
                <ul
                  onClick={() => setOpenProfile(!openProfile)}
                  className={`absolute right-2 grid text-right duration-100 z-50   ${
                    openProfile
                      ? "top-32 bg-gray-400 md:bg-none rounded space-y-2"
                      : "-top-60"
                  } md:static md:flex md:gap-5 py-2    px-2`}
                >
                  {/* <li>
                  <img
                    className="w-12 h-12 rounded-full"
                    src={user?.photoURL ? user.photoURL : "/user.png"}
                    alt=""
                  />
                </li> */}
                  <li>
                    <NavLink
                      to={"/taskboard"}
                      className={({ isActive }) =>
                        isActive
                          ? "        "
                          : "    -ghost     md:text-white border-white     text-right"
                      }
                    >
                      {user?.displayName ? user.displayName : ""}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={handleLogOut}
                      to={"/login"}
                      className={({ isActive }) =>
                        isActive
                          ? "        "
                          : "    -ghost     md:text-white border-white     text-right"
                      }
                    >
                      Log Out
                    </NavLink>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </nav>
        <div className="flex-none "></div>
      </div>
    </div>
  );
};

Navbar.propTypes = {};

export default Navbar;

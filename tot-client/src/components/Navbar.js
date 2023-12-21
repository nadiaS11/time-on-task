"use client";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { HamburgerIcon } from "@chakra-ui/icons";
import Link from "next/link";
import { MdDashboard } from "react-icons/md";
import { FaAlignJustify } from "react-icons/fa";

import { Switch, Icon } from "@chakra-ui/react";

const Navbar = (props) => {
  const user = {};
  const handleLogOut = () => {
    // logOut();
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
      <div className=" relative z-40 p-5  flex items-center justify-center max-w-screen-2xl mx-auto">
        <nav className="flex py-3 px-2   items-center justify-between lg:container mx-auto flex-grow">
          <div className="flex items-center  ">
            <FaAlignJustify
              onClick={() => setOpen(!open)}
              className=" md:hidden font-medium   mr-2 "
            />
            <ul
              onClick={() => setOpen(!open)}
              className={`absolute left-2 grid text-right duration-100 z-50   ${
                open
                  ? "top-24  backdrop-blur text-white  md:bg-none rounded space-y-2"
                  : "-top-60 "
              } md:static md:flex md:gap-5 py-2     px-2`}
            >
              <Link
                className={({ isActive }) =>
                  isActive ? "        " : "    md:text-white      "
                }
                href={"/"}
              >
                Home
              </Link>
              <Link
                className={({ isActive }) =>
                  isActive
                    ? "    text-black          "
                    : "    md:text-white      "
                }
                href={"/add-product"}
              >
                Add Product
              </Link>
              <Link
                className={({ isActive }) =>
                  isActive ? "              " : " md:text-white          "
                }
                href={`/cart`}
              >
                My Cart
              </Link>
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
          <div className="flex items-center gap-5 lg:justify-between">
            {!user ? (
              <Link
                className={({ isActive }) =>
                  isActive ? "      " : "text-white border-white        "
                }
                href={"/login"}
              >
                Log In
              </Link>
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
                    <h4 className="md:text-white        ">
                      {user?.displayName ? user.displayName : ""}
                    </h4>
                  </li>
                  <li>
                    <Link
                      onClick={handleLogOut}
                      href={"/login"}
                      className={({ isActive }) =>
                        isActive
                          ? "        "
                          : "    -ghost     md:text-white border-white     text-right"
                      }
                    >
                      Log Out
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </nav>
        <div className="flex-none ">
          <Switch
            onChange={handleToggle}
            // type="checkbox"
            // checked={theme === "light" ? false : true}
            colorScheme="black"
            size="lg"
          />
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {};

export default Navbar;

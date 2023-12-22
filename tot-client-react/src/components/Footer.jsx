import React from "react";
import PropTypes from "prop-types";
import { Box, Image } from "@chakra-ui/react";
import "../components/css styles/header.css";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full min-h-[70vh] flex items-center justify-center border-gray-500 border-t bg-black py-10">
      <div className="md:w-2/3 w-full px-4 text-white flex flex-col">
        <div className="w-full text-7xl font-bold">
          <h1 className="w-full md:w-2/3">
            Let Us Ease your doubts. Get in touch
          </h1>
        </div>
        <div className="flex mt-8 flex-col lg:flex-row md:justify-between">
          <p className="w-full md:w-2/3 text-gray-500">
            To ensure that all your tasks are on track and you be ahead of the
            curve .
          </p>
          <div className="w-44 pt-6 md:pt-0">
            <Box
              as="button"
              p={4}
              mt={"15px"}
              color="white"
              fontWeight="bold"
              borderRadius="md"
              bgGradient={["linear(to-t, blue.600, pink.200)"]}
              _hover={{
                bgGradient: "linear(to-r, purple.400, red.400)",
              }}
            >
              Contact Us
            </Box>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col mt-24 mb-12 md:flex-row items-center  justify-center md:justify-between gap-5">
            <div className=""></div>

            <a>
              {" "}
              <Image width={"50"} height={"50"} src={"/tot-logo.png"} />
            </a>

            <a className="   cursor-pointer text-gray-600 hover:bg-slate-100   p-3  rounded uppercase">
              About
            </a>
            <a className="   cursor-pointer text-gray-600 hover:bg-slate-100   p-3  rounded uppercase">
              Services
            </a>
            <a className="   cursor-pointer text-gray-600 hover:bg-slate-100  p-3  rounded uppercase">
              Why us
            </a>
            <a className="   cursor-pointer text-gray-600 hover:bg-slate-100   p-3  rounded uppercase">
              Contact
            </a>
            <div className="flex flex-row space-x-4 items-center justify-between">
              <a>
                {" "}
                <FaFacebookF size={"1.2rem"} />
              </a>
              <a>
                {" "}
                <FaGithub size={"1.2rem"} />
              </a>
              <a>
                {" "}
                <FaLinkedinIn size={"1.2rem"} />
              </a>
            </div>
          </div>
          <hr className="border-gray-600" />
          <p className="w-full text-center mt-12 text-gray-600">
            Copyright © 2023 Time-On-Task
          </p>
        </div>
      </div>
    </div>
  );
};

Footer.propTypes = {};

export default Footer;

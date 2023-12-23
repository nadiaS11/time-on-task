import React from "react";
import PropTypes from "prop-types";
import { Heading } from "@chakra-ui/react";
import "../../components/css styles/header.css";
import Navbar from "../../components/Navbar";

const Pricing = (props) => {
  return (
    <div className=" ">
      <div className="bg-header h-[80vh] w-full">
        <Navbar />
      </div>
      N=
      <div className="min-h-screen flex justify-center items-center  -mt-[60vh] pb-10">
        <div className="">
          <div className="text-center font-semibold">
            <Heading
              mb={4}
              as={"h2"}
              bgGradient={["linear(to-t, yellow.300, blue.100)"]}
              bgClip="text"
              fontSize="5xl"
              // fontWeight="extrabold"
            >
              Flexible <span>Plans</span>
            </Heading>
            <p className="pt-6  text-xl text-gray-200 font-normal w-full px-8  ">
              Choose a plan that works best for you and
              <br /> your team.
            </p>
          </div>
          <div className="mt-12 md:mt-24 grid gap-y-6 sm:grid-cols-2 sm:gap-x-6 md:gap-x-12 xl:gap-x-24">
            <a
              href="#"
              className="py-12 px-4 flex flex-col rounded-xl white-gradient text-gray-900 text-center transition duration-75 hover:-rotate-1 hover:scale-105 focus:-rotate-1 focus:scale-105"
            >
              <div>
                <h3 className="px-6 py-2 inline-block text-2xl md:text-3xl font-bold card-gradient text-white -rotate-1">
                  Freedom Plan
                </h3>
              </div>

              <div className="flex-1 py-12 font-bold leading-none text-6xl md:text-7xl md:leading-none lg:text-8xl lg:leading-none xl:text-9xl xl:leading-none">
                <div className="inline-block">
                  <span className="text-lg">starting at</span>
                  <sup className="text-3xl">$</sup>99
                  <small className="block text-lg text-right">per year</small>
                </div>
              </div>

              <ul className="mx-auto text-left md:text-xl md:leading-normal font-bold space-y-1">
                <li className="flex items-start">
                  <svg
                    className="mt-1 mr-2 h-5 text-teal-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12,1A11,11,0,1,0,23,12,11.013,11.013,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9.011,9.011,0,0,1,12,21ZM17.737,8.824a1,1,0,0,1-.061,1.413l-6,5.5a1,1,0,0,1-1.383-.03l-3-3a1,1,0,0,1,1.415-1.414l2.323,2.323,5.294-4.853A1,1,0,0,1,17.737,8.824Z" />
                  </svg>
                  Unlimited tasks and projects
                </li>
                <li className="flex items-start">
                  <svg
                    className="mt-1 mr-2 h-5 text-teal-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12,1A11,11,0,1,0,23,12,11.013,11.013,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9.011,9.011,0,0,1,12,21ZM17.737,8.824a1,1,0,0,1-.061,1.413l-6,5.5a1,1,0,0,1-1.383-.03l-3-3a1,1,0,0,1,1.415-1.414l2.323,2.323,5.294-4.853A1,1,0,0,1,17.737,8.824Z" />
                  </svg>
                  Personal Task Dashboard
                </li>
                <li className="flex items-start">
                  <svg
                    className="mt-1 mr-2 h-5 text-teal-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12,1A11,11,0,1,0,23,12,11.013,11.013,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9.011,9.011,0,0,1,12,21ZM17.737,8.824a1,1,0,0,1-.061,1.413l-6,5.5a1,1,0,0,1-1.383-.03l-3-3a1,1,0,0,1,1.415-1.414l2.323,2.323,5.294-4.853A1,1,0,0,1,17.737,8.824Z" />
                  </svg>{" "}
                  Integrated calendar and email
                </li>
                <li className="flex items-start">
                  <svg
                    className="mt-1 mr-2 h-5 text-teal-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12,1A11,11,0,1,0,23,12,11.013,11.013,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9.011,9.011,0,0,1,12,21ZM17.737,8.824a1,1,0,0,1-.061,1.413l-6,5.5a1,1,0,0,1-1.383-.03l-3-3a1,1,0,0,1,1.415-1.414l2.323,2.323,5.294-4.853A1,1,0,0,1,17.737,8.824Z" />
                  </svg>{" "}
                  Reporting features
                </li>
              </ul>

              <div className="mt-16">
                <div className="group inline-flex items-center justify-center text-xl md:text-2xl font-bold text-white px-6 py-3 rounded bg-rose-500 hover:bg-red-600 focus:bg-red-600">
                  Subscribe &amp; Save
                  <svg
                    className="ml-2 fill-current group-hover:translate-x-1 group-focus:translate-x-1"
                    width="25"
                    height="16"
                    viewBox="0 0 25 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M25 7.99947C24.9989 7.56503 24.8167 7.1507 24.4971 6.85604L17.4153 0.285578C17.1043 -0.00338775 16.6514 -0.0806904 16.262 0.0887195C15.8726 0.258129 15.6207 0.642027 15.6206 1.06635V4.53291C15.6206 4.68018 15.5011 4.79957 15.3537 4.79957H10.0677C9.47801 4.79957 9 5.27712 9 5.8662V10.1327C9 10.7218 9.47801 11.1994 10.0677 11.1994H15.3537C15.5011 11.1994 15.6206 11.3188 15.6206 11.466V14.9326C15.6203 15.3571 15.872 15.7414 16.2615 15.9111C16.651 16.0807 17.1042 16.0035 17.4153 15.7144L24.4961 9.14503C24.816 8.84966 24.9986 8.43467 25 7.99947Z"></path>
                    <path d="M5 6C5 5.44772 5.44772 5 6 5H7C7.55228 5 8 5.44772 8 6V10.5C8 11.0523 7.55228 11.5 7 11.5H6C5.44772 11.5 5 11.0523 5 10.5V6Z"></path>
                    <path d="M0 6C0 5.44772 0.447715 5 1 5H2C2.55228 5 3 5.44772 3 6V10.5C3 11.0523 2.55228 11.5 2 11.5H1C0.447715 11.5 0 11.0523 0 10.5V6Z"></path>
                  </svg>
                </div>
              </div>
            </a>

            <a
              href="#"
              className="py-12 px-4 flex flex-col rounded-xl border-2 border-dashed border-gray-400 text-center transition duration-75 hover:rotate-1 hover:scale-105 focus:rotate-1 focus:scale-105 card-gradient text-white"
            >
              <div>
                <h3 className="px-6 py-2 inline-block text-2xl md:text-3xl font-bold bg-header  text-white -rotate-1">
                  Business Suit
                </h3>
              </div>

              <div className="flex-1 py-12 font-bold leading-none text-6xl md:text-7xl md:leading-none lg:text-8xl lg:leading-none xl:text-9xl xl:leading-none">
                <div className="inline-block">
                  <sup className="text-3xl">$</sup>5 -{" "}
                  <sup className="text-3xl">$</sup>29
                  <small className="block text-lg text-right">per Member</small>
                </div>
              </div>

              <ul className="mx-auto text-left md:text-xl md:leading-normal font-bold space-y-1">
                <li className="flex items-start">
                  <svg
                    className="mt-1 mr-2 h-5 text-teal-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12,1A11,11,0,1,0,23,12,11.013,11.013,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9.011,9.011,0,0,1,12,21ZM17.737,8.824a1,1,0,0,1-.061,1.413l-6,5.5a1,1,0,0,1-1.383-.03l-3-3a1,1,0,0,1,1.415-1.414l2.323,2.323,5.294-4.853A1,1,0,0,1,17.737,8.824Z" />
                  </svg>{" "}
                  Teams Dashboard
                </li>
                <li className="flex items-start">
                  <svg
                    className="mt-1 mr-2 h-5 text-teal-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12,1A11,11,0,1,0,23,12,11.013,11.013,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9.011,9.011,0,0,1,12,21ZM17.737,8.824a1,1,0,0,1-.061,1.413l-6,5.5a1,1,0,0,1-1.383-.03l-3-3a1,1,0,0,1,1.415-1.414l2.323,2.323,5.294-4.853A1,1,0,0,1,17.737,8.824Z" />
                  </svg>{" "}
                  Modernize code
                </li>
                <li className="flex items-start">
                  <svg
                    className="mt-1 mr-2 h-5 text-teal-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12,1A11,11,0,1,0,23,12,11.013,11.013,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9.011,9.011,0,0,1,12,21ZM17.737,8.824a1,1,0,0,1-.061,1.413l-6,5.5a1,1,0,0,1-1.383-.03l-3-3a1,1,0,0,1,1.415-1.414l2.323,2.323,5.294-4.853A1,1,0,0,1,17.737,8.824Z" />
                  </svg>
                  Live collaboration
                </li>
                <li className="flex items-start">
                  <svg
                    className="mt-1 mr-2 h-5 text-teal-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12,1A11,11,0,1,0,23,12,11.013,11.013,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9.011,9.011,0,0,1,12,21ZM17.737,8.824a1,1,0,0,1-.061,1.413l-6,5.5a1,1,0,0,1-1.383-.03l-3-3a1,1,0,0,1,1.415-1.414l2.323,2.323,5.294-4.853A1,1,0,0,1,17.737,8.824Z" />
                  </svg>{" "}
                  White-labeling options
                </li>
              </ul>

              <div className="mt-16">
                <div
                  className="group inline-flex items-center justify-center text-xl md:text-2xl font-bold text-rose-500 hover:text-rose-500-lighter focus:text-rose-500-lightest"
                  href="#"
                >
                  For Teams
                  <svg
                    className="ml-2 fill-current group-hover:translate-x-1 group-focus:translate-x-1"
                    width="25"
                    height="16"
                    viewBox="0 0 25 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M25 7.99947C24.9989 7.56503 24.8167 7.1507 24.4971 6.85604L17.4153 0.285578C17.1043 -0.00338775 16.6514 -0.0806904 16.262 0.0887195C15.8726 0.258129 15.6207 0.642027 15.6206 1.06635V4.53291C15.6206 4.68018 15.5011 4.79957 15.3537 4.79957H10.0677C9.47801 4.79957 9 5.27712 9 5.8662V10.1327C9 10.7218 9.47801 11.1994 10.0677 11.1994H15.3537C15.5011 11.1994 15.6206 11.3188 15.6206 11.466V14.9326C15.6203 15.3571 15.872 15.7414 16.2615 15.9111C16.651 16.0807 17.1042 16.0035 17.4153 15.7144L24.4961 9.14503C24.816 8.84966 24.9986 8.43467 25 7.99947Z"></path>
                    <path d="M5 6C5 5.44772 5.44772 5 6 5H7C7.55228 5 8 5.44772 8 6V10.5C8 11.0523 7.55228 11.5 7 11.5H6C5.44772 11.5 5 11.0523 5 10.5V6Z"></path>
                    <path d="M0 6C0 5.44772 0.447715 5 1 5H2C2.55228 5 3 5.44772 3 6V10.5C3 11.0523 2.55228 11.5 2 11.5H1C0.447715 11.5 0 11.0523 0 10.5V6Z"></path>
                  </svg>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

Pricing.propTypes = {};

export default Pricing;

import React from "react";
import PropTypes from "prop-types";

const PeopleSection = (props) => {
  return (
    <>
      <div className="px-2 mt-24 text-center">
        <p className="  font-bold text-4xl leading-snug tracking-tight mt-10   flex flex-col     ">
          We Thought Of Everyone And Everything.
          <span className="text-lg px-1 text-gray-400 ">
            Our diverse user base includes students to corporate professionals
            and teams.
          </span>
        </p>
      </div>
      <div className="my-20 grid p-5 gap-5 md:gap-10 sm:grid-cols-2  mx-auto max-w-screen-xl">
        <div className="py-14 px-16  shadow-lg shadow-blue-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-14 w-14 rounded-xl bg-rose-400 p-4 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            />
          </svg>
          <p className="mt-4 font-semibold py-3 text-3xl md:text-5xl leading-normal tracking-tight ">
            Ahead of Schedule as a Student{" "}
          </p>
          <p className="mt-2 ">
            Maximize Academic Efficiency with Time-On-Task: Elevate Your Student
            Experience in Managing Coursework, Assignments, and Deadlines.
          </p>
        </div>{" "}
        <div className="py-14 px-16  shadow-lg shadow-blue-200 ">
          <svg
            height="60px"
            width="60px"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <g id="Layer_1">
                <g>
                  <circle fill="#76C2AF" cx="32" cy="32" r="32"></circle>
                </g>
                <g>
                  <g>
                    <path
                      fill="#231F20"
                      d="M42.5,44c-0.7,0-1.3-0.3-1.7-1c-0.6-0.9-0.3-2.2,0.7-2.8l10.1-6.2c0,0,0,0,0-0.1s0,0,0-0.1l-10.1-6.2c-0.9-0.6-1.2-1.8-0.7-2.8c0.6-0.9,1.8-1.2,2.8-0.7l10.6,6.6l0.2,0.2c0.8,0.8,1.2,1.9,1.2,3c0,1.1-0.4,2.2-1.2,3l-0.2,0.2l-10.6,6.6C43.2,43.9,42.8,44,42.5,44z"
                    ></path>
                  </g>
                  <g>
                    <path
                      fill="#231F20"
                      d="M21.5,44c-0.4,0-0.7-0.1-1-0.3L9.9,37.1L9.7,37c-0.8-0.8-1.2-1.9-1.2-3c0-1.1,0.4-2.2,1.2-3l0.2-0.2l10.6-6.6c0.9-0.6,2.2-0.3,2.8,0.7c0.6,0.9,0.3,2.2-0.7,2.8l-10.1,6.2c0,0,0,0.1,0,0.1s0,0,0,0.1l10.1,6.2c0.9,0.6,1.2,1.8,0.7,2.8C22.9,43.7,22.2,44,21.5,44z"
                    ></path>
                  </g>
                </g>
                <g>
                  <path
                    fill="#FFFFFF"
                    d="M42.5,42c-0.7,0-1.3-0.3-1.7-1c-0.6-0.9-0.3-2.2,0.7-2.8l10.1-6.2c0,0,0-0.1,0-0.1l-10.1-6.2c-0.9-0.6-1.2-1.8-0.7-2.8c0.6-0.9,1.8-1.2,2.8-0.7l10.6,6.6l0.2,0.2c1.6,1.6,1.6,4.3,0,6l-0.2,0.2l-10.6,6.6C43.2,41.9,42.8,42,42.5,42z"
                  ></path>
                </g>
                <g>
                  <path
                    fill="#FFFFFF"
                    d="M21.5,42c-0.4,0-0.7-0.1-1-0.3L9.9,35.1L9.7,35c-1.6-1.6-1.6-4.3,0-6l0.2-0.2l10.6-6.6c0.9-0.6,2.2-0.3,2.8,0.7c0.6,0.9,0.3,2.2-0.7,2.8l-10.1,6.2c0,0,0,0.1,0,0.1l10.1,6.2c0.9,0.6,1.2,1.8,0.7,2.8C22.9,41.7,22.2,42,21.5,42z"
                  ></path>
                </g>
                <g>
                  <path
                    fill="#FFFFFF"
                    d="M25.5,51c-0.2,0-0.5,0-0.7-0.1c-1-0.4-1.5-1.6-1.2-2.6l13-34c0.4-1,1.6-1.5,2.6-1.2c1,0.4,1.5,1.6,1.2,2.6l-13,34C27.1,50.5,26.3,51,25.5,51z"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
          <p className="mt-4 font-semibold py-3 text-3xl md:text-5xl leading-normal tracking-tight ">
            Ahead of Schedule as a Developer{" "}
          </p>
          <p className="mt-2  ">
            Coding chaos? Task-On-Time is designed for developers like you.
            Streamline your workflow, manage projects, and hit your coding
            milestones with precision and ease.
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="inline h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </p>
        </div>
        <div className="py-14 px-16 shadow-lg shadow-blue-200 drop-shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-14 w-14 rounded-xl bg-green-400 p-4 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className="mt-4 font-semibold py-3 text-3xl md:text-5xl leading-normal tracking-tight ">
            Ahead of Schedule as a Freelancer{" "}
          </p>
          <p className="mt-2  ">
            Juggle freelance projects effortlessly with Time-On-Task. Tailored
            for freelancers, our platform streamlines tasks, clients, and
            deadlines for optimal productivity.
          </p>
        </div>
        <div className="py-14 px-16  shadow-lg shadow-blue-200">
          <svg
            className="inline h-16 w-16"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 508 508"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <circle fill="#90DFAA" cx="254" cy="254" r="254"></circle>{" "}
              <path
                fill="#2C9984"
                d="M110.8,212.8L110.8,212.8L110.8,212.8L110.8,212.8L76,229.6v71.2l20.4,21.6c4.8,0.8,9.6,1.2,14.4,1.2 s9.6-0.4,14.4-1.2l20.4-21.6v-71.2L110.8,212.8L110.8,212.8z"
              ></path>{" "}
              <ellipse
                fill="#F9B54C"
                cx="110.8"
                cy="221.2"
                rx="22.4"
                ry="22.8"
              ></ellipse>{" "}
              <g>
                {" "}
                <path
                  fill="#2C9984"
                  d="M192.4,281.6l-11.2-35.2l-44-21.2c0,15.2-1.2,52.8-19.2,97.6C148.8,320.8,175.2,304.8,192.4,281.6z"
                ></path>{" "}
                <path
                  fill="#2C9984"
                  d="M103.6,322.8c-18-44.8-19.2-82.4-19.2-97.6l-44,21.2l-11.2,35.2C46.4,304.8,72.8,320.8,103.6,322.8z "
                ></path>{" "}
              </g>{" "}
              <g>
                {" "}
                <path
                  fill="#FFFFFF"
                  d="M132.4,216.8c0,0,2.8,15.6-21.6,27.2c0,0,18.4,1.6,23.6,18.4C134.8,263.2,144.8,226,132.4,216.8z"
                ></path>{" "}
                <path
                  fill="#FFFFFF"
                  d="M89.2,216.8c0,0-2.8,15.6,21.6,27.2c0,0-18.4,1.6-23.6,18.4C86.8,263.2,77.2,226,89.2,216.8z"
                ></path>{" "}
              </g>{" "}
              <path
                fill="#FFD05B"
                d="M147.2,175.2c0,24-16.4,53.2-36.4,53.2s-36.4-29.2-36.4-53.2S90.8,142,110.8,142 S147.2,151.2,147.2,175.2z"
              ></path>{" "}
              <g>
                {" "}
                <path
                  fill="#324A5E"
                  d="M98.4,136.8c0,0,29.2-11.6,44.4,14.8c16,28.4-4,59.2-8.4,62c0,0,1.2-4.8,4-14.4 c0,0,7.2-21.2-14.4-24.4c0,0-20.8-2.8-22.4-7.2c0,0,1.6,7.6,10.8,9.2c0,0-21.6-0.4-28.4-8c0,0-9.2,30.4,4.4,46.8 c0,0-23.2-18.4-20.4-47.2C68.4,168,66.8,128.8,98.4,136.8z"
                ></path>{" "}
                <path
                  fill="#324A5E"
                  d="M132,182.8h-11.2h-1.2H102h-0.4h-12c-3.6,0-6.4,2.8-6.4,6.4v5.2c0,3.6,2.8,6.4,6.4,6.4H102 c1.6,0,3.2-0.8,4.4-1.6c0.4,0,0.8-0.4,0.8-0.8c0.8-2,2.4-3.2,4-3.2s3.2,1.2,4,3.2c0,0.4,0.4,0.8,0.8,0.8c1.2,1.2,2.4,1.6,4.4,1.6 h12.4c3.6,0,6.4-2.8,6.4-6.4v-5.2C138.4,185.6,135.6,182.8,132,182.8z M89.6,198c-2,0-3.2-1.6-3.2-3.2v-5.2c0-2,1.6-3.2,3.2-3.2h12 h0.4c2,0,3.2,1.6,3.2,3.2v5.2c0,0.4,0,0.8-0.4,1.2c0,0.4-0.4,0.4-0.4,0.8c-0.4,0.4-1.6,1.2-2.4,1.2H89.6z M110.8,192.4 c-0.8,0-2,0.4-2.8,0.8v-3.6c0-1.2-0.4-2.4-0.8-3.2h7.2c-0.8,0.8-0.8,2-0.8,3.2v3.6C112.8,192.4,111.6,192.4,110.8,192.4z M135.6,194.4c0,2-1.6,3.2-3.2,3.2H120c-1.2,0-2-0.4-2.8-1.2c0-0.4-0.4-0.4-0.4-0.8c0-0.4-0.4-0.8-0.4-1.2v-5.2 c0-2,1.6-3.2,3.2-3.2h1.2H132c2,0,3.2,1.6,3.2,3.2v5.2H135.6z"
                ></path>{" "}
              </g>{" "}
              <path
                fill="#E6E9EE"
                d="M227.6,216L227.6,216L227.6,216L227.6,216l-43.2,20.8v88.4l25.2,26.8c6,0.8,12,1.2,18,1.2 s12-0.4,18-1.2l25.2-26.8v-88.4L227.6,216L227.6,216z"
              ></path>{" "}
              <ellipse
                fill="#F9B54C"
                cx="227.6"
                cy="226.8"
                rx="27.6"
                ry="28"
              ></ellipse>{" "}
              <polygon
                fill="#54C0EB"
                points="239.2,255.2 215.6,255.2 220.4,268.4 234.8,268.4 "
              ></polygon>{" "}
              <path
                fill="#84DBFF"
                d="M208.4,352c6,0.8,12.4,1.6,18.8,1.6c6.4,0,12.8-0.4,18.8-1.6l-11.6-83.6H220L208.4,352z"
              ></path>{" "}
              <g>
                {" "}
                <path
                  fill="#324A5E"
                  d="M328.8,301.6l-14-43.6l-54.4-26.4c0,18.8-1.2,65.6-23.6,121.2C274.4,350.4,307.6,330.8,328.8,301.6z "
                ></path>{" "}
                <path
                  fill="#324A5E"
                  d="M218.4,352.8c-22.4-55.6-23.6-102.4-23.6-121.2L140,258l-14,43.6 C147.2,330.8,180.4,350.4,218.4,352.8z"
                ></path>{" "}
              </g>{" "}
              <g>
                {" "}
                <path
                  fill="#FFFFFF"
                  d="M254.4,221.2c0,0,3.6,19.2-27.2,34c0,0,22.8,1.6,29.2,23.2C257.2,278.8,269.6,232.4,254.4,221.2z"
                ></path>{" "}
                <path
                  fill="#FFFFFF"
                  d="M200.4,221.2c0,0-3.6,19.2,27.2,34c0,0-22.8,1.6-29.2,23.2C198,278.8,185.6,232.4,200.4,221.2z"
                ></path>{" "}
              </g>{" "}
              <path
                fill="#FFD05B"
                d="M272.8,169.2c0,29.6-20.4,66-45.2,66s-45.2-36.4-45.2-66s20.4-41.2,45.2-41.2 S272.8,139.6,272.8,169.2z"
              ></path>{" "}
              <g>
                {" "}
                <path
                  fill="#324A5E"
                  d="M212,122c0,0,36.4-14.4,55.2,18.4c20,35.2-5.2,73.6-10.4,76.8c0,0,1.2-6,5.2-18 c0,0,8.8-26.4-18-30.4c0,0-26-3.6-28-9.2c0,0,2,9.6,13.6,11.2c0,0-26.8-0.8-35.2-10c0,0-11.2,37.6,5.2,58c0,0-28.8-23.2-25.2-58.4 C174.4,160.8,172.8,112,212,122z"
                ></path>{" "}
                <path
                  fill="#324A5E"
                  d="M254,179.2h-14h-1.2h-22.4h-0.8h-14.8c-4.4,0-8,3.6-8,8v6.4c0,4.4,3.6,8,8,8H216c2,0,4-0.8,5.2-2 c0.4,0,0.8-0.4,1.2-1.2c1.2-2.4,2.8-4,4.8-4s4,1.6,4.8,4c0.4,0.4,0.4,0.8,1.2,0.8c1.2,1.2,3.2,2,5.2,2H254c4.4,0,8-3.6,8-8v-6.4 C262,182.8,258.4,179.2,254,179.2z M200.8,197.6c-2.4,0-4-2-4-4v-6.4c0-2.4,2-4,4-4h14.8h0.8c2.4,0,4,2,4,4v6.4 c0,0.4,0,1.2-0.4,1.6c0,0.4-0.4,0.4-0.4,0.8c-0.8,1.2-2,1.6-3.2,1.6L200.8,197.6L200.8,197.6z M227.6,190.8c-1.2,0-2.4,0.4-3.2,0.8 v-4.4c0-1.6-0.4-2.8-1.2-4h8.8c-0.8,1.2-1.2,2.8-1.2,4v4.4C229.6,191.2,228.8,190.8,227.6,190.8z M258,193.6c0,2.4-2,4-4,4h-15.2 c-1.2,0-2.4-0.8-3.2-1.6c0-0.4-0.4-0.4-0.4-0.8c-0.4-0.4-0.4-1.2-0.4-1.6v-6.4c0-2.4,2-4,4-4h1.2h14c2.4,0,4,2,4,4V193.6z"
                ></path>{" "}
              </g>{" "}
              <ellipse
                fill="#2B3B4E"
                cx="356.4"
                cy="141.2"
                rx="27.2"
                ry="18"
              ></ellipse>{" "}
              <path
                fill="#324A5E"
                d="M398.8,225.6c2.8-10.4,4.4-21.2,4.4-31.2c0-37.2-20.8-51.6-46.8-51.6s-46.8,14.4-46.8,51.6 c0,10,1.6,20.8,4.4,31.2L398.8,225.6L398.8,225.6z"
              ></path>{" "}
              <path
                fill="#FF7058"
                d="M356.4,250L356.4,250L356.4,250L356.4,250L308,273.2V372l8.4,8.8c12.8,3.6,26,6,40,6s27.2-2,40-6 l8.4-8.8v-98.8L356.4,250L356.4,250z"
              ></path>{" "}
              <ellipse
                fill="#F9B54C"
                cx="356.4"
                cy="262.4"
                rx="31.2"
                ry="31.6"
              ></ellipse>{" "}
              <g>
                {" "}
                <path
                  fill="#FF7058"
                  d="M466,334l-12-36.8L393.2,268c0,19.2-1.2,63.6-20,118C410.8,381.2,443.6,362,466,334z"
                ></path>{" "}
                <path
                  fill="#FF7058"
                  d="M339.6,385.6c-18.8-54.4-20-99.2-20-118l-60.8,29.2l-12,36.8C269.2,362,302.4,381.2,339.6,385.6z"
                ></path>{" "}
              </g>{" "}
              <g>
                {" "}
                <path
                  fill="#FFFFFF"
                  d="M386.8,255.6c0,0,4,21.6-30.4,38c0,0,25.2,2,32.8,26C389.6,320.4,403.6,268.4,386.8,255.6z"
                ></path>{" "}
                <path
                  fill="#FFFFFF"
                  d="M326,255.6c0,0-4,21.6,30.4,38c0,0-25.2,2-32.8,26C323.2,320.4,309.6,268.4,326,255.6z"
                ></path>{" "}
              </g>{" "}
              <path
                fill="#FFD05B"
                d="M401.6,214.4c-1.2-1.2-3.2-1.2-4.8-0.4l0,0c0.8-16.8-9.2-19.2-9.2-19.2c-10.8-4-14.8-14-16.4-21.6 c-4.4,4.8-11.6,10-23.6,14.8c-32.8,13.2-31.6,26-31.6,26l0,0l0,0l0,0c-1.6-0.8-3.6-0.8-4.8,0.4c-3.2,2.4-3.2,9.2-0.4,15.6 c3.2,6,8,8.8,11.2,6.8c7.6,19.6,20,34.8,34.4,34.8c14,0,26.8-15.6,34.4-35.2c3.2,2,8.4-0.8,11.2-6.8 C405.2,224,404.8,216.8,401.6,214.4z"
              ></path>{" "}
            </g>
          </svg>
          <p className="mt-4 font-semibold py-3 text-3xl md:text-5xl leading-normal tracking-tight ">
            {" "}
            Ahead of Schedule as an Analyst
          </p>
          <p className="mt-2  ">
            Tackling project tasks? Time-On-Task is crafted for seamless
            collaboration. Streamline workflows, manage projects, and hit
            milestones collectively with precision and ease.
          </p>
        </div>
      </div>
    </>
  );
};

PeopleSection.propTypes = {};

export default PeopleSection;

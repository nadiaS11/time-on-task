"use client";
import PropTypes from "prop-types";
import Navbar from "./Navbar";
import "../components/css styles/header.css";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import HeadLottie from "../components/lotties/HeadLottie.json";
import { Box, Button, Container, Heading, Stack, Text } from "@chakra-ui/react";
const Header = (props) => {
  return (
    <div className="bg-header w-full   overflow-hidden  md:h-[70vh] ">
      <Navbar />
      <div className="flex flex-col md:flex-row items-center justify-between max-w-screen-2xl   px-5  w-full mx-auto">
        <div className="max-w-2xl mx-auto w-full">
          <Heading
            mb={4}
            as={"h2"}
            bgGradient={[
              "linear(to-tr, teal.600, yellow.400)",
              "linear(to-b, blue.600, teal.500)",
              "linear(to-t, orange.800, purple.300)",
            ]}
            bgClip="text"
            // fontSize="6xl"
            // fontWeight="extrabold"
          >
            Effortless Organization, <br />
            Seamless Productivity. <br /> Your Tasks, Your Way!
          </Heading>
          <Text fontSize="xl">
            Optimize tasks, enhance efficiency. Tailor your workflow with our
            intuitive task management platform. Elevate productivity, simplify
            organization, achieve more effortlessly
          </Text>
          <Box
            as="button"
            p={4}
            mt={"15px"}
            color="white"
            fontWeight="bold"
            borderRadius="md"
            bgGradient={["linear(to-t, orange.500, purple.500)"]}
            _hover={{
              bgGradient: "linear(to-r, purple.400, pink.400)",
            }}
          >
            Let's Explore
          </Box>
        </div>
        <Player
          autoplay
          loop
          src={HeadLottie}
          style={{ height: "500px", width: "100%", overflow: "hidden" }}
        ></Player>
      </div>
    </div>
  );
};

Header.propTypes = {};

export default Header;

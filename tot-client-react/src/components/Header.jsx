import PropTypes from "prop-types";
import "../components/css styles/header.css";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import HeadLottie from "./lotties/HeadLottie.json";
import { Box, Button, Container, Heading, Stack, Text } from "@chakra-ui/react";
import Navbar from "./Navbar";
const Header = () => {
  return (
    <div className="bg-header w-full   overflow-hidden   ">
      <Navbar />
      <div className="flex flex-col md:flex-row items-center justify-between max-w-screen-2xl   px-5  w-full mx-auto">
        <div className="max-w-2xl mx-auto py-5 w-full">
          <Heading
            mb={4}
            as={"h2"}
            bgGradient={["linear(to-t, yellow.300, blue.100)"]}
            bgClip="text"
            // fontSize="6xl"
            // fontWeight="extrabold"
          >
            Effortless Organization, <br />
            Seamless Productivity. <br /> Your Tasks, Your Way!
          </Heading>
          <Text fontSize="xl" my={"20px"} color={"ghostwhite"}>
            Optimize tasks, enhance efficiency. Tailor your workflow with our
            intuitive task management platform. Elevate productivity, simplify
            organization, achieve more effortlessly
          </Text>
          <Box
            href="/taskboard"
            as="a"
            p={4}
            mt={"15px"}
            color="ghostwhite"
            fontWeight="bold"
            borderRadius="md"
            bgGradient={["linear(to-tr, yellow.400, blue.600)"]}
            _hover={{
              bgGradient: "linear(to-br, yellow.700, blue.700)",
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

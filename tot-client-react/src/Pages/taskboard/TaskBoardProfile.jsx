import React from "react";
import PropTypes from "prop-types";
import useAuth from "../../hooks/useAuth";
import { Box, Heading, Image, Wrap, WrapItem } from "@chakra-ui/react";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const TaskBoardProfile = (props) => {
  const { user } = useAuth();
  console.log(user);

  return (
    <div className=" ">
      <Image
        borderRadius="full"
        boxSize="150px"
        border={"2px"}
        p={"5px"}
        src={user?.photoURL ? user?.photoURL : "./tot-logo.png"}
        className="mx-auto"
        alt="user name"
      />
      <Heading as="h3" size="lg" my={"20px"} textAlign={"center"}>
        {user?.displayName}
      </Heading>
      <Link target="_blank" to={"https://nadia-sultana-portfolio.netlify.app"}>
        <Box
          target="_blank"
          href="https://nadia-sultana-portfolio.netlify.app/"
          size="sm"
          my={"20px"}
          p={"10px"}
          w={"200px"}
          mx={"auto"}
          textAlign={"center"}
          borderRadius="md"
          bgGradient={["linear(to-tr, purple.900, pink.400)"]}
          _hover={{
            bgGradient: "linear(to-br, purple.900, pink.400)",
          }}
        >
          Portfolio{" "}
        </Box>
      </Link>
      <Wrap spacing="30px" justify="center" mt="40px">
        <WrapItem>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/nadia.ns11/"
          >
            {" "}
            <FaFacebookF size={"1.2rem"} />
          </a>
        </WrapItem>
        <WrapItem>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://linkedin.com/in/nadia-ns11"
          >
            {" "}
            <FaLinkedinIn size={"1.2rem"} />
          </a>
        </WrapItem>
        <WrapItem>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/nadiaS11"
          >
            {" "}
            <FaGithub size={"1.2rem"} />
          </a>
        </WrapItem>
      </Wrap>

      {/* <Wrap>
        <WrapItem>
          <Center w={"100%"} h="100%">
            <Image
              borderRadius="full"
              boxSize="100px"
              src={user?.photoURL}
              className="mx-auto"
              alt="Dan Abramov"
            />
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w={"100%"} h="100%">
            {" "}
            <Heading as="h3" size="lg">
              {user?.displayName}
            </Heading>
          </Center>
        </WrapItem>
      </Wrap> */}
    </div>
  );
};

TaskBoardProfile.propTypes = {};

export default TaskBoardProfile;

import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import Login from "../../components/Login";
import SignUp from "../../components/SignUp";

const LoginPage = () => {
  return (
    <Container maxW={"xl"} centerContent>
      <Box
        d={"flex"}
        flexDir={"column"}
        my={"auto"}
        na
        alignItems={"center"}
        p={"5"}
        m={"50px 0 20px 0"}
        width={"100%"}
        borderRadius={"8px"}
        className="bg-blue-700 bg-opacity-20"
      >
        <Tabs isFitted variant="enclosed">
          <TabList mb="1em">
            <Tab className="focus:ring-2">Log In</Tab>
            <Tab className="focus:ring-2">Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <SignUp />{" "}
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

LoginPage.propTypes = {};

export default LoginPage;

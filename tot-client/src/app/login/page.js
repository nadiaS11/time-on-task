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
import Login from "@/components/Login";
import SignUp from "@/components/SignUp";

const page = (props) => {
  return (
    <Container>
      <Box
        padding={"10px"}
        width={"100%"}
        borderRadius={"8px"}
        className="bg-blue-700 bg-opacity-20"
      >
        <Tabs isFitted variant="enclosed">
          <TabList mb="1em">
            <Tab>Log In</Tab>
            <Tab>Sign Up</Tab>
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

page.propTypes = {};

export default page;

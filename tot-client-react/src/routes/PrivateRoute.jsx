import React from "react";
import PropTypes from "prop-types";
import { Center, Container, Spinner } from "@chakra-ui/react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading) {
    return (
      <Container centerContent>
        <Center className="w-full h-screen">
          {" "}
          <Spinner />
        </Center>
      </Container>
    );
  }
  // if (user) {
  //   return children;
  // }
  if (!loading && !user?.email) {
    return <Navigate to={"/login"} state={{ from: location }} replace="true" />;
  }
  return children;
};

PrivateRoute.propTypes = {};

export default PrivateRoute;

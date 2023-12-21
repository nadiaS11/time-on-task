import React from "react";
import PropTypes from "prop-types";
import Header from "@/components/Header";
import PeopleSection from "@/components/PeopleSection";
import Footer from "@/components/Footer";

const HomePage = (props) => {
  return (
    <div>
      <Header />
      <PeopleSection />
      <Footer />
    </div>
  );
};

HomePage.propTypes = {};

export default HomePage;

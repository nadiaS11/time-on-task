import React from "react";
import PropTypes from "prop-types";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import PeopleSection from "../../components/PeopleSection";

const Home = (props) => {
  return (
    <div>
      <Header />
      <PeopleSection />
      <Footer />
    </div>
  );
};

Home.propTypes = {};

export default Home;

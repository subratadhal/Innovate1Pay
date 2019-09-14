import React, { Component } from "react";
import Banner from "./banner";
import ApplicationProcess from "./applicationProcess";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Banner />
        <ApplicationProcess />
      </React.Fragment>
    );
  }
}

export default Home;

import React from "react";
import Head from "../Components/Head";
import Join from "../Components/Join";
import Profitable from "../Components/Profitable";
import Tracking from "../Components/Tracking";
import GetStarted from "../Components/GetStarted";
import Footer from "../Components/Footer";

class JoinasReferral extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  componentDidUpdate() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <Head />
        <Join />
        <Profitable />
        <Tracking />
        <GetStarted />
        <Footer />
      </div>
    );
  }
}

export default JoinasReferral;

import React from "react";
 
import Join from "../Components/Join";
import Profitable from "../Components/Profitable";
import Tracking from "../Components/Tracking";
import GetStarted from "../Components/GetStarted";
import Footer from "../Components/Footer";

class JoinasReferral extends React.Component {
 
  render() {
    return (
      <div>
        <Join />
        <Profitable />
        <Tracking />
        <GetStarted />
      </div>
    );
  }
}

export default JoinasReferral;

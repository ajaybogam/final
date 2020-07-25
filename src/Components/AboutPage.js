import React from "react";
import About from "../Components/About";
import Team from "../Components/Team";
import Partners from "./containers/home/Partners";

class AboutPage extends React.Component {
  render() {
    return (
      <div>
        <About />
        <Partners />
        <Team />
      </div>
    );
  }
}

export default AboutPage;

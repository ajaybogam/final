import React from "react";
import Head from "../Components/Head";
import Partners from "../Components/Partners";
import Footer from "../Components/Footer";
import About from "../Components/About";
import Team from "../Components/Team";

class AboutPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  componentDidUpdate() {
    window.scrollTo(0, 0);
  }
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

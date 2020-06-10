import React from "react";
import Head from "../Components/Head";
import Footer from "../Components/Footer";
import Center from "../Components/Solar";
import Choose from "../Components/Choose";
import Hassle from "../Components/Hassle";
import Partners from "../Components/Partners";
import Part from "../Components/Part";

class HomePage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  componentDidUpdate() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <Center />
        <Choose />
        <Hassle />
        <Partners />
        <Part />
      </div>
    );
  }
}

export default HomePage;

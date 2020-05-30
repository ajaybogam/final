import React from "react";
import Head from "../Components/Head";
import Footer from "../Components/Footer";
import Insurance from "../Components/Insurance";

class InsurancePage extends React.Component {
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
        <Insurance />
        <Footer />
      </div>
    );
  }
}

export default InsurancePage;

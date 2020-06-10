import React from "react";
import Head from "../Components/Head";
import Footer from "../Components/Footer";
import Contact from "../Components/Contact";

class ContactPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  componentDidUpdate() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <Contact />
      </div>
    );
  }
}

export default ContactPage;

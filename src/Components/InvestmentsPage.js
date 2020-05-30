import React from "react";
import Head from "../Components/Head";
import Footer from "../Components/Footer";
import Investment from "../Components/Investments";

class InvestmentsPage extends React.Component {
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
        <Investment />
        <Footer />
      </div>
    );
  }
}

export default InvestmentsPage;

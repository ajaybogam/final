import React from "react";
import Head from "../Components/Head";
import Footer from "../Components/Footer";
import Loans from "../Components/Loans";

class LoansPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  componentDidUpdate() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <Loans />
      </div>
    );
  }
}

export default LoansPage;

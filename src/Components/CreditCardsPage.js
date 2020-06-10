import React, { Component } from "react";
import Head from "../Components/Head";
import Footer from "../Components/Footer";
import CreditCards from "../Components/CrediCard";

export class CreditCardsPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  componentDidUpdate() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <CreditCards />
      </div>
    );
  }
}

export default CreditCardsPage;

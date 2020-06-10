import React from "react";
import Head from "../Components/Head";
import Footer from "../Components/Footer";
import Terms from "../Components/TermsConditions";

class TncPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  componentDidUpdate() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <Terms />
      </div>
    );
  }
}

export default TncPage;

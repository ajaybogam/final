import React from "react";
import "../css/about.css";
import Finance from "../Assets/Dr Finance.svg";
import India from "../Assets/India.svg";
import "../css/Stars.css";
import '../css/loans.css'
import PageIntroView from "./shared/PageIntroView";
function About() {
  return (
    <React.Fragment>
      <PageIntroView
        title="We connect you with financial institutions"
        description="Analyse your financial needs, find the best possible solution and process the applications on your behalf"
        image={Finance} />

      <PageIntroView invert={true}
        title="Over 10 years of experience in banking & insurance"
        description="We have provided financial services to over 2000 customers in
        Telangana, Andhra Pradesh, Tamil Nadu and Karnataka states. Through
        our association with leading banks across the country, we keep
        expanding our reach."
        image={India}
       />
       {/*  */}
    </React.Fragment>
  );
}

export default About;

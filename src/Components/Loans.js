import React from "react";
import Loan from "../Assets/Loans.svg";
import Deals from "../process/Best Deals.svg";
import Score from "../process/Cibil Score.svg";
import Service from "../process/Doorstep Service.svg";
import Checks from "../process/Eligibility Checks.svg";
import Analysis from "../process/Expert Analysis.svg";
import Free from "../process/Hassle Free Processing.svg";
import Status from "../process/Loan Status.svg";
import Safe from "../process/Safe Secure.svg";

import PageIntroView from "./shared/PageIntroView";
import PageSecondaryInfo from "./shared/PageSecondaryInfo";
import PageProcessView from "./shared/PageProccessView";
import ProcessThrough from "./shared/ProcessThrough";

const whyChooseOptionsList = [
  {
    image: Analysis,
    title: "Expert Analysis",
    description:
      "Our experts will conduct a deep analysis of your application & understand you requirements",
  },
  {
    image: Deals,
    title: "Get the best deals",
    description:
      "We will get you the maximum tenure, higher loan amount, low processing fees & no hidden charges",
  },
  {
    image: Service,
    title: "Doorstep Service",
    description:
      "Our team will ensure that your entire application is processed right from the comfort of your home",
  },
  {
    image: Free,
    title: "Hassle-free processing",
    description:
      "Our Experts will make sure that the loan process is hassle free and gets approved in few days",
  },
  {
    image: Status,
    title: "Loan Status Updates",
    description:
      "Our team will give you constant updates regarding loan status till the loan amount gets disbursed",
  },
  {
    image: Safe,
    title: "Be safe & Secure",
    description:
      "All your documents and details will be stored securely and by following the industry standards",
  },
  {
    image: Checks,
    title: "Multiple Eligibility Checks",
    description:
      "Check your eligibility in various banks at same time without letting it affect your CIBIL score",
  },
  {
    image: Score,
    title: "Low Cibil Score",
    description:
      "If you have a low CIBIL score? Then do not worry. dr.finance will still help you process the application",
  },
];

const Loans = () => {
  return (
    <React.Fragment>
      <PageIntroView
        title="Over a decade of experience in processing loans"
        description="Our experts will understand your requirements, analyse your application and provide you the best possible loans through our partnered premier banks & lending institutions"
        image={Loan}
      />

      <PageSecondaryInfo
        title="loans through dr.finance"
        description=" We have a state of art Technology where we can determine possible
          loan amount and loan eligibility in multiple banks within a few
          minutes without affecting your CIBIL score. After deep analysis, we
          would inform you about the banks that fulfil your requirement, the
          loan process, charges and time required to process your loan. Upon
          your approval, we will start the loan process. dr.finance is your
          financial doctor for all your family needs like home renovation,
          property purchase, vacation, education and business needs. Your data
          is safe with us and will not be shared with anyone."
        max_titleW="250px"
      />

      <PageProcessView
        title="loans processed"
        list={[
          "Personal",
          "Business",
          "Home",
          "Mortgage",
          "Construction",
          "Professional",
          "Plot",
          "Car",
          "Gold",
          "Education",
          "Equipment",
          "Consumer",
        ]}
        fontWeight="600"
      />

      <ProcessThrough
        title="why process loans through dr.finance?"
        options={whyChooseOptionsList}
        maxw="350px"
        max_title_base="250px"
        max_titleW_md="900px"
      />
    </React.Fragment>
  );
};

export default Loans;

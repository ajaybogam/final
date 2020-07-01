import React from "react";
import Insure from "../process/Insurance.svg";
import Analysis from "../process/Expert Analysis.svg";
import Digital from "../process/Digital Process.svg";
import Support from "../process/Claim Support.svg";
import Variety from "../process/Variety of products.svg";
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
    image: Digital,
    title: "Digital process",
    description:
      "Our online ecosystem will help you throughout the process. You can buy and renew your policies online",
  },
  {
    image: Support,
    title: "Dedicated Claims support",
    description:
      "Our experienced team will not just help you in buying but they will also help you in settling claims smoothly",
  },
  {
    image: Variety,
    title: "Variety of products",
    description:
      "Dr. Finance provides a variety of products for various stages of your life and health",
  },
];

const Insurance = (props) => {
  return (
    <React.Fragment>
      <PageIntroView
        title="Over a decade of experience in insurance sector"
        description=" Our partnership with premier insurance companies and our insurance
        experts enables us to provide you the best possible insurance
        policies"
        image={Insure}
      />

      <PageSecondaryInfo
        title="insurance through dr. finance"
        description="We have partnered with all premier Insurance companies to serve you.
        Our dedicated claims team will handle your claims. We will be having
        one on one call with you to get to know your needs. Upon analysis,
        we would educate you about the policy terms and conditions in detail
        and then we will recommend you the product with different options.
        If there is an agreement, we will process and close the insurance.
        Besides, we have got your back at every stage of the application.
        You would not have to worry about the clauses and conditions that
        are in fine print as our team would educate you about every nuance
        and share the necessary documentation for further reference."
      />

      <PageProcessView
        title="policies processed"
        list={["Life", "Term", "Retirement", "Pension"]}
        secondary={{
          title: "Health Insurance Policies",
          list: [
            "Individual",
            "Family",
            "Diabetic",
            "Senior Citizen",
            "Cardiac",
            "Cancer",
            "Special Children Health",
            "Accidental",
            "Overseas Medical Insurance",
            "Travel Insurance",
            "Group Health",
          ],
        }}
      />

      <ProcessThrough
        title="why process insurance through dr. finance?"
        options={whyChooseOptionsList}
      />
    </React.Fragment>
  );
};

export default Insurance;

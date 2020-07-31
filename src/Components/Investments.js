import React from "react";

import Invest from "../process/Investments.svg";
import Deals from "../process/Best Deals.svg";
import Safe from "../process/Safe Secure.svg";
import Back from "../process/Set Back.svg";

import PageIntroView from "./shared/PageIntroView";
import PageSecondaryInfo from "./shared/PageSecondaryInfo";
import PageProcessView from "./shared/PageProccessView";
import ProcessThrough from "./shared/ProcessThrough";


const whyChooseOptionsList = [
  {
    image: Back,
    title: "Expert Analysis",
    description:
      "Our experts will analyse your application and suggest you the best investment plans",
  },
  {
    image: Deals,
    title: "Get the best deals",
    description:
      "We lobby on your behalf to get you the best possible deals on your investments",
  },
  {
    image: Safe,
    title: "Be safe & Secure",
    description:
      "All your documents and details will be stored securely and by following the industry standards",
  },
];
const Investments = (props) => {
  return (
    <React.Fragment>
      <PageIntroView
        title="We will help you process & plan your investments"
        description="Get your investments processed by our experts and also receive advice on how to plan your investments"
        image={Invest}
      />

      <PageSecondaryInfo
        title="investments through dr.finance"
        description="Rupee saved is a rupee earned. We totally understand how a good
          saving can save you from crisis. To serve you, we have tied up with
          banks, post offices and NBFC’s to sell saving instruments like fixed
          deposits, tax saving deposits, recurring deposits and special saving
          schemes which are secured and offer good returns. Our expert spends
          time with you to understand your long-term or short-term plans and
          suggest the best instrument to invest in."
          max_titleW="170px"
      />

      <PageProcessView
        title="investments processed"
        list={[
          
          "Fixed Deposits",
          "Tax saving deposits",
          "Recurring deposits",
          "Special saving schemes",
        ]}
        fontWeight="600"
      />
   <ProcessThrough
  
      title="why process investments through dr.finance?"
      options={whyChooseOptionsList}
      maxw="300px"
      max_titleW_md="1000px"
      max_title_base="250px"
      
    />
    </React.Fragment>
  );
};

export default Investments;

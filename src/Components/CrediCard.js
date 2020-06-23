import React from "react";
import Credit from "../Assets/Credit Cards.svg";
import Simple from "../Assets/Simple Process.svg";
import Understand from "../Assets/Understanding Needs.svg";
import Cards from "../Assets/Variety of Cards.svg";

import PageIntroView from "./shared/PageIntroView";
import PageSecondaryInfo from "./shared/PageSecondaryInfo";
import PageProcessView from "./shared/PageProccessView";
import ProcessThrough from "./shared/ProcessThrough";

const whyChooseOptionsList = [
  {
    image: Simple,
    title: "SIMPLE PROCESS",
    description:
      "Finish your entire application process in a few simple steps. Apply from the comfort of your home",
  },
  {
    image: Understand,
    title: "UNDERSTANDING YOU NEEDS",
    description:
      "We analyse your requirements and suggest a credit card that fits perfectly for your needs",
  },
  {
    image: Cards,
    title: "VARIETY OF CREDIT CARDS",
    description:
      "From shopping to travel and dining to rewards, we process cards that fits you the best",
  },
];

const CreditCard = (props) => {
  return (
    <React.Fragment>
      <PageIntroView
        title="We will help you pick the best credit card for you"
        description="After a thorough analysis of your requirements, our experts will choose the credit card that your needs. It will not just help you spend but also earn money"
        image={Credit}
      />

      <PageSecondaryInfo
        title="credit cards through dr. finance"
        description="There are a lot of advantages to using a credit card when chosen
        wisely and used responsibly. They offer rewards, protection, and
        convenience. Credit cards can be great for your financial well-being
        and you can also earn money just by using certain cards! Our experts
        will get in touch with you to collect all your requirements and
        understand your needs. We then analyse your needs and based on your
        eligibility we suggest you the best possible credit card. You can
        finish your entire application right from the comfort of your home."
      />

      <PageProcessView
        title="credit cards processed"
        list={[
          "Lifestyle",
          "Shopping",
          "Travel",
          "Rewards",
          "Cashback",
          "Professional",
        ]}
      />

      <ProcessThrough
        title=" why process credit cards through dr. finance?"
        options={whyChooseOptionsList}
      />
    </React.Fragment>
  );
};

export default CreditCard;

import React from "react";
import { Flex, Text, Box } from "@chakra-ui/core";

import "./Solar.css";
// import "../css/Stars.css";
// import Solar from "../Assets/Solar System.svg";
// import mobilesolar from '../Assets/Illustration.svg'
import Star from "../../../Assets/Star.svg";
import PageWrapper from "../../shared/PageWrapper";
import BgStar from "../../shared/BgStar";

function HomeIntro() {
  return (
    <Flex className="view__intro">
      <PageWrapper position="relative" bottom={{ base: 12, md: 0 }}>
        <Text
          maxW="580px"
          fontSize={{ base: "3xl", md: "6xl" }}
          color="blue.400"
          lineHeight="1"
        >
          At the centre of your financial needs
        </Text>
        <Text maxW="360px" mt={2}>
          Dr. Finance connects you with lenders & insurers to get you the best
          possible deals
        </Text>
      </PageWrapper>
      {/* <img src={Star} className="star1"></img>
        <img src={Star} className="star2"></img>
        <img src={Star} className="star3"></img>
        <div id="title">At the centre of your financial needs</div>
        <div id="subtitle">
          Dr. Finance connects you with lenders & insurers to get you the best
          possible deals
        </div>
        <img src={Solar} className="solarSystem"></img>
        <div ><img className="mobileSolar" src={mobilesolar}/></div>
        <img src={Star} className="star4"></img>
        <img className="star5"></img> */}
      <BgStar stars={6} />
    </Flex>
  );
}

export default HomeIntro;

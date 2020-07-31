import React from "react";
import Setback from "../Assets/Set Back.svg";
import Bestdeal from "../Assets/Best Deals.svg";
import Safe from "../Assets/Safe Secure.svg";
import { Box } from "@chakra-ui/core";
import PageWrapper from "./shared/PageWrapper";
import BgStar from "./shared/BgStar";
import MainTitle from "./shared/MainTitle";
import WhyChooseOptions from "./shared/WhyChooseOptions";

const whyChooseOptions = [
  {
    image: Setback,
    title: "SIT BACK & RELAX",
    description: "We will take care of your entire application process",
  },
  {
    image: Bestdeal,
    title: "GET THE BEST DEALS",
    description: "We lobby on your behalf to get you the best possible deals",
  },
  {
    image: Safe,
    title: "BE SAFE & SECURE",
    description: "We keep your data safe and private by storing it securely",
  },
];

function Choose() {
  return (
    <Box zIndex="1" position="relative" bg="blue.400" py={16}>
      <PageWrapper color="white" textAlign="center">
        <MainTitle title="why choose dr.finance" mb={{ base: "4rem", md: "7rem" }} width={{ base: "200px", md: "auto" }} />
        <WhyChooseOptions list={whyChooseOptions} maxW="300px" />
      </PageWrapper>
      <BgStar stars={10} />
    </Box>
  );
}

export default Choose;

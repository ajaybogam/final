import React from "react";
import { Flex, Text } from "@chakra-ui/core";

import "./Solar.css";
import PageWrapper from "../../shared/PageWrapper";
import BgStar from "../../shared/BgStar";

function HomeIntro() {
  return (
    <Flex className="view__intro">
      <PageWrapper position="relative" bottom={{ base: 12, md: 0 }}>
        <Text
          maxW={{lg:"685px"}}
          fontSize={{ base: "4xl", md: "6xl" }} 
          fontWeight="bold"
          color="blue.400"
          lineHeight="1"
        >
          At the centre of your financial needs
        </Text>
        <Text maxW={{ base: "350px", md: "580px" }} mt="16px"  mx={{base:"auto",md:"0"}} 
          fontSize={{ base: "md", md: "2xl" }} >
          Dr. Finance connects you with lenders & insurers to get you the best
          possible deals
        </Text>
      </PageWrapper>
      <BgStar stars={6} />
    </Flex>
  );
}

export default HomeIntro;

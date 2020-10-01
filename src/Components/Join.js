import React from "react";
import AppStore from "../Assets/App Store.svg";
import PlayStore from "../Assets/Google Play.svg";
import "../css/Join.css";
import "../css/Stars.css";
import { Box, Text, Flex } from "@chakra-ui/core";
import PageWrapper from "./shared/PageWrapper";
import MainTitle from "./shared/MainTitle";
import BgStar from "./shared/BgStar";
import largeimg from '../Assets/Large.png'
function Join() {
  return (
    <Box
      position="relative"
      zIndex="1"
      py={16}
      pb={0}
      borderTop="1px solid rgba(0,0,0,.1)"
    >
      <PageWrapper textAlign={{ base: "center", lg: "left" }}>
        <Flex
          flexDirection={{ base: "column", lg: "row" }}
          alignItems={{ base: "center", lg: "stretch", }}
        >
          <Box flex="1" my={{ base: 4, lg: 16 }}>
            <Box maxW="700px" >
              <MainTitle
                title="Join us as a referral partner now"
                color="blue.600"
                fontSize={{ base: "4xl", lg: "6xl" }}
                mb={4}
                px="0"
              />
              <Text fontSize={{ base: "md", md: "2xl" }}>
                Download the  referral partner app, send us your referrals and
                get paid for them
              </Text>
            </Box>
            <Flex my={8} justifyContent={{ base: "center", lg: "flex-start" }} mb={{ base: 10, lg: "none" }}>
              <Box as="img" src={PlayStore}></Box>
              <Box as="img" ml={4} src={AppStore}></Box>
            </Flex>
          </Box>
          {/* maxW={{base: "180px", md:"240px", lg: "360px"}} */}
          <Box as="img" maxW={{ base: "200px", md: "280px", lg: "360px" }} src={largeimg} ml={{ base: 0, md: 6 }}></Box>
        </Flex>
      </PageWrapper>
      <BgStar stars={4} />
    </Box>
  );
}

export default Join;

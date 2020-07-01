import React from "react";
import AppStore from "../Assets/App Store.svg";
import PlayStore from "../Assets/Google Play.svg";
import Main from "../Assets/Main.svg";
import "../css/Join.css";
import "../css/Stars.css";
import Star from "../Assets/Star.svg";
import { Box, Text, Flex, SimpleGrid } from "@chakra-ui/core";
import PageWrapper from "./shared/PageWrapper";
import MainTitle from "./shared/MainTitle";
import BgStar from "./shared/BgStar";

function Join() {
  return (
    <Box
      position="relative"
      zIndex="1"
      py={16}
      pb={0}
      borderTop="1px solid rgba(0,0,0,.1)"
    >
      <PageWrapper textAlign={{ base: "center", md: "left" }}>
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          alignItems={{ base: "center", md: "stretch" }}
        >
          <Box flex="1" my={{ base: 4, md: 16 }}>
            <Box maxW="480px">
              <MainTitle
                title="Join us as a referral partner now?"
                color="blue.400"
                pl={0}
                mb={4}
              />
              <Text fontSize={{ base: "xl", md: "2xl" }}>
                Download the referral tracking app, send us your referrals and
                get paid for them
              </Text>
            </Box>
            <Flex my={8} justifyContent={{ base: "center", md: "flex-start" }}>
              <Box as="img" src={PlayStore}></Box>
              <Box as="img" ml={4} src={AppStore}></Box>
            </Flex>
          </Box>
          <Box as="img" src={Main} ml={{ base: 0, md: 6 }}></Box>
        </Flex>
      </PageWrapper>
      <BgStar stars={16} />
    </Box>
  );
}

export default Join;

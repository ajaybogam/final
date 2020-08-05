import React from "react";
import AppStore from "../Assets/App Store.svg";
import PlayStore from "../Assets/Google Play.svg";
import { Box, Text, Flex } from "@chakra-ui/core";
import PageWrapper from "./shared/PageWrapper";
import MainTitle from "./shared/MainTitle";
import BgStar from "./shared/BgStar";

function GetStarted() {
  return <Box zIndex="1" position="relative" py={16} bg="blue.600" color="white" textAlign={{base: "center", md: "left"}}>
    <PageWrapper >
      <MainTitle title="Get Started Now!" mb={2} f_size="4xl" px="0"/>
      <Text fontSize="xl">Download the app</Text>
      <Flex my={8} justifyContent={{ base: "center", md: "flex-start" }}>
        <Box as="img" src={PlayStore}></Box>
        <Box as="img" ml={4} src={AppStore}></Box>
      </Flex>
    </PageWrapper>
    <BgStar stars={2} />
  </Box>
}

export default GetStarted;

import React from "react";
import { Box, SimpleGrid, Text } from "@chakra-ui/core";
import DashboardActive from "../Assets/Dashboard Active.svg";
import BreakActive from "../Assets/Breakdown Active.svg";
import TrackActive from "../Assets/Track Active.svg";
import PageWrapper from "./shared/PageWrapper";
import MainTitle from "./shared/MainTitle";
import BgStar from "./shared/BgStar";
import styled from "@emotion/styled";

const Tracking = (props) => {

  return (
    <Box zIndex="1" position="relative" pt={16} textAlign="center">
      <PageWrapper >
        <MainTitle title="referral tracking app" color="blue.600"/>
        <Box overflow="hidden" overflowX="auto" w="100%">
          <TrackingOptions />
        </Box>
      </PageWrapper>
      <BgStar stars={10} />
    </Box>
  );
}

const TrackingOptions = (props) => {
  const [activeIdx, setActiveIdx] = React.useState(0);
  const items = [
    { image: DashboardActive, title: "DETAILED DASHBOARD", description: "Get a complete overview of your earnings right when you open the app" },
    { image: TrackActive, title: "TRACK EVERY STEP", description: "Monitor the progression of the application process at  each step" },
    { image: BreakActive, title: "BREAKDOWN COMMISSIONS", description: "View your pending commissions and how much you earned from each one" },
  ]

  return <SimpleGrid columns={{ base: 3, md: 3 }} width={{ base: "300%", md: "100%" }} mt={16}>
    {items.map((item, idx) => <Box
      key={idx}
      cursor="pointer"
      opacity={activeIdx === idx ? 1 : .3}
      p={{ base: 4 }}
      pb={0}
      onClick={() => setActiveIdx(idx)}>
      <Text  fontWeight="bold" fontSize={["xl","2xl"]}>{item.title}</Text>
      <Text px={8} my={4} w="330px" mx="auto"  fontSize={["md","xl"]}>{item.description}</Text>
      <Box as="img" mt={8} src={item.image} mx="auto" />
    </Box>)}
  </SimpleGrid>
  
}



export default Tracking;

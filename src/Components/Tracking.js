import React from "react";
import { Box, SimpleGrid, Text, Flex } from "@chakra-ui/core";
import DashboardActive from "../Assets/Dashboard Active.svg";
import BreakActive from "../Assets/Breakdown Active.svg";
import TrackActive from "../Assets/Track Active.svg";
import PageWrapper from "./shared/PageWrapper";
import MainTitle from "./shared/MainTitle";
import BgStar from "./shared/BgStar";
import styled from "@emotion/styled";
import constants from "../utils/constants";
import './Tracking.css'
const Tracking = (props) => {

  return (
    <Box zIndex="1" position="relative" pt={16} textAlign="center">
      <PageWrapper px="0">
        <MainTitle title="referral partner app" color="blue.600" />
        <Box overflow="hidden" overflowX="auto" w="100%" className="mobile_backround">
          <TrackingOptions />
        </Box>
      </PageWrapper>
      <BgStar stars={3} />
    </Box>
  );
}

const TrackingOptions = (props) => {
  const [activeIdx, setActiveIdx] = React.useState(0);
  const items = [
    { image: DashboardActive, title: "DETAILED DASHBOARD", description: "Get a complete overview of your earnings right when you open the app" },
    { image: TrackActive, title: "TRACK EVERY STEP", description: "Monitor the progress  of the application process at  each step" },
    { image: BreakActive, title: "BREAKDOWN COMMISSIONS", description: "View your pending commissions and how much you earned from each one" },
  ]

  return <Box d="block">
    <SimpleGrid columns={{ base: 3, md: 3 }} width={{ base: "100%", md: "100%" }} mt={{base:1,md:16}}  >
      {items.map((item, idx) => <Flex
        flexDirection="column"
        justifyContent="flex-end"
        key={idx}
        cursor="pointer"
        opacity={activeIdx === idx ? 1 : window.innerWidth < constants.MOBILE_VIEW ? 1 : .3}
        p={{ base: 1, md: 4 }}
        pb={{ base: 0, md: 0 }}
        onClick={() => setActiveIdx(idx)}
        ml={{base:4,md:'0'}}
      >
        <Text fontWeight="bold" fontSize={["xl", "2xl"]}>{item.title}</Text>
        <Text px={{ base: 2, md: 8 }} my={4} maxW={{base:'240px',md:'330px'}} mx="auto" fontSize={["md", "xl"]}>{item.description}</Text>
        <Box as="img" display="block" mt={8} src={item.image} mx="auto" maxW={{base:'250px',md:'100%'}} />

      </Flex>)}
    </SimpleGrid>
  </Box>

}



export default Tracking;

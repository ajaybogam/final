import React from "react";
import { Carousel } from "react-responsive-carousel";

import PageWrapper from "../../shared/PageWrapper";
import MainTitle from "../../shared/MainTitle";
import { Box, SimpleGrid, Text, Flex } from "@chakra-ui/core";
import teamList from "./team.list";

import BgStar from "../../shared/BgStar";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "@emotion/styled";


function OurTeam() {
  return <Box zIndex="1" position="relative" py={16} bg="blue.400" textAlign={{ base: "center" }}>
    <PageWrapper >
      <MainTitle title="Our Team" color="white" />
      <SimpleGrid display={{ base: "none", md: "grid" }} columns={{ base: 1, md: 3 }} spacingY={16} >
        {teamList.map((team, idx) => <TeamView team={team} key={idx} />)}
      </SimpleGrid>
      <OurTeamMobileView display={{ base: "block", md: "none" }} />
    </PageWrapper>
    <BgStar stars={4} />
  </Box>
}

const OurTeamMobileView = (props) => {
  const totalPartners = (teamList || []).length;
  const perRowCount = 1
  const rowsLength = Math.ceil(totalPartners / perRowCount);
  const rowsIndexes = (new Array(rowsLength))
    .fill(0)
    .map((i, idx) => idx)
    .map((n, idx) => {
      return (new Array(perRowCount).fill(1))
        .map((i, childIdx) => ((n * perRowCount) + childIdx))
        .filter(idx => idx < totalPartners)
    });
  return <MobileBox {...props} maxW={{ base: "280px" }} mx={{ base: "auto" }}>
    <Carousel>
      {rowsIndexes.map((row, key) => <SimpleGrid key={key} columns={1}>
        {row.map((partnerIdx, idx) => <TeamView team={teamList[partnerIdx]} key={idx} />)}
      </SimpleGrid>)}
    </Carousel>
  </MobileBox>
}


const TeamView = ({ team }) => <Flex alignItems="center" justifyContent="center">
  <Box bg="white" maxW="280px" rounded={8} overflow="hidden" >
    <Box as="img" w="100%" src={team.image} className="person"></Box>
    <Box p={4}>
      <Text fontSize="xl" fontWeight="bold" color="blue.700" >{team.title}</Text>
      <Text color="gray.400" >{team.designation}</Text>
    </Box>
  </Box>
</Flex>

const MobileBox = styled(Box)`
  border-radius: 8px;
  overflow: hidden;

  .carousel .control-dots .dot {
    background: transparent;
    border: 1px solid white;
    opacity: 1;
    height: 10px;
    width: 10px;
    box-shadow: none;
  }

  .carousel .control-dots .dot.selected,
  .carousel .control-dots .dot:focus,
  .carousel .control-dots .dot:active,
  .carousel .control-dots .dot:hover {
    background: #fff;
  }

`


export default OurTeam;

import React from "react";
import { Carousel } from "react-responsive-carousel";
import PageWrapper from "../../shared/PageWrapper";
import MainTitle from "../../shared/MainTitle";
import { Box, SimpleGrid } from "@chakra-ui/core";
import partnerList from "./partners.list";
import styled from "@emotion/styled";

import "react-responsive-carousel/lib/styles/carousel.min.css";

import "./Partner.css";

function Partners() {
  return (
    <Box my={20}>
      <PageWrapper>
        <MainTitle
          title="our financial partners"
          color="blue.600"
          textAlign="center"
          pt={8}
        />
        <SimpleGrid
          display={{ base: "none", md: "grid" }}
          columns={{ base: 1, md: 3 }}
        >
          {partnerList.map((partner, idx) => (
            <PartnerImage
              key={idx}
              as="img"
              mx="auto"
              my={{ base: 2, md: 4 }}
              src={partner}
            />
          ))}
        </SimpleGrid>
        <PartnersMobileView display={{ base: "block", md: "none" }} />
      </PageWrapper>
      <div>{/* <React_carousel /> */}</div>
    </Box>
  );
}

const PartnersMobileView = (props) => {
  const totalPartners = (partnerList || []).length;
  const perRowCount = 4;
  const rowsLength = Math.ceil(totalPartners / perRowCount);
  const rowsIndexes = new Array(rowsLength)
    .fill(0)
    .map((i, idx) => idx)
    .map((n, idx) => {
      return new Array(perRowCount)
        .fill(1)
        .map((i, childIdx) => n * perRowCount + childIdx)
        .filter((idx) => idx < totalPartners);
    });
  console.log({ rowsIndexes });
  return (
    <MobileBox {...props}>
      <Carousel>
        {rowsIndexes.map((row, key) => (
          <SimpleGrid key={key} columns={1}>
            {row.map((partnerIdx, idx) => (
              <PartnerImage>
                <Box
                  key={idx}
                  as="img"
                  mx="auto"
                  my={{ base: 2, md: 4 }}
                  src={partnerList[partnerIdx]}
                />
              </PartnerImage>
            ))}
          </SimpleGrid>
        ))}
      </Carousel>
    </MobileBox>
  );
};


const MobileBox = styled(Box)`
  border-radius: 8px;
  overflow: hidden;

  .carousel .control-dots .dot {
    background: transparent;
    border: 1px solid #1E9ED2;
    opacity: 1;
    height: 10px;
    width: 10px;
    box-shadow: none;
  }

  .carousel .control-dots .dot.selected,
  .carousel .control-dots .dot:focus,
  .carousel .control-dots .dot:active,
  .carousel .control-dots .dot:hover {
    background: #1E9ED2;
  }

`

const PartnerImage = styled(Box)`
  filter: grayscale(1);
  transition: all 0.3s;

  &:hover,
  &:focus,
  &:active
   {
    filter: grayscale(0);
  }

  @media(hover: hover) and (pointer: fine) {
    &:hover {
      filter: grayscale(0);
    }
}
`;



export default Partners;

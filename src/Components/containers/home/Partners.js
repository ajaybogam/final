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
    <Box>
      <PageWrapper>
        <MainTitle
          title="our financial partners"
          color="blue.400"
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
    <Box {...props}>
      <Carousel>
        {rowsIndexes.map((row, key) => (
          <SimpleGrid key={key} columns={1}>
            {row.map((partnerIdx, idx) => (
              <PartnerImage
                key={idx}
                as="img"
                mx="auto"
                my={{ base: 2, md: 4 }}
                src={partnerList[partnerIdx]}
              />
            ))}
          </SimpleGrid>
        ))}
      </Carousel>
    </Box>
  );
};

const PartnerImage = styled(Box)`
  filter: grayscale(1);
  transition: all 0.3s;

  &:hover {
    filter: grayscale(0);
  }
`;

export default Partners;

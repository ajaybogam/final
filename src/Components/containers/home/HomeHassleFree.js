import React from "react";
import styled from 'styled-components';
import { Box, Text } from "@chakra-ui/core";
import HassleFreeOptions from "./HassleFreeOptions";
import CanHelpWithOptions from "./CanHelpWithOptions";
import MainTitle from "../../shared/MainTitle";

const HomeHassleFree = (props) => <Box bg="blue.400" textAlign="center" color="white" pt={{ base: 0, md: 16 }}>
  <MainTitle title="hassle-free process" />
  <PageContainer className="container__hassleOptions">
    <HassleFreeOptions />
    <CanHelpWithOptions />
  </PageContainer>

</Box>

const PageContainer = styled(Box)`
  position: relative;
  z-index: 1;
  padding-top: 10em;
  overflow: hidden;
  &:before {
    width: 200%;
    height: 150%;
    background: #265182;
    border-radius: 100%;
    top: 0%;
    left: 50%;
    right: 0;
    position: absolute;
    content: '';
    z-index:-1;
    transform: translateY(7em) translateX(-50%);
  }
  .ui__hassleOptions {
    position: relative;
    transform: translateY(-6em);
  }
  .ui__hassleOptions__item:nth-child(even) {
    position: relative;
    transform: translateY(-2em);
  }

  .ui__hassleOptions__item:nth-child(3) {
    transform: translateY(-4em) ;
  }

  @media (max-width: 768px) {
    padding-top: 5em;
    &:before {
      transform: translateY(4.5em) translateX(-50%);
      width: 450%;
      height: 150%;
    }

    .ui__hassleOptions {
      position: relative;
      transform: translateY(-3em);
    }

    .ui__hassleOptions__item:nth-child(even) {
      position: relative;
      transform: translateY(-.5em);
    }
  
    .ui__hassleOptions__item:nth-child(3) {
      transform: translateY(-1em) ;
    }
  }


`

export default HomeHassleFree;

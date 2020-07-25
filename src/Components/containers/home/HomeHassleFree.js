import React from "react";
import styled from 'styled-components';
import { Box } from "@chakra-ui/core";
import HassleFreeOptions from "./HassleFreeOptions";
import CanHelpWithOptions from "./CanHelpWithOptions";
import MainTitle from "../../shared/MainTitle";

const HomeHassleFree = (props) => <Box bg="blue.400" textAlign="center" color="white" pt={{ base: 0, md: 16 }}>
  <MainTitle max_titleW="210px" title="hassle-free process" />
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
    padding-top: 0em;
    &:before {
      transform: translateY(8em) translateX(0);
      width: 100%;
      height: 100%;
      left: 0;
      border-radius: 0%;
    }

    .ui__hassleOptions {
      position: relative;
      transform: translateY(0);
      display: flex;
      overflow: hidden;
      overflow-x: auto;
      width: 100%;
    }

    .ui__hassleOptions__item:nth-child(even) {
      position: relative;
      transform: translateY(0);
    }

    .ui__hassleOptions__item:nth-child(3) {
      transform: translateY(0) ;
    }
  }


`

export default HomeHassleFree;

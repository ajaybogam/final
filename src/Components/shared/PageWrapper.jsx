import React from "react";
import { Box } from "@chakra-ui/core";
import styled from "@emotion/styled";

export default function PageWrapper(props) {
  // changing maxWidth from 1280 to 1440 and px md=100px
  return (
    <Wrapper
      position="relative"
      maxWidth={{ base: "100%", md: "1360px" }}
      width="100%"
      mx="auto"
      px={props.px ||{ base:4, md: 16 }}
      {...props}
    >
      {props.children}
    </Wrapper>
  );
}

const Wrapper = styled(Box)`
  // @media screen and (max-width: 1024px) {
  //   padding-left: 16px;
  //   padding-right: 16px;
  // }
`;

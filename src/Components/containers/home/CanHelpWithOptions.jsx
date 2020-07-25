import React from "react";
import PageWrapper from "../../shared/PageWrapper";
import {  Text, Box, Flex, Button } from "@chakra-ui/core";
import { helpYouOptions } from "./options.list";
import { Link } from "react-router-dom";
import styled from "styled-components";
import MainTitle from "../../shared/MainTitle";
import ProcessList from "../../shared/ProcessList";

function CanHelpWithOptions(props) {
  const keys = Object.keys(helpYouOptions);
  const [activeLink, setActiveLink] = React.useState(keys[0]);

  return (
    <PageContainer>
      <PageWrapper>
        <MainTitle  max_titleW="272px" title="dr. finance can help you with" />
        <Box >
          <Flex w="100%" overflow="hidden" overflowX="auto" justifyContent={{ base: "flex-start", md: "space-around" }}>
            {keys.map((key,idx) => (
              <HelpYouLink
                key={idx}
                active={activeLink === key}
                link={helpYouOptions[key]}
                onClick={() => setActiveLink(key)}
              />
            ))}
          </Flex>
        </Box>
        {/* <ProcessList list={helpYouOptions[activeLink].list} /> */}
        <ProcessList {...helpYouOptions[activeLink]} />
        {!!helpYouOptions[activeLink].secondary && !!helpYouOptions[activeLink].secondary.title && (
          <Box my={4}>
            <Text>{helpYouOptions[activeLink].secondary.title}</Text>
            <ProcessList
              list={helpYouOptions[activeLink].secondary.list || []}
            />
          </Box>
        )}
        <Box textAlign="center">
          <Link to={helpYouOptions[activeLink].link}>
            <Button variantColor="orange">Learn More</Button>
          </Link>
        </Box>
      </PageWrapper>
    </PageContainer>
  );
}

const HelpYouLink = ({ link, active = false, onClick }) => (
  <Flex justifyContent={{ base: "flex-state", md: "center" }} m={4} flexShrink="0">
    <Flex
      key={link.title}
      alignItems="center"
      borderBottom={active ? "2px solid" : "none"}
      borderColor="orange.300"
      cursor="pointer"
      onClick={onClick}
    >
      <Box
        as="img"
        src={!active ? link.activeImage : link.image}
        alt={link.title}
        maxW={{base: "36px"}}
        mr={1}
      />
      <Text
        fontWeight="bold"
        fontSize={{ base: "md", md: "2xl" }}
        color={active ? "orange.300" : "gray.200"}
      >
        {link.title}
      </Text>
    </Flex>
  </Flex>
);

export const PageContainer = styled(Box)`
  background: #265182;
  padding: 4em 0;
`;

export default CanHelpWithOptions;

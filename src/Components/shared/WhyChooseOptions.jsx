import React from "react";
import { Flex, Box, Text } from "@chakra-ui/core";
import styled from "@emotion/styled";

function WhyChooseOptions(props) {
  const { list = [] } = props;
  return (
    <PageContainer
      spacingY={16}
      justifyItems="space-around"
    >
      {list.map((option) => (
        <Box className="ui__choose_option" key={option.title}>
          <Box
            mb={8}
            as="img"
            mx="auto"
            maxW={{ base: "160px", md: "225px" }}
            src={option.image}
            alt={option.title}
          />
          <Text my={2} fontSize="lg" fontWeight="bold" textTransform="uppercase">
            {option.title}
          </Text>
          <Text px={{ base: 4, md: 8 }}>{option.description}</Text>
        </Box>
      ))}
    </PageContainer>
  );
}


const PageContainer = styled(Flex)`
  flex-wrap: wrap;
  justify-content: center;

  .ui__choose_option {
    width: calc(100% / 3);
    flex-shrink: 0;
    margin: 2rem 0;
  }

  @media (max-width: 768px) {
   .ui__choose_option {
      width: calc(100% / 1);
    }
  }
`


export default WhyChooseOptions;

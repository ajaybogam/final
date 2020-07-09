import React from "react";
import { Flex, Box, Text } from "@chakra-ui/core";
import styled from "@emotion/styled";

function WhyChooseOptions(props) {
  const { list = [] } = props;
  return (
    <PageContainer
      spacingY={16}
      justifyItems="space-between"
    >
      {list.map((option) => (
        <Box className="ui__choose_option" key={option.title}>
          <Box
            mb={{base:4,md:8}}
            as="img"
            mx="auto"
            maxW={{ base: "160px", md: "225px" }}
            src={option.image}
            alt={option.title}
          />
          <Box className="ui__choose_option__box" maxW={{base:"250px",md:props.maxW}} mx="auto">
            <Text className="ui__choose_option__title" my={2} fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold" textTransform="uppercase">
              {option.title}
            </Text>
            <Text className="ui__choose_option__info" fontSize={{ base: "lg", md: "xl" }} px={{ base: 1 }}
            mx="auto">{option.description}</Text>
          </Box>
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

  @media (max-width: 1024px) {

    .ui__choose_option__box {
      padding: 0 16px;
    }
    .ui__choose_option__title {
      font-size: 1.25rem;
    }
    .ui__choose_option__info {
      font-size: 1rem;
    }
  }

  @media (max-width: 768px) {
   .ui__choose_option {
      width: calc(100% / 1);
    }

    .ui__choose_option__box {
      padding: 0 8px;
    }
  }
`


export default WhyChooseOptions;

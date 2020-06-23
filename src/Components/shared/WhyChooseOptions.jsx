import React from "react";
import { SimpleGrid, Box, Text } from "@chakra-ui/core";

function WhyChooseOptions(props) {
  const { list = [] } = props;
  return (
    <SimpleGrid
      columns={{ base: 1, md: 3 }}
      spacingY={16}
      justifyItems="center"
    >
      {list.map((option) => (
        <Box key={option.title}>
          <Box
            mb={8}
            as="img"
            mx="auto"
            maxW="80%"
            src={option.image}
            alt={option.title}
          />
          <Text my={2} fontWeight="bold" textTransform="uppercase">
            {option.title}
          </Text>
          <Text px={{ base: 4, md: 8 }}>{option.description}</Text>
        </Box>
      ))}
    </SimpleGrid>
  );
}

export default WhyChooseOptions;

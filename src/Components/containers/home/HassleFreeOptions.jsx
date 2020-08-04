import React from 'react';
import PageWrapper from '../../shared/PageWrapper';
import { SimpleGrid, Text, Box } from '@chakra-ui/core';
import { hassleFreeOptions } from './options.list';

function HassleFreeOptions(props) {
    return <PageWrapper px="0">
        <SimpleGrid columns={5} className="ui__hassleOptions">
            {hassleFreeOptions.map((option, idx) =>
             <Box p={{ base: 4, md: 0 }} className="ui__hassleOptions__item" key={idx}>
                <Text fontSize={{ md: "lg" }}>{idx + 1}</Text>
                <Box mx="auto" my={{ base: 1, md: 4 }} minW={{ base: "120px" }} maxW={{ base: "80%", md: "100%" }} as="img" src={option.image} alt={option.title}></Box>
                <Text lineHeight="1" fontSize={{ base: 'lg', md: "2xl" }} mx="auto" maxW={{ base: "100%", md: "60%" }}>{option.title}</Text>
            </Box>)}
        </SimpleGrid>

        <Box opacity={0.2} mb={8}><hr /></Box>

    </PageWrapper>
}

export default HassleFreeOptions;
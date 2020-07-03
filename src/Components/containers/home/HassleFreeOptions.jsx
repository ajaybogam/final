import React from 'react';
import PageWrapper from '../../shared/PageWrapper';
import { SimpleGrid, Text, Box } from '@chakra-ui/core';
import { hassleFreeOptions } from './options.list';

function HassleFreeOptions(props) {
    return <PageWrapper>
        <SimpleGrid columns={5} className="ui__hassleOptions">
            {hassleFreeOptions.map((option, idx) => <Box className="ui__hassleOptions__item" key={idx}>
                <Text>{idx + 1}</Text>
                <Box mx="auto" my={{ base: 1, md: 4 }} maxW={{base: "80%", md: "100%"}} as="img" src={option.image} alt={option.title}></Box>
                <Text lineHeight="1" fontSize={{ base: "9px", md: "md" }} mx="auto" maxW={{ base: "100%", md: "50%" }}>{option.title}</Text>
            </Box>)}
        </SimpleGrid>

        <Box opacity={0.2} mb={8}><hr /></Box>

    </PageWrapper>
}

export default HassleFreeOptions;
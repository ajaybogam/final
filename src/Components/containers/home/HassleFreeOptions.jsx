import React from 'react';
import PageWrapper from '../../shared/PageWrapper';
import { SimpleGrid, Text, Box } from '@chakra-ui/core';
import { hassleFreeOptions } from './options.list';

function HassleFreeOptions(props) {
    return <PageWrapper>
        <SimpleGrid columns={5} className="ui__hassleOptions">
            {hassleFreeOptions.map((option, idx) => <Box className="ui__hassleOptions__item" key={idx}>
                <Text>{idx + 1}</Text>
                <Box mx="auto" my={4} as="img" src={option.image} alt={option.title}></Box>
                <Text lineHeight="1" mx="auto" maxW={{ base: "100%", md: "50%" }}>{option.title}</Text>
            </Box>)}
        </SimpleGrid>

        <Box display={{base: 'none', md: 'block'}} opacity={0.2} mb={8}><hr /></Box>

    </PageWrapper>
}

export default HassleFreeOptions;
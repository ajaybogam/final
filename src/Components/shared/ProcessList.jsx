import React from 'react';
import { SimpleGrid, Flex } from '@chakra-ui/core';

function ProcessList(props) {
    const { list = [] } = props
    return <SimpleGrid columns={{ base: 2, md: 6 }} my={16}>
        {list.map((item, idx) => <Flex
            key={idx}
            alignItems="center"
            justifyContent="center"
            mb="-1px"
            mr="-1px"
            border="1px"
            p={{ base: 8 }}>
            {item}
        </Flex>)}
    </SimpleGrid>
}

export default ProcessList;
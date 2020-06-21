import React from 'react';
import { Box } from '@chakra-ui/core';

export default function PageWrapper(props) {
    return <Box position="relative" maxWidth="1200px" width="100%" mx="auto" px={{base: 4}} {...props}>
        {props.children}
    </Box>
}
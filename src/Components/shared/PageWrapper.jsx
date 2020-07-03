import React from 'react';
import { Box } from '@chakra-ui/core';

export default function PageWrapper(props) {
    return <Box position="relative" maxWidth={{base:"100%",md:"1280px"}} width="100%" mx="auto" px={{base: 4}} {...props}>
        {props.children}
    </Box>
}
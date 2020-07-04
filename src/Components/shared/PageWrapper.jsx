import React from 'react';
import { Box } from '@chakra-ui/core';

export default function PageWrapper(props) {
    // changing maxWidth from 1280 to 1440 and px md=100px
    return <Box position="relative" maxWidth={{base:"100%",md:"1440px"}} width="100%" mx="auto" px={{base: 4,md:"100px"}} {...props}>
        {props.children}
    </Box>
}
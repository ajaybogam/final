import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/core';
import BgStar from './BgStar';
import PageWrapper from './PageWrapper';

function PageIntroView(props) {
    const { image, title, description, invert = false } = props
    return <Box zIndex="1" position="relative" py={16} bg={invert ? 'blue.400' : 'white'}>
        <PageWrapper>
            <Flex flexDirection={{ base: "column", md: "row" }} alignItems="center" minH="80vh">
                <Box flex={1} textAlign={{ base: "center", md: "left" }}>
                    <Text fontSize={{ base: "4xl", md: "6xl" }} fontWeight="bold" lineHeight="1" color={invert ? 'white' : "blue.400"}>{title}</Text>
                    <Text mt={8} fontSize={{ base: "sm", md: "xl" }} color={invert ? 'white' : "black"}>{description}</Text>
                </Box>
                <Box p={{ md: 16 }}>
                    <Box as="img" ml={{ base: 0, md: 6 }} maxW="100%" src={image} />
                </Box>
            </Flex>
        </PageWrapper>
        <BgStar stars={10} />
    </Box>
}

export default PageIntroView;
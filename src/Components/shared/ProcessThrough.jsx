import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/core';
import BgStar from './BgStar';
import PageWrapper from './PageWrapper';
import MainTitle from './MainTitle';
import WhyChooseOptions from './WhyChooseOptions';

function ProcessThrough(props) {
    const { options = [], title, description } = props
    return <Box zIndex="1" position="relative" py={16} bg="blue.400" color="white" {...props} >
        <PageWrapper>
            <Flex flexDirection={{ base: "column", md: "row" }} alignItems="center" minH="80vh">
                <Box flex={1} textAlign={{ base: "center" }} px={{ base: 4 }}>
                    <MainTitle title={title} />
                    <Text mt={8} fontSize={{ base: "md", md: "2xl" }}>{description}</Text>
                    <WhyChooseOptions list={options} />
                </Box>
            </Flex>
        </PageWrapper>
        <BgStar stars={10} />
    </Box>
}

export default ProcessThrough;
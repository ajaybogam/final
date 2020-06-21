import React from 'react';
import { Box, Flex, Button } from '@chakra-ui/core';
import BgStar from './BgStar';
import PageWrapper from './PageWrapper';
import MainTitle from './MainTitle';
import ProcessList from './ProcessList';

function PageProcessView(props) {
    const onViewMoreClick = () => {
        if (window.openApplyForm) {
            window.openApplyForm();
        }
    }
    const { list, title } = props
    return <Box zIndex="1" position="relative" py={16} {...props} >
        <PageWrapper>
            <Flex flexDirection={{ base: "column", md: "row" }} alignItems="center" minH="80vh">
                <Box flex={1} textAlign={{ base: "center" }} px={{ base: 4, md: 16 }}>
                    <MainTitle title={title} color="blue.400" />
                    <ProcessList list={list || []} />
                    <Button variantColor="orange" onClick={onViewMoreClick}>Apply now</Button>
                </Box>
            </Flex>
        </PageWrapper>
        <BgStar stars={10} />
    </Box>
}

export default PageProcessView;
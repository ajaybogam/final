import React from 'react';
import PageWrapper from '../../shared/PageWrapper';
import { SimpleGrid, Text, Box, Flex, Button } from '@chakra-ui/core';
import { helpYouOptions } from './options.list';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MainTitle from '../../shared/MainTitle';
import ProcessList from '../../shared/ProcessList';

function CanHelpWithOptions(props) {
    const keys = Object.keys(helpYouOptions);
    const [activeLink, setActiveLink] = React.useState(keys[0])

    return <PageContainer>
        <PageWrapper>
            <MainTitle title="dr. finance can help you with" />
            <SimpleGrid columns={{ base: 2, md: 4 }}>
                {keys.map(key => <HelpYouLink key={key} active={activeLink === key} link={helpYouOptions[key]} onClick={() => setActiveLink(key)} />)}
            </SimpleGrid>
            <ProcessList list={helpYouOptions[activeLink].list} />
            <Box textAlign="center">
                <Link to={helpYouOptions[activeLink].link}>
                    <Button variantColor="orange">View More</Button>
                </Link>
            </Box>
        </PageWrapper>
    </PageContainer>
}

const HelpYouLink = ({ link, active = false, onClick }) => <Flex justifyContent={{ base: "flex-state", md: "center" }} mb={4}>
    <Flex
        key={link.title}
        alignItems="center"
        borderBottom={active ? "2px solid" : "none"}
        borderColor="orange.300"
        cursor="pointer"
        onClick={onClick}>
        <Box as="img" src={!active ? link.activeImage : link.image} alt={link.title} />
        <Text fontWeight="bold" fontSize={{ base: "md", md: "2xl" }} color={active ? "orange.300" : "gray.200"}>{link.title}</Text>
    </Flex>
</Flex>

export const PageContainer = styled(Box)`
    background: #265182;
    padding: 4em 0;
`

export default CanHelpWithOptions;
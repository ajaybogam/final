import React from 'react';

import Phone from "../../Assets/Phone_Black.svg";
import Email from "../../Assets/Email_Black.svg";
import { Box, Text, Flex } from '@chakra-ui/core';

const GotAnyQuestions = (props) => {
    return <Box p={8}>
        <Text fontSize="xl" fontWeight="bold">Got any questions?</Text>
        <Flex my={4}>
            <img src={Phone} alt="Phone" />
            <Text ml={4}> +91 95814 76948</Text>
        </Flex>
        <Flex>
            <img src={Email} alt="Email" />
            <Text ml={4} >support@drfinance.in</Text>
        </Flex>
    </Box>
}

export default GotAnyQuestions;

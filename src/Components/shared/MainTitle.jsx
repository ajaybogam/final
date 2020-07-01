import React from 'react';
import { Text } from '@chakra-ui/core';

function MainTitle(props) {
    const { title = "" } = props || {};
    return <Text
        mb={{ base: 8, md: 16 }}
        fontSize={{ base: "3xl", md: props.f_size|| "5xl"  }}
        px={{base: 12, md: props.p_x||16}}
        lineHeight={1.25}
        fontWeight="bold"
        {...props}>
        {title}
    </Text>
}

export default MainTitle;
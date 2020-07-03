import React from 'react';
import { Text } from '@chakra-ui/core';

function MainTitle(props) {
    const { title = "" } = props || {};

    // max_titleW --->  title maxW in lans, investments, insurance, credit card
    //base_fontSize--->for font size in join
    // f_size --->md font size for getstartednow, join
    return <Text
        maxW={{base:props.max_titleW,md:props.w||"100%"}}
        mx={{base:"auto"}}
        mb={{ base: 8, md: 16 }}
        fontSize={{ base: props.base_fontSize||"4xl", md: props.f_size||"6xl"}}
        px={{base: 0, md: props.p_x||16}}
        lineHeight={1.25}
        fontWeight="bold"
        {...props}>
        {title}
    </Text>
}

export default MainTitle;
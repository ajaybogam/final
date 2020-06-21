import React from 'react';
import Star from "../../Assets/Star.svg";
import { Box } from '@chakra-ui/core';
import HelperUtils from '../../utils/helpers';

export default function BgStar({ stars = 1 }) {

    return <Box
        position="absolute"
        w="100%"
        h="100%"
        left="0"
        top="0"
        zIndex="-1"
        overflow="hidden"
        className="ui__stars">
        {getRandomPosition(stars).map((elementProps, idx) => <Box as="img" {...elementProps} alt="Star" key={idx} src={Star} />)}
    </Box>
}

const getRandomPosition = (count = 1) => {
    return (new Array(count || 1)).fill(1).map(item => {
        const left = HelperUtils.randomIntFromInterval(0, 90) + "%";
        const top = HelperUtils.randomIntFromInterval(0, 90) + "%";
        const w = HelperUtils.randomIntFromInterval(20, 50) + "px";
        return {
            left, top, w, position: "absolute", opacity: Math.random()
        }
    })
}


import React from 'react';
import ApplyForProduct from './ApplyForProduct';
import { Flex, Box, useTheme, useDisclosure } from '@chakra-ui/core';
import { Link, useLocation } from 'react-router-dom';

import logo from "../../Assets/Logo.svg";
import referral from "../../Assets/Referral Partner_Default.svg";
import MobileNavigation from './MobileNavigation';


export const navigation = [
    { title: "Loans", link: "/loans" },
    { title: "Investments", link: "/investments" },
    { title: "Insurance", link: "/insurance" },
    { title: "Credit Cards", link: "/creditcards" },
];

const TopHeader = (props) => {
    const [windowSize, setWindowSize] = React.useState(window.innerWidth);
    let location = useLocation();
    const [currentPage, setCurrentPage] = React.useState(location.pathname);
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [shadow, setShadow] = React.useState();

    const activeColor = "orange.400";


    React.useEffect(() => {
        window.addEventListener("scroll", event => {
            setShadow(window.pageYOffset > 80 ? "md" : "")
        })

        window.addEventListener("resize", event => {
            setShadow(window.innerWidth)
            console.log(window.innerWidth)
        })

        window.openApplyForm = onOpen;

        return () => {
            window.removeEventListener("scroll")
            window.removeEventListener("resize")
        }

    }, []);

    React.useEffect(() => {
        setCurrentPage(location.pathname);
        window.scrollTo(0, 0);
    }, [location]);


    return <Flex as="header" position="sticky" top={0} zIndex={9} bg="white" boxShadow={shadow} p={[2, 2, 4]} px={[2, 2, 6]}>
        {windowSize <= 480 && <MobileNavigation onApply={onOpen} />}
        <Box as={Link} to="/" ml={[2, 2, 0, 0]} mr="auto" ><img src={logo} alt="logo" /></Box>
        {windowSize <= 480 ? <Box ml={2}>
            <ApplyForProduct isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
        </Box> : <Flex ml="auto" alignItems="center">
                {navigation.map((menu, idx) => (<Box
                    color={currentPage === menu.link ? activeColor : ""}
                    as={Link}
                    ml={4}
                    fontWeight="bold"
                    key={menu.link}
                    to={menu.link}>
                    {menu.title}
                </Box>
                ))}
                <Box px={4} mx={4} border="2px solid" borderTop="0" borderBottom="0" borderColor="gray.200">
                    <ApplyForProduct isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
                </Box>
                <JoinAsReferral currentPage={currentPage} activeColor={activeColor} />
            </Flex>}
    </Flex>
}

export const JoinAsReferral = (props) => {
    const { currentPage, activeColor, color, img } = props || {}
    return <Flex alignItems="center" as={Link} Link to="/joinasreferral" {...props}>
        <img src={img || referral} alt="Referral" />
        <Box ml={1} lineHeight={1}>
            <Box m={0} fontWeight="bold" color={currentPage === "/joinasreferral" ? activeColor : !!color ? color : ""} >Join</Box>
            <Box color={!!color ? color : "gray.500"} fontWeight="normal" fontSize="sm">as referral partners</Box>
        </Box>
    </Flex>
}

export default TopHeader;
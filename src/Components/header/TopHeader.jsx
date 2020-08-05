import React from "react";
import ApplyForProduct from "./ApplyForProduct";
import { Flex, Box, useDisclosure } from "@chakra-ui/core";
import { Link, useLocation } from "react-router-dom";

import logo from "../../Assets/Logo.svg";
import referral from "../../Assets/Referral Partner_Default.svg";
import ActiveReferral from "../../Assets/Referral Partner_Selected.svg";
import MobileNavigation from "./MobileNavigation";
import styled from "styled-components";

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
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [shadow, setShadow] = React.useState();

  const activeColor = "orange.500";

  const onResize = (event) => {
    setWindowSize(window.innerWidth);
  };

  const onScroll = (event) => {
    setShadow(window.pageYOffset > 80 ? "md" : "");
  };

  React.useEffect(() => {
    window.addEventListener("scroll", onScroll);

    window.addEventListener("resize", onResize);

    window.openApplyForm = onOpen;

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [onOpen]);

  React.useEffect(() => {
    setCurrentPage(location.pathname);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <HeaderBar
      position="sticky"
      top={0}
      zIndex={9}
      bg="white"
      boxShadow={shadow}
      alignItems="center"
    >
      {windowSize <= 480 && <MobileNavigation onApply={onOpen} />}
      <Box as={Link} to="/" ml={[2, 2, 0, 0]} mr="auto">
        <Box as="img" src={logo} alt="logo" maxW={{ base: "160px", md: "196px" }} />
      </Box>
      {windowSize <= 480 ? (
        <Box ml={2}>
          <ApplyForProduct isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
        </Box>
      ) : (
          <Flex ml="auto" alignItems="center">
            {navigation.map((menu, idx) => (
              <Box
                color={currentPage === menu.link ? activeColor : ""}
                borderBottom={currentPage === menu.link ? "2px" : ""}
                as={Link}
                ml={8}
                fontWeight="bold"
                key={menu.link}
                to={menu.link}
                fontSize="md"
                whiteSpace="pre"
              >
                {menu.title}
              </Box>
            ))}
            <Box
              px={{sm:2, lg: 4}}
              mx={4}
              border="2px solid"
              borderTop="0"
              borderBottom="0"
              borderColor="gray.200"
            >
              <ApplyForProduct
                isOpen={isOpen}
                onOpen={onOpen}
                onClose={onClose}

              />
            </Box>
            <JoinAsReferral toggle={true} currentPage={currentPage} activeColor={activeColor} />
          </Flex>
        )}
    </HeaderBar>
  );
};

export const JoinAsReferral = (props) => {
  let { currentPage, activeColor, color, img, toggle = false } = props || {};
  if (toggle) {
    img = currentPage === "/joinasreferral" ? ActiveReferral : referral
  } else {
    img = img || referral;
  }

  return (
    <Flex alignItems="center" as={Link} Link to="/joinasreferral" {...props}>
      <img src={img} alt="Referral" />
      <Box ml={2} lineHeight={1}>
        <Box
          m={0}
          fontWeight="bold"
          color={
            currentPage === "/joinasreferral"
              ? activeColor
              : !!color
                ? color
                : ""
          }
        >
          Join
        </Box>
        <Box
          color={!!color ? color : "gray.500"}
          fontWeight="normal"
          fontSize="sm"
          // width={{md:"100px",lg:'100%'}}
          // minW="100px"
        >
          as referral partners
        </Box>
      </Box>
    </Flex>
  );
};

const HeaderBar = styled(Flex)`
  padding: .75em 1.5em;

  @media screen and (max-width: 480px) {
    padding: 12px 1em;
  }
`

export default TopHeader;

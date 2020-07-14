import React from "react";

import { Flex, Box, Text } from "@chakra-ui/core";
import { Link } from "react-router-dom";
import PhoneImage from "../Assets/Phone_White.svg";
import EmailImage from "../Assets/Email_White.svg";
import copyright from "../Assets/Copyright.svg";
import Footerform from "./FooterForm";
import PageWrapper from "./shared/PageWrapper";
function FooterUpdate() {
  const quickLinks = [
    { title: "Home", link: "/" },
    { title: "About Dr.Finance", link: "/about" },
    { title: "Join as Referral Partner", link: "/joinasreferral" },
    { title: "Contact", link: "/contact" },
    { title: "Terms and Conditions", link: "/termsandconditions" },
    { title: "Privacy Policy", link: "/privacypolicy" },
    { title: "FAQs", link: "/faqs" },
  ];
  const product = [
    { title: "Loans", link: "/loans" },
    { title: "Investments", link: "/investments" },
    { title: "Insurance", link: "/insurance" },
    { title: "Credit Cards", link: "/creditcards" },
  ];
  const head = [{ title: "QUICK LINKS" }, { title: "PRODUCT" }];

  return (
    <Box  bg="blue.700"
    color="white">
    <PageWrapper>
    <Flex
      pb={20}
      justifyContent="space-between"
      pt={20}
      flexDir={{ base: "column-reverse", md: "row" }}
    >
      <Box display={{ base: "none", md: "block" }}>
        <TitleView title="QUICK LINKS" />
        {quickLinks.map((data, idx) => (
          <Flex
            as={Link}
            // fontWeight="bold"
            key={data.link}
            to={data.link}
            fontSize="sm"
            mb={6}
          >
            {data.title}
          </Flex>
        ))}
        <Flex mt={16}>
          <Box as="img" mr={2} src={copyright} />
          <Box fontSize="md" fontWeight="300">
            2020 Dr. Finance
          </Box>
        </Flex>
      </Box>
      <Box display={{ base: "none", md: "inline" }}>
        <TitleView title="PRODUCTS" />
        {product.map((data, idx) => (
          <Flex
            as={Link}
            // fontWeight="bold"
            key={data.link}
            to={data.link}
            fontSize="sm"
            mb={6}
          >
            {data.title}
          </Flex>
        ))}
      </Box>
      <Box p={{ base: "24px", md: "0" }}>
        <TitleView title="Get in Touch" />

        <Flex fontSize="sm" mb={6}>
          <Box as="img" mr={2} src={PhoneImage} />
          <Box>+91 95814 76948</Box>
        </Flex>
        <Flex>
          <Box as="img" mr={2} src={EmailImage} />
          <Box>support@drfinance.in</Box>
        </Flex>
        <Flex
          display={{ base: "flex", md: "none" }}
          mt={{ base: "40px", md: "0" }}
        >
          <Box as="img" mr={2} src={copyright} />
          <Box fontSize="md" fontWeight='300' color="rgba(208,208,208,1)">
            2020 Dr. Finance
          </Box>
        </Flex>
      </Box>
      <Box
        border={{ base: "none", md: "1px solid rgba(255,255,255,.3)" }}
        rounded="8px"
        p={{ base: "0", md: "3%" }}
        px={{ base: "24px", md: "3%" }}
        maxW="392px"
      >
        <Footerform />
      </Box>
    </Flex></PageWrapper></Box>
  );
}
const TitleView = ({ title }) => (
  <Text fontWeight="bold" fontSize="md" textTransform="uppercase" mb={4}>
    {title}
  </Text>
);
export default FooterUpdate;

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
    { title: "About  dr.finance", link: "/about" },
    { title: "Join as Referral Partner", link: "/joinasreferral" },
    { title: "Contact Us", link: "/contact" },
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
  return (
    <Box bg="blue.700" color="white">
      <PageWrapper px={{ base: 4, md: 4, lg: 16 }}>
        <Flex py={{ base: 10, md: 20 }}
          align={{ base: "center", md: 'flex-start' }}
          justifyContent={{ base: "center", md: "space-between" }}
          flexDir={{ base: "column-reverse", md: "row" }}
          text-align={{ base: "center", lg: "flex-start" }}>
          <Flex d="column" justifyContent={{ base: "center", md: "space-between" }} w="60%">
            <Flex justifyContent={{ base: "center", md: "space-between" }}>
              <Box display={{ base: "none", md: "block" }}>
                <TitleView title="QUICK LINKS" />
                {quickLinks.map((data, idx) => (
                  <Flex
                    as={Link}
                    key={data.link}
                    to={data.link}
                    fontSize="sm"
                    mb={6}
                  >
                    {data.title}
                  </Flex>
                ))}
              </Box>
              <Box display={{ base: "none", md: "inline" }}>
                <TitleView title="PRODUCTS" />
                {product.map((data, idx) => (
                  <Flex
                    as={Link}
                    key={data.link}
                    to={data.link}
                    fontSize="sm"
                    mb={6}
                  >
                    {data.title}
                  </Flex>
                ))}
              </Box>
              <Box py={{ base: "4", md: "0" }} display={{ base: "none", md: "inline" }}>
                <TitleView title="Get in Touch" />

                <Flex fontSize="sm" mb={6}>
                  <Box as="img" mr={2} src={PhoneImage} />
                  <Box>+91 95814 76948</Box>
                </Flex>
                <Flex>
                  <Box as="img" mr={2} src={EmailImage} />
                  <Box>support@dr-finance.in</Box>
                </Flex>
                {/* <Box
                  display={{ base: "flex", md: "none" }}
                  mt={{ base: 4, md: "0" }}
                  justifyContent="flex-start"
                >
                  <Box as="img" mr={2} src={copyright} />
                  <Box fontSize="md" fontWeight="300" color="rgba(208,208,208,1)" >
                    2020 Swadishaa Financial services Pvt Ltd
                  </Box>
                </Box> */}
              </Box>
            </Flex>
            <Flex mt={12} display={{ base: 'none', md: 'flex' }}>
              <Box as="img" mr={2} src={copyright} />
              <Box fontSize="md" fontWeight="300">
                2020 Swadishaa Financial services Pvt Ltd
              </Box>
            </Flex>
          </Flex>

          <Box
            border={{ base: "none", md: "1px solid rgba(255,255,255,.3)" }}
            rounded="8px"
            p={{ base: "0", md: "3%" }}
            px={{ base: "24px", md: "3%" }}
            maxW="392px"
          >
            <Footerform />

          </Box>
        </Flex>
      </PageWrapper>

    </Box>
  );
}






const TitleView = ({ title }) => (
  <Text fontWeight="bold" fontSize="md" textTransform="uppercase" mb={4}>
    {title}
  </Text>
);
export default FooterUpdate;

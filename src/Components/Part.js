import React from "react";
import "../css/Part.css";
import AppStore from "../Assets/App Store.svg";
import PlayStore from "../Assets/Google Play.svg";
import AddLead from "../Assets/Add Leads.svg";
import Track from "../Assets/Track.svg";
import Payout from "../Assets/Payouts.svg";
import { Link } from "react-router-dom";
import LearnMore from "../Assets/Learn More Arrow.svg";
import "../css/Stars.css";
import MainTitle from "./shared/MainTitle";
import { Text, Flex, Box } from "@chakra-ui/core";
import PageWrapper from "./shared/PageWrapper";
import BgStar from "./shared/BgStar";
import largeimg from "../Assets/Large.png";
const list = [
  {
    title: "Add Referrals",
    image: AddLead,
    description: "Send your leads to dr.finance",
  },
  {
    title: "Track Progress",
    image: Track,
    description: "Get constant updates at every stage",
  },
  {
    title: "Get Payouts",
    image: Payout,
    description: "Withdraw the money that you earned",
  },
];

function Part() {
  return (
    <Box
      position="relative"
      zIndex="1"
      py={16}
      pb={0}
      borderTop="1px solid rgba(0,0,0,.1)"
    >
      <PageWrapper textAlign={{ base: "center", md: "left" }}>
        <MainTitle
          title="want to be a part of dr.finance?"
          color="red.300"
          f_size="5xl"
          mb={1}
          px={0}
        />
        <Text fontSize={{ base: "xl", md: "3xl" }}>
          Join as referral partner now!
        </Text>
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          alignItems={{ base: "center", md: "stretch" }}
        >
          <Box flex="1" my={{ base: 4, md: 16 }} maxW="100%">
            <Flex justifyContent maxW="100%" overflow="hidden" overflowX="auto">
              {list.map(({ title, image, description }, idx) => (
                <Box
                  key={idx}
                  mt={12}
                  textAlign="center"
                  flexShrink="0"
                  mr={idx < 2 ? 16 : 0}
                >
                  <Box
                    as="img"
                    height="70px"
                    src={image}
                    mx={{ base: "auto" }}
                  ></Box>
                  <Text fontWeight="bold" color="red.300" mt={4} fontSize="xl">
                    {title}
                  </Text>
                  <Text
                    maxW={idx === 0 ? "150px" : "160px"}
                    mx={{ base: "auto" }}
                  >
                    {description}
                  </Text>
                </Box>
              ))}
            </Flex>

            <Flex
              as={Link}
              alignItems="center"
              to="/joinasreferral"
              mt={{ base: 10, md: 24 }}
              mb={8}
              justifyContent={{ base: "center", md: "flex-start" }}
            >
              <Text mr={2} color="blue.400" fontSize="xl">
                Learn More
              </Text>
              <Box as="img" src={LearnMore} />
            </Flex>

            <Flex
              alignItems="center"
              justifyContent={{ base: "space-around", md: "start" }}
              mb={{ base: 10, md: "none" }}
            >
              <Box as="img" src={PlayStore}></Box>
              <Box as="img" ml={4} src={AppStore}></Box>
            </Flex>
          </Box>
          <Box as="img" src={largeimg} ml={{ base: 0, md: 2 }}></Box>
        </Flex>
      </PageWrapper>
      <BgStar stars={10} />
    </Box>
  );
}

export default Part;

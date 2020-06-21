import React from "react";
import "../css/Part.css";
import Main from "../Assets/Main.svg";
import AppStore from "../Assets/App Store.svg";
import PlayStore from "../Assets/Google Play.svg";
import AddLead from "../Assets/Add Leads.svg";
import Track from "../Assets/Track.svg";
import Payout from "../Assets/Payouts.svg";
import { Link } from "react-router-dom";
import LearnMore from "../Assets/Learn More Arrow.svg";
import "../css/Stars.css";
import Star from "../Assets/Star.svg";
import MainTitle from "./shared/MainTitle";
import { Text, Flex, Box, SimpleGrid } from "@chakra-ui/core";
import PageWrapper from "./shared/PageWrapper";
import BgStar from "./shared/BgStar";

const list = [
  { title: 'Add Referrals', image: AddLead, description: 'Send your leads to Dr Finance' },
  { title: 'Track Progress', image: Track, description: 'Get constant updates at every stage' },
  { title: 'Get Payouts', image: Payout, description: 'Withdraw the money that you earned' },
]

function Part() {
  return (
    <Box position="relative" zIndex="1" py={16} pb={0} borderTop="1px solid rgba(0,0,0,.1)">
      <PageWrapper textAlign={{ base: 'center', md: "left" }}>
        <MainTitle title="want to be a part of dr. finance?" color="red.300" mb={1} />
        <Text fontSize="2xl">Join as referral partner now!</Text>
        <Flex flexDirection={{ base: "column", md: "row" }} alignItems={{base: "center", md: "stretch"}}>
          <Box flex="1" my={{ base: 4, md: 16 }}>
            <SimpleGrid columns={{ base: 1, md: 3 }}>
              {list.map(({ title, image, description }, idx) => <Box key={idx} mt={12}>
                <Box as="img" height="70px" src={image} mx={{ base: "auto", md: 0 }}></Box>
                <Text fontWeight="bold" color="red.300" mt={4} fontSize="2xl">{title}</Text>
                <Text maxW="160px" mx={{ base: "auto", md: 0 }}>{description}</Text>
              </Box>)}
            </SimpleGrid>

            <Flex as={Link} alignItems="center" to="/joinasreferral" mt={8} mb={2} justifyContent={{base: "center", md: "flex-start"}}>
              <Text mr={2} color="blue.400" fontSize="2xl">Learn More</Text>
              <Box as="img" src={LearnMore} />
            </Flex>

            <Flex>
              <Box as="img" src={PlayStore}></Box>
              <Box as="img" ml={4} src={AppStore}></Box>
            </Flex>


          </Box>
          <Box as="img" src={Main} ml={{ base: 0, md: 6 }}></Box>
        </Flex>
      </PageWrapper>
      <BgStar stars={16} />
    </Box>
  );
}

export default Part;

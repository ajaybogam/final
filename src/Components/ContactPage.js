import React from "react";
import { Box, Flex, Text, Stack } from "@chakra-ui/core";
import PageWrapper from "./shared/PageWrapper";
import BgStar from "./shared/BgStar";

import PhoneBig from "../Assets/Phone_Big.svg";
import EmailBig from "../Assets/Email_Big.svg";
import Location from "../Assets/Location.svg";
import Pin from "../Assets/Pin.svg";

class ContactPage extends React.Component {

  render() {
    return <React.Fragment>
      <Box zIndex="1" position="relative" py={16}>
        <PageWrapper>
          <Flex flexDirection={{ base: "column", md: "row" }} alignItems="center" minH="80vh">
            <Box flex={1}>
              <Text fontSize={{ base: "4xl", md: "6xl" }} color="blue.400" fontWeight="bold" lineHeight="1">{"Contact Us"}</Text>
              <Stack spacing={8} mt={16}>
                <Flex alignItems="center" >
                  <Box as="img" src={PhoneBig} />
                  <Text fontSize="2xl" ml={4}>+91 95814 76948</Text>
                </Flex>
                <Flex alignItems="center" >
                  <Box as="img" src={EmailBig} />
                  <Text fontSize="2xl" ml={4}>support@drfinance.com</Text>
                </Flex>
                <Flex alignItems="center" >
                  <Box as="img" src={Location} />
                  <Text fontSize="2xl" ml={4}>Door No. 2, 2-186/18/6, Ramakrishna Nagar, Amberpet, Hyderabad, Telangana 500013</Text>
                </Flex>
              </Stack>
            </Box>
            <Box p={{ base: 8, md: 16 }} flex={1} position="relative">
              <Box as="iframe"
                width="100%"
                height="60vh"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=%20Door%20No.%202%2C%202-186%2F18%2F6%2C%20Ramakrishna%20Nagar%2C%20Amberpet%2C%20Hyderabad%2C%20Telangana%20500013%20&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
              ></Box>
              <Box as="img" src={Pin} position="absolute" left="50%" top="50%" transform="translateX(-50%) translateY(-75%)" />
            </Box>
          </Flex>
        </PageWrapper>
        <BgStar stars={10} />
      </Box>
    </React.Fragment>;
  }
}

export default ContactPage;

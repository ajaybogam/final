import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  Button,
  Flex,
  Text,
  Box,
  Stack,
} from "@chakra-ui/core";
import { useDisclosure } from "@chakra-ui/core";
import hamburger from "../../Assets/Hamburger.svg";
import { useLocation, Link } from "react-router-dom";
import { JoinAsReferral, navigation } from "./TopHeader";

import EmailImage from "../../mobile/Email.svg";
import PhoneImage from "../../mobile/Phone.svg";
import JoinAsReferralImage from "../../mobile/Lead Gen.svg";
import ApplyForProduct from "./ApplyForProduct";
import Close_blue from "../../mobile/Close_Blue.svg";

const quickLinks = [
  { title: "Home", link: "/" },
  { title: "About Dr. Finance", link: "/about" },
  { title: "Join as Referral Partner", link: "/joinasreferral" },
  { title: "Contact", link: "/contact" },
  { title: "Terms and Conditions", link: "/termsandconditions" },
  { title: "Privacy Policy", link: "/privacypolicy" },
  { title: "FAQs", link: "/faqs" },
];
// >>>>>>> aa70cad64b9cd484eb79f485f627dd8ef3afb2d5

const MobileNavigation = (props) => {
  let location = useLocation();
  const [currentPage, setCurrentPage] = React.useState(location.pathname);
  const { isOpen, onOpen, onClose } = useDisclosure();

  React.useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location]);

  const onApply = () => {
    onClose();
    props.onApply();
  };

  return (
    <React.Fragment>
      <Box as="img" mr={2} src={hamburger} onClick={onOpen} alt="Menu" />
      <Drawer isOpen={isOpen} placement="left" onClose={onClose} size="full">
        <DrawerOverlay />
        <DrawerContent bg="#265182" overflowY="auto">
          <DrawerHeader>
            <Flex>
              <img src={Close_blue} alt="close" onClick={onClose} />
              <Button onClick={onApply} variantColor="orange" ml="auto">
                Apply{" "}
              </Button>
            </Flex>
          </DrawerHeader>

          <DrawerBody color="white" fontSize=".9rem">
            <Box mb={6}>
              <JoinAsReferral
                img={JoinAsReferralImage}
                fontSize="1rem"
                color="white"
              />
            </Box>
            <hr />
            <Box my={6}>
              <TitleView title="Products" />
              <Stack spacing={4} as="nav" flexDirection="column">
                {navigation.map((menu, idx) => (
                  <Box
                    color="white"
                    as={Link}
                    // fontWeight="bold"
                    key={menu.link}
                    to={menu.link}
                  >
                    {menu.title}
                  </Box>
                ))}
              </Stack>
            </Box>

            <hr />
            <Box my={6}>
              <TitleView title="Get in Touch" />
              <Stack spacing={4} as="nav" flexDirection="column">
                <Flex>
                  <Box as="img" mr={2} src={PhoneImage} />
                  <Box>+91 95814 76948</Box>
                </Flex>
                <Flex>
                  <Box as="img" mr={2} src={EmailImage} />
                  <Box>support@drfinance.in</Box>
                </Flex>
              </Stack>
            </Box>

            <hr />
            <Box my={6}>
              <TitleView title="Quick Links?" />
              <Stack spacing={4} as="nav" flexDirection="column">
                {quickLinks.map((menu, idx) => (
                  <Box
                    color="white"
                    as={Link}
                    // fontWeight="bold"
                    key={menu.link}
                    to={menu.link}
                  >
                    {menu.title}
                  </Box>
                ))}
              </Stack>
            </Box>
          </DrawerBody>
        

          <DrawerFooter>
            {/* <Button variant="outline" mr={3} onClick={onClose}>Cancel</Button>
                    <Button color="blue">Save</Button> */}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </React.Fragment>
  );
};

const TitleView = ({ title }) => (
  <Text fontWeight="bold" fontSize="1rem" textTransform="uppercase" my={4}>
    {title}
  </Text>
);

export default MobileNavigation;

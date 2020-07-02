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

const quickLinks = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
  { title: "Join as referral", link: "/joinasreferral" },
  { title: "Contact", link: "/contact" },
  { title: "Terms and conditions", link: "/termsandconditions" },
  { title: "Privacy Policy", link: "/privacypolicy" },
  { title: "FAQs", link: "/faqs" },
];

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
      <img src={hamburger} onClick={onOpen} alt="Menu" />
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="blue.700" overflowY="auto">
          <DrawerHeader>
            <Flex>
              <Button onClick={onApply} variantColor="orange" ml="auto">
                Apply{" "}
              </Button>
              <DrawerCloseButton fontSize="xl" left={4} top={2} color="white" />
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
                    fontWeight="bold"
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
              <TitleView title="Got any questions?" />
              <Stack spacing={4} as="nav" flexDirection="column">
                <Flex>
                  <Box as="img" mr={2} src={PhoneImage} />
                  <div>+91 95814 76948</div>
                </Flex>
                <Flex>
                  <Box as="img" mr={2} src={EmailImage} />
                  <div>support@drfinance.com</div>
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
                    fontWeight="bold"
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

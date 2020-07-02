import React from "react";
import { Box, Flex, Button, Text } from "@chakra-ui/core";
import BgStar from "./BgStar";
import PageWrapper from "./PageWrapper";
import MainTitle from "./MainTitle";
import ProcessList from "./ProcessList";

function PageProcessView(props) {
  const MOBILE_WIDTH = 560;
  const [isMobile, setIsMobile] = React.useState(
    window.innerWidth <= MOBILE_WIDTH
  );
  const onResize = (event) => {
    setIsMobile(window.innerWidth <= MOBILE_WIDTH);
  };
  React.useEffect(() => {
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);
  const onViewMoreClick = () => {
    if (window.openApplyForm) {
      window.openApplyForm();
    }
  };
  const { list, title, secondary = {} } = props;

  return (
    <Box zIndex="1" position="relative" py={0} {...props} my={{base:20,md:0}}>
      <PageWrapper>
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          alignItems="center"
          minH="80vh"
        >
          <Box flex={1} textAlign={{ base: "center" }} px={{ base: 4, md: 16 }}>
            <MainTitle title={title} color="blue.400" />
            <ProcessList list={list || []} isMobileView={isMobile} />
            {!!secondary && !!secondary.title && (
              <Box my={4}>
                <Text>{secondary.title}</Text>
                <ProcessList
                  list={secondary.list || []}
                  isMobileView={isMobile}
                />
              </Box>
            )}
            <Button variantColor="orange" onClick={onViewMoreClick}>
              Apply now
            </Button>
          </Box>
        </Flex>
      </PageWrapper>
      <BgStar stars={10} />
    </Box>
  );
}

export default PageProcessView;

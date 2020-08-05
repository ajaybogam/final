import React, { Component } from "react";
import "../css/Faqs.css";
import {
  Box,
  Flex,
  Text,
  Divider,
  Collapse
} from "@chakra-ui/core";
import BgStar from "../Components/shared/BgStar";
import ApiServices from "../../src/services/product.services";
import Faqs_up from "../Assets/FAQ Up Arrow.svg";
import Faqs_down from "../Assets/FAQ Down Arrow.svg";
export class Faqs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      activeFaq: 0,
    };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    ApiServices.faqs()
      .then((response) => {
        console.log(response.data[0]["data"]);
        this.setState({
          posts: response.data[0]["data"],
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  setCurrentFaq = (activeFaq) => {
    this.setState({
      activeFaq: this.state.activeFaq === activeFaq ? 0 : activeFaq,
    });
  };
  render() {
    const { posts, expand, activeFaq } = this.state;
    return (
      <Box>
        <Flex px={{ base: "10", md: "24" }} pt={32} direction="column">
          <Text
            textAlign={{ base: "center", md: "start" }}
            fontSize="6xl"
            fontWeight="700"
            color="#1E9ED2"
            mb={4}
          >
            FAQs
          </Text>
          <BgStar stars={10} />
          {posts.map((post, idx) => (
            <Box key={idx}>
              <Flex alignItems="baseline">
                <img src={activeFaq === idx ? Faqs_up : Faqs_down} alt="" />
                <Text
                  cursor="pointer"
                  fontSize="2xl"
                  onClick={() => this.setCurrentFaq(idx)}
                  pb={6}
                  ml={4}
                  fontWeight="600"
                  color={activeFaq === idx ? "#1E9ED2" : "black"}
                >
                  {post.title}
                </Text>
              </Flex>

              <Collapse isOpen={activeFaq === idx} ml={10}>
                {post.content}
              </Collapse>
              <Divider borderBottom="2px solid #D0D0D0" my={8} />
            </Box>
          ))}
        </Flex>
      </Box>
    );
  }
}

export default Faqs;

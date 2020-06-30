import React, { Component } from "react";
import "../css/Faqs.css";
import {
  Box,
  Flex,
  Text,
  Divider,
  Collapse,
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/core";
import BgStar from "../Components/shared/BgStar";
import Collapsible from "react-collapsible";
import ApiServices from "../../src/services/product.services";

export class Faqs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      activeFaq: -1,
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
      activeFaq: this.state.activeFaq === activeFaq ? -1 : activeFaq,
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
          >
            FAQs
          </Text>
          <BgStar stars={10} />
          {posts.map((post, idx) => (
            <Box key={idx}>
              <Text
                cursor="pointer"
                fontSize="2xl"
                onClick={() => this.setCurrentFaq(idx)}
                py={6}
                fontWeight="700"
                color="#1E9ED2"
              >
                {post.title}
              </Text>
              <Collapse isOpen={activeFaq === idx}>{post.content}</Collapse>
              <Divider border="1px solid #D0D0D0" />
            </Box>
          ))}
        </Flex>
      </Box>
      // <div>
      //   <div>
      //     <div>
      //       <div className="faqs">FAQs</div>
      //       <div className="faqsLists">
      //         {posts.length
      //           ? posts.map((post) => (
      //               <div key={post.id}>
      //                 <Collapsible
      //                   trigger={post.title}
      //                   className="faqTitle"
      //                   openedClassName="faqTitle"
      //                   transitionTime="150"
      //                 >
      //                   <div className="faqContent">{post.content}</div>
      //                 </Collapsible>
      //                 <div className="faqDivider"></div>
      //                 {/* <div className="faqTitle">{post.title}</div>
      //                 <div className="faqContent">{post.content}</div>
      //                 <div className="faqDivider"></div> */}
      //               </div>
      //             ))
      //           : null}
      //       </div>
      //     </div>
      //   </div>
      // </div>
    );
  }
}

export default Faqs;

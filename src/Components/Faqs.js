import React, { Component } from "react";
 
import Footer from "../Components/Footer";
import "../css/Faqs.css";
import axios from "axios";
import Collapsible from "react-collapsible";

export class Faqs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    axios
      .get("http://52.73.189.181/webfaqs")
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
  render() {
    const { posts, expand } = this.state;
    return (
      <div>
        <div>
          <div>
            <div className="faqs">FAQs</div>
            <div className="faqsLists">
              {posts.length
                ? posts.map((post) => (
                    <div key={post.id}>
                      <Collapsible
                        trigger={post.title}
                        className="faqTitle"
                        openedClassName="faqTitle"
                        transitionTime="150"
                      >
                        <div className="faqContent">{post.content}</div>
                      </Collapsible>
                      <div className="faqDivider"></div>
                      {/* <div className="faqTitle">{post.title}</div>
                      <div className="faqContent">{post.content}</div>
                      <div className="faqDivider"></div> */}
                    </div>
                  ))
                : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Faqs;

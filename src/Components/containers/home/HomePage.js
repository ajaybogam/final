import React from "react";
import HomeIntro from "./HomeIntro";
import HomeHassleFree from "./HomeHassleFree";
import Choose from "../../Choose";
import Part from "../../Part";
import Partners from "./Partners";

class HomePage extends React.Component {
 
  render() {
    return (
      <div>
        <HomeIntro />
        <Choose />
        <HomeHassleFree />
        <Partners />
        <Part />
      </div>
    );
  }
}

export default HomePage;

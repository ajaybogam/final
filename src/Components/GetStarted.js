import React from "react";
import AppStore from "../Assets/App Store.svg";
import PlayStore from "../Assets/Google Play.svg";
import "../css/Stars.css";
import Star from "../Assets/Star.svg";
import "../css/GetStarted.css";

function GetStarted() {
  return (
    <div>
      <div className="getStarted">
        <img src={Star} className="star25"></img>
        <div className="getTitle">Get Started Now!</div>
        <div className="getSub">Download the app</div>
        <img src={Star} className="star26"></img>
        <div className="getLogo">
          <img src={PlayStore} style={{ paddingRight: "30px" }}></img>
          <img src={AppStore}></img>
        </div>
      </div>
    </div>
  );
}

export default GetStarted;

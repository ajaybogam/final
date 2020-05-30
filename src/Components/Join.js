import React from "react";
import AppStore from "../Assets/App Store.svg";
import PlayStore from "../Assets/Google Play.svg";
import Main from "../Assets/Main.svg";
import "../css/Join.css";
import "../css/Stars.css";
import Star from "../Assets/Star.svg";

function Join() {
  return (
    <div>
      <div className="Join">
        <div>
          <img src={Star} className="star15"></img>
          <img src={Star} className="star16"></img>
          <div className="joinTitle">Join us as a referral partner now</div>
          <div className="joinSub">
            Download the referral tracking app, send us your referrals and get
            paid for them
          </div>
          <img src={Star} className="star18"></img>
          <div className="joinLogo">
            <img src={PlayStore} style={{ paddingRight: "15px" }}></img>
            <img src={AppStore}></img>
          </div>
          <img src={Star} className="star17"></img>
        </div>
        <img src={Main}></img>
      </div>
    </div>
  );
}

export default Join;

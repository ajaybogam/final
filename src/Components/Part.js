import React from "react";
import "../css/Part.css";
import Main from "../Assets/Main.svg";
import AppStore from "../Assets/App Store.svg";
import PlayStore from "../Assets/Google Play.svg";
import AddLead from "../Assets/Add Leads.svg";
import Track from "../Assets/Track.svg";
import Payout from "../Assets/Payouts.svg";
import { Link } from "react-router-dom";
import LearnMore from "../Assets/Learn More Arrow.svg";
import "../css/Stars.css";
import Star from "../Assets/Star.svg";

function Part() {
  return (
    <div>
      <div className="part">
        <div className="partTitles">want to be a part of dr. finance?</div>
        <div className="partSub">Join as referral partner now!</div>
        <img src={Star} className="star12"></img>
        <img src={Star} className="star13"></img>
        <div className="partMenu">
          <div className="partMenu1">
            <div className='partRow-scroll'>
            <div className="partRow">
              <div className="partRow1">
                <img  className='part-img'src={AddLead}></img>
                <div className="partRowt">Add Referrals</div>
                <div className="partRows">Send your leads to Dr Finance</div>
              </div>
              <div className="partRow1">
                <img className='part-img' src={Track}></img>
                <div className="partRowt">Track Progress</div>
                <div className="partRows">
                  Get constant updates at every stage
                </div>
              </div>
              <div className="partRow1">
                <img  className='part-img' src={Payout}></img>
                <div className="partRowt">Get Payouts</div>
                <div className="partRows">
                  Withdraw the money that you earned
                </div>
              </div>
            </div>
            </div>
            <div>
              <Link
                to="/joinasreferral"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                <div className="LearnMore">
                  <div style={{ paddingRight: "10px" }}>Learn More</div>
                  <img src={LearnMore}></img>
                </div>
              </Link>
              <img src={Star} className="star14"></img>
              <div className='part-mobile'>
                <img src={PlayStore} style={{ paddingRight: "30px" }}></img>
                <img src={AppStore}></img>
              </div>
            </div>
          </div>
          <img src={Main}></img>
        </div>
      </div>
    </div>
  );
}

export default Part;

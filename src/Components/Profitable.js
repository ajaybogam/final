import React from "react";
import Refferal from "../Assets/Referrals_Big.svg";
import Track from "../Assets/Track_Big.svg";
import Payout from "../Assets/Payouts_Big.svg";
import "../css/Stars.css";
import Star from "../Assets/Star.svg";
import "../css/Profit.css";

function Profitable() {
  return (
    <div>
      <div className="Profitable">
        <img src={Star} className="star19"></img>
        <div className="profitTitle">it’s simple & profitable</div>
        <img src={Star} className="star20"></img>
        <img src={Star} className="star21"></img>
        <div>
          <div className="profitList">
            <div className="profitList1">
              <img src={Refferal}></img>
              <div className="profitListTitle">ADD REFERRALS</div>
              <div className="profitListSub">
                Send your referrals to Dr Finance
              </div>
            </div>
            <div className="profitList1">
              <img src={Track}></img>
              <div className="profitListTitle">TRACK PROGRESS</div>
              <div className="profitListSub">
                Get constant updates at every stage
              </div>
            </div>
            <div className="profitList1">
              <img src={Payout}></img>
              <div className="profitListTitle">GET PAYOUTS</div>
              <div className="profitListSub">
                Withdraw the money that you earned
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profitable;

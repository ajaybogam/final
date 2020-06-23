import React from "react";
import Refferal from "../Assets/Referrals_Big.svg";
import Track from "../Assets/Track_Big.svg";
import Payout from "../Assets/Payouts_Big.svg";
import "../css/Stars.css";
import Star from "../Assets/Star.svg";
import "../css/Profit.css";
import ProcessThrough from "./shared/ProcessThrough";

const whyChooseOptionsList = [
  {
    image: Refferal,
    title: "ADD REFERRALS",
    description: "Send your referrals to Dr Finance",
  },
  {
    image: Track,
    title: "TRACK PROGRESS",
    description: "Get constant updates at every stage",
  },
  {
    image: Payout,
    title: "GET PAYOUTS",
    description: "Withdraw the money that you earned",
  },
];

function Profitable() {
  return (
    <ProcessThrough
      title="it’s simple & profitable"
      options={whyChooseOptionsList}
    />
  );
}

export default Profitable;

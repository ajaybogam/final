import React from "react";
import "../css/Partners.css";
import React_carousel from './React_carousel'
import Icici from "../Partners/ICICI.png";
import Aditya from "../Partners/Aditya Birla.png";
import Axis from "../Partners/Axis.png";
import Bajaj from "../Partners/Bajaj Finserv.png";
import City from "../Partners/City Bank.png";
import Clix from "../Partners/Clix.png";
import DCB from "../Partners/DCB Bank.png";
import Dhani from "../Partners/Dhani.png";
import Fullerton from "../Partners/Fullerton India.png";
import Hdb from "../Partners/HDB.png";
import Hdfc from "../Partners/HDFC.png";
import Idfc from "../Partners/IDFC.png";
import Incred from "../Partners/InCred.png";
import Indus from "../Partners/IndusInd Bank.png";
import Kotak from "../Partners/Kotak.png";
import Muthoot from "../Partners/Muthoot Finance.png";
import Rbl from "../Partners/RBL.png";
import Shriram from "../Partners/Shriram.png";
import Standard from "../Partners/Standard Chartered.png";
import Yes from "../Partners/Yes Bank.png";
import Star from "../Assets/Star.svg";
import "../css/Stars.css";

function Partners() {
  return (
    <div>
      <div className="partners">
        <img src={Star} className="star10"></img>
        <div className="partTitle">our financial partners</div>
        <img src={Star} className="star11"></img>
        <div className="partnersList">
          <div className="row1">
            <img src={Hdfc}></img>
            <img src={Icici}></img>
            <img src={City}></img>
          </div>
          <div className="row1">
            <img src={Bajaj}></img>
            <img src={Axis}></img>
            <img src={Aditya}></img>
          </div>
          <div className="row1">
            <img src={Muthoot}></img>
            <img src={Yes}></img>
            <img src={Kotak}></img>
          </div>
          <div className="row1">
            <img src={Indus}></img>
            <img src={Standard}></img>
            <img src={Idfc}></img>
          </div>
          <div className="row1">
            <img src={Rbl}></img>
            <img src={Incred}></img>
            <img src={Shriram}></img>
          </div>
          <div className="row1">
            <img src={Fullerton}></img>
            <img src={DCB}></img>
            <img src={Hdb}></img>
          </div>
          <div className="row2">
            <img src={Dhani}></img>
            <img src={Clix}></img>
          </div>
        </div>
      </div>
      <div>
         <React_carousel/>
      </div>
    </div>
  );
}
export default Partners;

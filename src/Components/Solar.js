import React from "react";
import "../css/Solar.css";
import "../css/Stars.css";
import Solar from "../Assets/Solar System.svg";
import mobilesolar from '../Assets/Illustration.svg'
import Star from "../Assets/Star.svg";
function solar() {
  return (
    <div>
      <div className="bg1">
        <img src={Star} className="star1"></img>
        <img src={Star} className="star2"></img>
        <img src={Star} className="star3"></img>
        <div id="title">At the centre of your financial needs</div>
        <div id="subtitle">
          Dr. Finance connects you with lenders & insurers to get you the best
          possible deals
        </div>
        <img src={Solar} className="solarSystem"></img>
        <div ><img className="mobileSolar" src={mobilesolar}/></div>
        <img src={Star} className="star4"></img>
        <img className="star5"></img>
      </div>
      <div>
        
      </div>
    </div>
  );
}

export default solar;

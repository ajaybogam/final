import React from "react";
import "../css/Choose.css";
import "../css/Stars.css";
import Setback from "../Assets/Set Back.svg";
import Bestdeal from "../Assets/Best Deals.svg";
import Safe from "../Assets/Safe Secure.svg";
import Star from "../Assets/Star.svg";

function Choose() {
  return (
    <div className="choosebody">
      <div>
        <div id="chtitle">why choose dr. finance</div>
        <img src={Star} className="star6"></img>
        <img src={Star} className="star7"></img>
        <div className="threelabel">
          <div className="dealsCh">
            <img className='mobile-size'src={Setback} />
            <div id="settitle">SIT BACK & RELAX</div>
            <div id="setsubtitle">
              We will take care of your entire application process
            </div>
          </div>
          <div className="dealsCh">
            <img className='mobile-size' src={Bestdeal} />
            <div id="settitle">GET THE BEST DEALS</div>
            <div id="setsubtitle">
              We lobby on your behalf to get you the best possible deals
            </div>
          </div>
          <div className="dealsCh">
            <img className='mobile-size' src={Safe} />
            <div id="settitle">BE SAFE & SECURE</div>
            <div id="setsubtitle">
              We keep your data safe and private by storing it securely
            </div>
          </div>
        </div>
        <img src={Star} className="star8"></img>
        <img src={Star} className="star9"></img>
      </div>
    </div>
  );
}

export default Choose;

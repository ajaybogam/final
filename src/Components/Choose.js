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
          <div>
            <img src={Setback} />
            <div id="settitle">SIT BACK & RELAX</div>
            <div id="setsubtitle">
              We will take care of your entire application process
            </div>
          </div>
          <div>
            <img src={Bestdeal} />
            <div id="settitle">SIT BACK & RELAX</div>
            <div id="setsubtitle">
              We will take care of your entire application process
            </div>
          </div>
          <div>
            <img src={Safe} />
            <div id="settitle">SIT BACK & RELAX</div>
            <div id="setsubtitle">
              We will take care of your entire application process
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

import React from "react";
import "../css/Contact.css";
import PhoneBig from "../Assets/Phone_Big.svg";
import EmailBig from "../Assets/Email_Big.svg";
import Location from "../Assets/Location.svg";
import Pin from "../Assets/Pin.svg";

function Contact() {
  return (
    <div>
      <div className="Contact">
        <div>
          <div className="contactTitle">Contact Us</div>
          <div className="contactSub">
            <img src={PhoneBig} style={{ paddingRight: "16px" }}></img>
            <div>+91 95814 76948</div>
          </div>
          <div className="contactSub">
            <img src={EmailBig} style={{ paddingRight: "16px" }}></img>
            <div>support@drfinance.com</div>
          </div>
          <div className="contactSub">
            <img src={Location} style={{ paddingRight: "16px" }}></img>
            <div>
              Door No. 2, 2-186/18/6, Ramakrishna Nagar, Amberpet, Hyderabad,
              Telangana 500013
            </div>
          </div>
        </div>
        <div>
          <img src={Pin} className="pin"></img>
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe
                width="600"
                height="500"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=%20Door%20No.%202%2C%202-186%2F18%2F6%2C%20Ramakrishna%20Nagar%2C%20Amberpet%2C%20Hyderabad%2C%20Telangana%20500013%20&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
              ></iframe>
              <a href="https://www.embedgooglemap.net/blog/amazon-promo-code/">
                amazon video promo code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

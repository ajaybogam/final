import React from "react";
import "../css/about.css";
import Finance from "../Assets/Dr Finance.svg";
import India from "../Assets/India.svg";
import "../css/Stars.css";
import Star from "../Assets/Star.svg";
import '../css/loans.css'
function About() {
  // const meta={meta:{charset: 'utf-8',
  // name: {
  //   keywords: 'react,meta,document,html,tags'
  // },name:"viewport",
  // content:'width=device-width'}}
  return (
    <div >
      <div className="about">
        <div>
          <img src={Star} className="star29"></img>
          <img src={Star} className="star27"></img>
          <img src={Star} className="star28"></img>
          <div className="aboutTitle">
            We connect you with financial institutions
          </div>
          <div className="aboutTitle-mobile">
            We connect you with financial institutions
          </div>
          <div className="aboutSubtitle">
            Analyse your financial needs, find the best possible solution and
            process the applications on your behalf
          </div>
          <img src={Star} className="star30"></img>
          <img src={Star} className="star31"></img>
          <img src={Star} className="star32"></img>
        </div>
        <img  className='image-mobile' src={Finance}></img>
      </div>
      <div className="experience ">
        <div>
          <img src={Star} className="star33"></img>
          <div className="aboutTitle" id="etitle">
            Over 10 years of experience in banking & insurance
          </div>
          <div className="aboutTitle-mobile" id="etitle">
            Over 10 years of experience in banking & insurance
          </div>
          <div className="aboutSubtitle" id="etitle">
            We have provided financial services to over 2000 customers in
            Telangana, Andhra Pradesh, Tamil Nadu and Karnataka states. Through
            our association with leading banks across the country, we keep
            expanding our reach.
          </div>
        </div>
        <img className='image-mobile' src={India}></img>
      </div>
    </div>
  );
}

export default About;

import React from "react";
import "../css/team.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Person1 from "../Photos/Team Photo 1.png";
import Person2 from "../Photos/Team Photo 2.png";
import Person3 from "../Photos/Team Photo 3.png";
import Person4 from "../Photos/Team Photo 4.png";
import Person5 from "../Photos/Team Photo 5.png";
import Linked from "../Assets/LinkedIn.svg";
import "../css/Stars.css";
import Star from "../Assets/Star.svg";
function Team() {
  return (
    <div>
      <div className="team">
        <img src={Star} className="star34"></img>
        <div className="ourTeam">our team</div>
        <img src={Star} className="star35"></img>
        <div className="Gallery">
          <div className="row1">
            <div className="photo">
              <img src={Person1} className="person"></img>
              <div className="details">
                <div className="personName">Y. Soujanya Reddy</div>
                <div className="personDesignation">C.E.O</div>
                {/* <img src={Linked}></img> */}
              </div>
            </div>
            <div className="photo">
              <img src={Person2} className="person"></img>
              <div className="details">
                <div className="personName">Y. Malla Reddy</div>
                <div className="personDesignation">Chief Advisor</div>
                {/* <img src={Linked}></img> */}
              </div>
            </div>
            <div className="photo">
              <img src={Person4} className="person"></img>
              <div className="details">
                <div className="personName">S. SaiKrishna</div>
                <div className="personDesignation">Head-Insurance</div>
                {/* <img src={Linked}></img> */}
              </div>
            </div>
          </div>
          <div className="row1">
            <img src={Star} className="star36"></img>
            <div className="photo">
              <img src={Person3} className="person"></img>
              <div className="details">
                <div className="personName">MRK Reddy</div>
                <div className="personDesignation">Head-Loans</div>
                {/* <img src={Linked}></img> */}
              </div>
            </div>
            <div className="photo">
              <img src={Person5} className="person"></img>
              <div className="details">
                <div className="personName">B. Rupa Devi</div>
                <div className="personDesignation">
                  Customer Service Officer
                </div>
                {/* <img src={Linked}></img> */}
              </div>
            </div>
            <img src={Star} className="star37"></img>
          </div>
        </div>
      </div>
      <div className='team_mobile'>
        <div className="ourTeam_mobile">our team</div>
        <Carousel >
            <div className="photo">
              <img  src={Person1} className="person"></img>
              <div className="details">
                <div className="personName">Y. Soujanya Reddy</div>
                <div className="personDesignation">C.E.O</div>
                {/* <img src={Linked}></img> */}
              </div>
            </div>
            <div className="photo">
              <img src={Person2} className="person"></img>
              <div className="details">
                <div className="personName">Y. Malla Reddy</div>
                <div className="personDesignation">Chief Advisor</div>
                {/* <img src={Linked}></img> */}
              </div>
            </div>
            <div className="photo">
              <img src={Person4} className="person"></img>
              <div className="details">
                <div className="personName">S. SaiKrishna</div>
                <div className="personDesignation">Head-Insurance</div>
                {/* <img src={Linked}></img> */}
              </div>
            </div>
            <div className="photo">
              <img src={Person3} className="person"></img>
              <div className="details">
                <div className="personName">MRK Reddy</div>
                <div className="personDesignation">Head-Loans</div>
                {/* <img src={Linked}></img> */}
              </div>
            </div>
            <div className="photo">
              <img src={Person5} className="person"></img>
              <div className="details">
                <div className="personName">B. Rupa Devi</div>
                <div className="personDesignation">
                  Customer Service Officer
                </div>
                {/* <img src={Linked}></img> */}
              </div>
            </div>
            </Carousel >
        

      </div>
    </div>
  );
}

export default Team;

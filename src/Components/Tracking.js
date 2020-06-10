import React from "react";
import "../css/Tracking.css";
import DashboardActive from "../Assets/Dashboard Active.svg";
import Main from "../Assets/Main.svg";
import BreakActive from "../Assets/Breakdown Active.svg";
import TrackActive from "../Assets/Track Active.svg";
import "../css/Stars.css";
import Star from "../Assets/Star.svg";
class Tracking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: true,
      track: false,
      breakdown: false,
    };
  }
  firstTab = () => {
    this.setState({
      detail: true,
      track: false,
      breakdown: false,
    });
  };
  secondTab = () => {
    this.setState({
      detail: false,
      track: true,
      breakdown: false,
    });
  };
  thirdTab = () => {
    this.setState({
      detail: false,
      track: false,
      breakdown: true,
    });
  };
  render() {
    const { detail, track, breakdown } = this.state;
    return (
      <div>
        <div className="tracking">
          <img src={Star} className="star22"></img>
          <div className="trackingTitle">referral tracking app</div>
          <img src={Star} className="star23"></img>
          <img src={Star} className="star24"></img>
          <div className="Slide">
            <div
              className="SlideRow"
              onClick={this.firstTab}
              style={{
                opacity: detail ? "100" : "0.2",
              }}
            >
              <div className="slideTitle">DETAILED DASHBOARD</div>
              <div className="slideSub">
                Get a complete overview of your earnings right when you open the
                app
              </div>
              <img src={DashboardActive}></img>
            </div>
            <div
              className="SlideRow"
              onClick={this.secondTab}
              style={{ opacity: track ? "100" : "0.2" }}
            >
              <div className="slideTitle">TRACK EVERY STEP</div>
              <div className="slideSub" id='adding-padding'>
                Monitor the progression of the application process at each step
              </div>
              <img src={TrackActive}></img>
            </div>
            <div
              className="SlideRow"
              onClick={this.thirdTab}
              style={{ opacity: breakdown ? "100" : "0.2" }}
            >
              <div className="slideTitle">BREAKDOWN COMMISSIONS</div>
              <div className="slideSub">
                View your pending commissions and how much you earned from each
                one
              </div>
              <img src={BreakActive}></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Tracking;

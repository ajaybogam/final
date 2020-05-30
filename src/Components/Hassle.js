import React from "react";
import "../css/Hassle.css";
import Apply from "../Assets/Apply.svg";
import Offer from "../Assets/Best Offers.svg";
import Documents from "../Assets/Submit Documents.svg";
import Approval from "../Assets/Approval.svg";
import Receive from "../Assets/Receive.svg";
import Loans1 from "../Assets/Loan1.svg";
import Loans2 from "../Assets/Loan2.svg";
import { Link } from "react-router-dom";
import Invest1 from "../Assets/Investments1.svg";
import Insurance1 from "../Assets/Insurance1.svg";
import Credit1 from "../Assets/Credit Cards1.svg";
import Invest2 from "../Assets/Investments2.svg";
import Insurance2 from "../Assets/Insurance2.svg";
import Credit2 from "../Assets/Credit Cards2.svg";

class Hassle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loans: true,
      insurance: false,
      investments: false,
      creditCard: false,
    };
  }
  loansFun = () => {
    this.setState({
      loans: true,
      insurance: false,
      investments: false,
      creditCard: false,
    });
  };
  insureFun = () => {
    this.setState({
      loans: false,
      insurance: true,
      investments: false,
      creditCard: false,
    });
  };
  investFun = () => {
    this.setState({
      loans: false,
      insurance: false,
      investments: true,
      creditCard: false,
    });
  };
  creditFun = () => {
    this.setState({
      loans: false,
      insurance: false,
      investments: false,
      creditCard: true,
    });
  };
  render() {
    let menu;
    if (this.state.loans) {
      menu = (
        <div>
          <div className="loansMenu">
            <div className="Menu1">
              <div className="Box1">Personal</div>
              <div className="Box1">Business</div>
              <div className="Box1">Home</div>
              <div className="Box1">Mortgage</div>
              <div className="Box1">Construction</div>
              <div className="cornerBox">Professional</div>
            </div>
            <div className="Menu2">
              <div className="Box2">Plot</div>
              <div className="Box2">Car</div>
              <div className="Box2">Gold</div>
              <div className="Box2">Education</div>
              <div className="Box2">Equipment</div>
              <div className="cornerBox1"></div>
            </div>
          </div>
          <div className="buttonbg">
            <Link
              to="/loans"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <button className="learnMore">Learn More</button>
            </Link>
          </div>
        </div>
      );
    } else if (this.state.investments) {
      menu = (
        <div>
          <div className="InvestMenu">
            <div>Fixed deposits</div>
            <div className="Divider"></div>
            <div>Tax Saving deposits</div>
            <div className="Divider"></div>
            <div>Recurring deposits</div>
            <div className="Divider"></div>
            <div>Special saving schemes</div>
          </div>

          <div className="buttonbg">
            <Link
              to="/investments"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <button className="learnMore">Learn More</button>
            </Link>
          </div>
        </div>
      );
    } else if (this.state.insurance) {
      menu = (
        <div>
          <div>
            <div>
              <div className="InvestMenu">
                <div>Life</div>
                <div className="Divider"></div>
                <div>Term</div>
                <div className="Divider"></div>
                <div>
                  Child <br />
                  Education
                </div>
                <div className="Divider"></div>
                <div>Retirement</div>
                <div className="Divider"></div>
                <div>Pension</div>
              </div>
              <div className="health">Health Insurance Policies</div>
              <div>
                <div className="loansMenu">
                  <div className="Menu1">
                    <div className="Box1">Individual</div>
                    <div className="Box1">Family</div>
                    <div className="Box1">Diabetic</div>
                    <div className="Box1">Senior Citizen</div>
                    <div className="Box1">Cardiac</div>
                    <div className="cornerBox">Cancer</div>
                  </div>
                  <div className="Menu2">
                    <div className="Box2">Special Children Health</div>
                    <div className="Box2">Accidental</div>
                    <div className="Box2">Overseas Medical Insurance</div>
                    <div className="Box2">Travel Insurance</div>
                    <div className="Box2">Group Health</div>
                    <div className="cornerBox1"></div>
                  </div>
                </div>
              </div>

              <div className="buttonbg">
                <Link
                  to="/insurance"
                  style={{ color: "inherit", textDecoration: "inherit" }}
                >
                  <button className="learnMore">Learn More</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      menu = (
        <div>
          <div className="creditcard">Credit Cards of all the banks</div>
          <div className="buttonbg">
            <Link
              to="/creditcards"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <button className="learnMore">Learn More</button>
            </Link>
          </div>
        </div>
      );
    }
    const { loans, investments, insurance, creditCard } = this.state;
    return (
      <div>
        <div className="hassle">
          <div className="hassleTitle">hassle-free process</div>
          <div className="extradiv"></div>
          <div className="extradiv1">
            <div className="hassleOptions">
              <div className="hassleOpt1">
                <div>1</div>
                <img src={Apply}></img>
                <div className="hassleMatter">Apply for a product</div>
              </div>
              <div className="hassleOpt2">
                <div>2</div>
                <img src={Offer}></img>
                <div className="hassleMatter">Get the best offers</div>
              </div>
              <div className="hassleOpt3">
                <div>3</div>
                <img src={Documents}></img>
                <div className="hassleMatter">Submit your documents</div>
              </div>
              <div className="hassleOpt2">
                <div>4</div>
                <img src={Approval}></img>
                <div className="hassleMatter">Wait for approval</div>
              </div>
              <div className="hassleOpt1">
                <div>5</div>
                <img src={Receive}></img>
                <div className="hassleMatter">Receive the loan / policy</div>
              </div>
            </div>
            <div className="hassleLine1">
              <div className="hassleLine"></div>
            </div>
            <div className="hassleHelp">dr. finance can help you with</div>
            <div className="hassleMenu">
              <div className="hassleMenu1" onClick={this.loansFun}>
                <img
                  src={loans ? Loans1 : Loans2}
                  style={{
                    paddingRight: "8px",
                    color: loans ? "#EBA71F" : "rgba(255,255,255,0.40)",
                  }}
                ></img>
                <div
                  style={{
                    color: loans ? "#EBA71F" : " rgba(255,255,255,0.40)",
                  }}
                >
                  Loans
                </div>
              </div>
              <div className="hassleMenu1" onClick={this.investFun}>
                <img
                  src={investments ? Invest1 : Invest2}
                  style={{ paddingRight: "8px" }}
                ></img>
                <div
                  style={{
                    color: investments ? "#EBA71F" : "rgba(255,255,255,0.40)",
                  }}
                >
                  Investments
                </div>
              </div>
              <div className="hassleMenu1" onClick={this.insureFun}>
                <img
                  src={insurance ? Insurance1 : Insurance2}
                  style={{ paddingRight: "8px" }}
                ></img>
                <div
                  style={{
                    color: insurance ? "#EBA71F" : "rgba(255,255,255,0.40)",
                  }}
                >
                  Insurance
                </div>
              </div>
              <div className="hassleMenu1" onClick={this.creditFun}>
                <img
                  src={creditCard ? Credit1 : Credit2}
                  style={{ paddingRight: "8px" }}
                ></img>
                <div
                  style={{
                    color: creditCard ? "#EBA71F" : "rgba(255,255,255,0.40)",
                  }}
                >
                  Credit Cards
                </div>
              </div>
            </div>
            {menu}
            {/* Loans Menu */}
            {/* Investments Menu */}

            {/* Insurance Menu */}

            {/* credit card menu */}
          </div>
        </div>
      </div>
    );
  }
}

export default Hassle;

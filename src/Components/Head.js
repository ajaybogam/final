import React, { useState } from "react";
import "../App.css";
import Modal1 from "react-modal";
import logo from "../Assets/Logo.svg";
import Phone from "../Assets/Phone_Black.svg";
import Email from "../Assets/Email_Black.svg";
import referal from "../Assets/Referral Partner_Default.svg";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import Close from "../Assets/Close.svg";
import axios from "axios";
import Success from "../Assets/Success.svg";
import ham from "../Assets/Hamburger.svg";

import img1 from "../mobile/Email.svg";
import img2 from "../mobile/Phone.svg";
import join_img from "../mobile/Lead Gen.svg";
import mobilecross from "../mobile/Close_Blue.svg";
class Head extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: false,
      name: "",
      phone: "",
      email: "",
      instrument: "",
      dateTime: Date(),
      openSuccess: false,
      loans: false,
      investments: false,
      insurance: false,
      creditcards: false,
      mobilejoinOpen: false,
      join: false,
    };
  }
  mobileJoin = () => {
    this.setState({
      mobilejoinOpen: true,
    });
  };
  loansTab = () => {
    this.setState({
      loans: true,
      investments: false,
      insurance: false,
      creditcards: false,
      join: false,
    });
  };
  joinTab = () => {
    this.setState({
      loans: false,
      investments: false,
      insurance: false,
      creditcards: false,
      join: true,
    });
  };
  investmentsTab = () => {
    this.setState({
      loans: false,
      investments: true,
      insurance: false,
      creditcards: false,
      join: false,
    });
  };
  insuranceTab = () => {
    this.setState({
      loans: false,
      investments: false,
      insurance: true,
      creditcards: false,
      join: false,
    });
  };
  CreditTab = () => {
    this.setState({
      loans: false,
      investments: false,
      insurance: false,
      creditcards: true,
      join: false,
    });
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  setModalOpen = () => {
    this.setState({
      openModal: true,
    });
  };
  setModalClose = () => {
    this.setState({
      openModal: false,
    });
  };
  successModalClose = () => {
    this.setState({
      openSuccess: false,
    });
  };
  submiteHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("http://52.73.189.181/applyProduct", this.state)
      .then((response) => {
        console.log(response);
        if (response.status == 200) {
          this.setState({
            openModal: false,
            openSuccess: true,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    const style = {
      color: "inherit",
      textDecoration: "inherit",
      cursor: "pointer",
    };
    const {
      name,
      phone,
      email,
      instrument,
      loans,
      join,
      investments,
      insurance,
      creditcards,
    } = this.state;
    return (
      <div>
        <Modal  style={{
            overlay: {
              background: "rgba(52,52,52,0.60)",
              overflow: "hidden",
            },
          }}
          className="ApplyModal"
          isOpen={this.state.openSuccess}
          onRequestClose={this.successModalClose}
        >
          <div className="firstBox">
            <div className="ApplyClose">
              <div className="ApplyTitle">Apply for a product</div>
              <img
                src={Close}
                className="Closeapply"
                onClick={this.successModalClose}
              ></img>
            </div>
            <div className="successModal">
              <img src={Success}></img>
              <div className="appSubmited">Application Submitted</div>
              <div className="SubmitedSub">
                We will get in touch with you soon to get the process started
              </div>
            </div>
          </div>
          <div className="ApplyLine"></div>
          <div className="secondBox">
            <div className="ApplyQuest">Got any questions?</div>
            <div className="phone">
              <img src={Phone} style={{ paddingRight: "10px" }}></img>
              <div>+91 95814 76948</div>
            </div>
            <div className="phone">
              <img src={Email} style={{ paddingRight: "10px" }}></img>
              <div>support@drfinance.com</div>
            </div>
          </div>
        </Modal>

        <Modal1  style={{
            overlay: {
              background: "rgba(52,52,52,0.60)",
              overflow: "hidden",
            },
          }}
          
          className="modalmobileJoin"
          onRequestClose={() => {
            this.setState({ mobilejoinOpen: false });
          }}
          isOpen={this.state.mobilejoinOpen}
        >
          <div className="modalmobileJoin_flex">
            <div>
              <img
                src={mobilecross}
                onClick={() => {
                  this.setState({ mobilejoinOpen: false });
                }}
              />
            </div>
            <div>
              <button
                type="button"
                className="modal1button"
                onClick={() => {
                  this.setState({ mobilejoinOpen: false,openModal:true });
                }}
              >
                Apply
              </button>
            </div>
          </div>
           
          <Link to='/joinasreferral'  style={style}>
          <div  
            className="mobilejoinReferral"
            style={style}
          >
            <div>
              <img
                className="mobilejoinReferral-img"
                src={join_img}
                alt="not foung"
              />
            </div>
            <div  style={style}>
              <div className="mobilejoinReferral-big"> Join </div>
              <div className="mobilejoinReferral-small">
                as referral partners
              </div>
            </div>
          </div>
          </Link>
          <hr className="modalmobileJoin-hr" />
          <div className="mobileProducts">
            <div className="mobileProducts-title">Products</div>
            <div className="mobileproducts-elements">
              {" "}
              <Link
                to="/loans"
                style={style}
                onClick={() => {
                  this.setState({ mobilejoinOpen: false });
                }}
              >
                Loans
              </Link>
            </div>
            <div className="mobileproducts-elements">
              <Link
                to="./investments"
                style={style}
                onClick={() => {
                  this.setState({ mobilejoinOpen: false });
                }}
              >
                Investments
              </Link>
            </div>
            <div className="mobileproducts-elements">
              <Link
                to="/insurance"
                style={style}
                onClick={() => {
                  this.setState({ mobilejoinOpen: false });
                }}
              >
                Insurance
              </Link>
            </div>

            <div className="mobileproducts-elements">
              <Link
                to="/creditcards"
                style={style}
                onClick={() => {
                  this.setState({ mobilejoinOpen: false });
                }}
              >
                Credit cards
              </Link>
            </div>
          </div>
          <hr className="modalmobileJoin-hr" />

          <div className="mobile-touch">
            <div className="mobile-touch-title">Got any questions?</div>
            <div className="mobile-touch-contact">
              <div>
                <img className="mobile-padding" src={img2}></img>
              </div>
              <div>+91 95814 76948</div>
            </div>
            <div className="mobile-touch-contact">
              <div className="mobile-padding">
                <img src={img1} />
              </div>
              <div>support@drfinance.com</div>
            </div>
          </div>

          <hr className="modalmobileJoin-hr" />

          <div className="mobile-Quicklinks">Quick Links</div>
          <div className="mobile-Quicklinks-elements">
            <Link
              to="/"
              style={style}
              onClick={() => {
                this.setState({ mobilejoinOpen: false });
              }}
            >
              Home
            </Link>
          </div>
          <div className="mobile-Quicklinks-elements">
            <Link
              to="/about"
              style={style}
              onClick={() => {
                this.setState({ mobilejoinOpen: false });
              }}
            >
              About Dr. Finance
            </Link>
          </div>
          <div className="mobile-Quicklinks-elements">
            <Link
              to="/joinasreferral"
              style={style}
              onClick={() => {
                this.setState({ mobilejoinOpen: false });
              }}
            >
              Join as Referral Partner
            </Link>
          </div>
          <div className="mobile-Quicklinks-elements">
            <Link
              to="/contact"
              style={style}
              onClick={() => {
                this.setState({ mobilejoinOpen: false });
              }}
            >
              Contact
            </Link>
          </div>
          <div className="mobile-Quicklinks-elements">
            <Link
              to="/termsandconditions"
              style={style}
              onClick={() => {
                this.setState({ mobilejoinOpen: false });
              }}
            >
              Terms and Condition
            </Link>
          </div>
          <div className="mobile-Quicklinks-elements">
            <Link
              to="/faqs"
              style={style}
              onClick={() => {
                this.setState({ mobilejoinOpen: false });
              }}
            >
              FAQs
            </Link>
          </div>
        </Modal1>

        <Modal  style={{
            overlay: {
              background: "rgba(52,52,52,0.60)",
              overflow: "hidden",
            },
          }}
          className="ApplyModal"
          isOpen={this.state.openModal}
          onRequestClose={this.setModalClose}
        >
          <div className="firstBox">
            <div className="ApplyClose">
              <div className="ApplyTitle">Apply for a product</div>
              <img
                src={Close}
                className="Closeapply"
                onClick={this.setModalClose}
              ></img>
            </div>
            <div className="ApplySub">Please fill the below details</div>
            <form onSubmit={this.submiteHandler}>
              <input
                type="text"
                placeholder="Name*"
                name="name"
                onChange={this.handleChange}
                value={name}
                className="ApplyInput"
              ></input>
              <div>
                <input
                  type="text"
                  name="phone"
                  value={phone}
                  onChange={this.handleChange}
                  placeholder="Mobile Number*"
                  className="ApplyInput"
                ></input>
              </div>
              <div>
                <input
                  type="text"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                  placeholder="Email ID*"
                  className="ApplyInput"
                ></input>
              </div>
              <div>
                <select
                  className="dropdownMenu"
                  placeholder="Required Product"
                  value={instrument}
                  name="instrument"
                  onChange={this.handleChange}
                >
                  <option value="Loans">Loans</option>
                  <option value="Insurance">Insurance</option>
                  <option value="Investments">Investments</option>
                  <option value="Credit Cards">Credit Cards</option>
                </select>
              </div>
              <div className="ApplyBtnRow">
                <button className="ApplyButton" type="submit">
                  Submit
                </button>
                <button className="ApplyButton1" onClick={this.setModalClose}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
          <div className="ApplyLine"></div>
          <div className="secondBox">
            <div className="ApplyQuest">Got any questions?</div>
            <div className="phone">
              <img src={Phone} style={{ paddingRight: "10px" }}></img>
              <div>+91 95814 76948</div>
            </div>
            <div className="phone">
              <img src={Email} style={{ paddingRight: "10px" }}></img>
              <div>support@drfinance.com</div>
            </div>
          </div>
        </Modal>

        {/* Header starts from Here */}

        <div className="header">
          <div className="hamburger" style={{paddingRight:"20px"}} onClick={() => this.mobileJoin()}>
            {" "}
            <img src={ham} />
          </div>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <div className="menu">
            <Link
              to="/loans"
              style={{
                textDecoration: "none",
                color: " #343434",
              }}
            >
              <div  id="hide"
                onClick={this.loansTab}
                className={loans ? "linkdecorate" : "linkdecorate1"}
              >
                Loans
              </div>
            </Link>
            <Link
              to="/investments"
              style={{
                textDecoration: "none",
                color: investments ? "#EBA71F" : " #343434",
              }}
            >
              <div id="hide"
                onClick={this.investmentsTab}
                className={investments ? "linkdecorate" : "linkdecorate1"}
              >
                Investments
              </div>
            </Link>
            <Link
              to="/insurance"
              onClick={this.insuranceTab}
              style={{
                textDecoration: "none",
                color: insurance ? "#EBA71F" : " #343434",
              }}
            >
              <div id="hide"
                onClick={this.insuranceTab}
                className={insurance ? "linkdecorate" : "linkdecorate1"}
              >
                Insurance
              </div>
            </Link>
            <Link
              to="/creditcards"
              style={{
                color: creditcards ? "#EBA71F" : " #343434",
                textDecoration: "none",
              }}
            >
              <div id="hide"
                onClick={this.CreditTab}
                className={creditcards ? "linkdecorate" : "linkdecorate1"}
              >
                Credit Cards
              </div>
            </Link>
            <div id="hide"><div id="vertical"></div></div>
            <button className="apply" onClick={this.setModalOpen}>
              Apply
            </button>
            <div id="hide"><div id="vertical"></div></div>
            <Link id="hide"
              to="/joinasreferral"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div id="join" onClick={this.joinTab} >
                <img
                  src={referal}
                  style={{ textDecoration: "none", color: "inherit" }}
                />
                <div  style={{ textDecoration: "none", color: "inherit" }}>
                  <div className={join ? "linkdecorate" : "linkdecorate1"}>
                    Join
                  </div>
                  <div id="referal">as referral partners</div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Head;

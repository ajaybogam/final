import React, { useState } from "react";
import "../App.css";
import Modal1 from "react-modal";
import Modal2 from "react-modal";
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

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validateName = (name) => {
  console.log(name);
  var letter = /^[a-zA-Z\s]*$/;
  if (name.match(letter) && name.length > 2) {
    return true;
  } else {
    return false;
  }
};
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
  return valid;
};
/**
 * Loans
Investments
Insurance
Credit Cards
Apply


 */
const navigation = [
  { title: "Loans", link: "/loans" },
  { title: "Investments", link: "/investments" },
  { title: "Insurance", link: "/insurance" },
  { title: "Credit Cards", link: "/creditcards" },
];

class Head extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "",
      openModal: false,
      name: "",
      phone: "",
      email: "",
      instrument: "Loans",
      dateTime: Date(),
      openSuccess: false,
      mobilejoinOpen: false,
      join: false,
      errors: {
        name: "",
        phone: "",
        email: "",
      },
    };
  }
  mobileJoin = () => {
    this.setState({
      mobilejoinOpen: true,
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

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });

    const { name, value } = e.target;
    let errors = this.state.errors;

    switch (name) {
      case "name":
        errors.name = !validateName(value) ? "Enter a valid Name" : "";
        break;
      case "email":
        errors.email = validEmailRegex.test(value) ? "" : "Email is not valid!";
        break;
      case "phone":
        errors.phone = value.length == 10 ? "" : "Enter a valid number";
      default:
        break;
    }
  };
  setModalOpen = () => {
    this.setState({
      openModal: true,
    });
  };
  setModalClose = () => {
    this.setState({
      openModal: false,
      name: "",
      phone: "",
      email: "",
      errors: {
        name: "",
        phone: "",
        email: "",
      },
    });
  };
  successModalClose = () => {
    this.setState({
      openSuccess: false,
    });
  };
  submiteHandler = (e) => {
    e.preventDefault();

    if (validateForm(this.state.errors)) {
      console.log(this.state);
      axios
        .post("http://52.73.189.181/applyProduct", this.state)
        .then((response) => {
          console.log(response);
          if (response.status == 200) {
            this.setState({
              openModal: false,
              openSuccess: true,
              name: "",
              phone: "",
              email: "",
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log("Invalid application");
    }
  };
  disableScroll = () => {
    document.body.style.overflow = "hidden";
  };
  enableScroll = () => {
    document.body.removeAttribute("style");
  };
  render() {
    const style = {
      color: "inherit",
      textDecoration: "inherit",
      cursor: "pointer",
    };
    const { name, phone, email, instrument, join } = this.state;
    return (
      <div>
        <Modal2
          style={{
            overlay: {
              background: "rgba(52,52,52,0.60)",
              overflow: "hidden",
            },
          }}
          className="ApplyModal"
          isOpen={this.state.openSuccess}
          onRequestClose={() => (this.successModalClose(), this.enableScroll())}
          onAfterOpen={this.disableScroll}
          ariaHideApp={false}
        >
          <div className="firstBox">
            <div className="ApplyClose">
              <div className="ApplyTitle">Apply for a product</div>
              <img
                src={Close}
                className="Closeapply"
                onClick={() => (this.successModalClose(), this.enableScroll())}
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
        </Modal2>

        <Modal1
          style={{
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
          ariaHideApp={false}
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
                  this.setState({ mobilejoinOpen: false, openModal: true });
                }}
              >
                Apply
              </button>
            </div>
          </div>

          <Link to="/joinasreferral" style={style}>
            <div className="mobilejoinReferral" style={style}>
              <div>
                <img
                  className="mobilejoinReferral-img"
                  src={join_img}
                  alt="not foung"
                />
              </div>
              <div style={style}>
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

        <Modal
          style={{
            overlay: {
              background: "rgba(52,52,52,0.60)",
              overflow: "hidden",
            },
          }}
          className="ApplyModal"
          isOpen={this.state.openModal}
          ariaHideApp={false}
          onRequestClose={() => (this.setModalClose(), this.enableScroll())}
          onAfterOpen={this.disableScroll}
        >
          <div className="firstBox">
            <div className="ApplyClose">
              <div className="ApplyTitle">Apply for a product</div>
              <img
                src={Close}
                className="Closeapply"
                onClick={() => (this.setModalClose(), this.enableScroll())}
              ></img>
            </div>
            <div className="ApplySub">Please fill the below details</div>
            <form onSubmit={this.submiteHandler}>
              <div className="modal-input-height">
                <input
                  type="text"
                  placeholder="Name*"
                  name="name"
                  onChange={this.handleChange}
                  value={name}
                  className="ApplyInput"
                  required
                ></input>
                {this.state.errors.name.length > 0 && (
                  <div className="error">{this.state.errors.name}</div>
                )}
              </div>
              <div className="modal-input-height">
                <input
                  type="text"
                  name="phone"
                  value={phone}
                  onChange={this.handleChange}
                  placeholder="Mobile Number*"
                  className="ApplyInput"
                  required
                ></input>
                {this.state.errors.phone.length > 0 && (
                  <div className="error">{this.state.errors.phone}</div>
                )}
              </div>
              <div className="modal-input-height">
                <input
                  type="text"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                  placeholder="Email ID*"
                  className="ApplyInput"
                  required
                ></input>
                {this.state.errors.email.length > 0 && (
                  <div className="error">{this.state.errors.email}</div>
                )}
              </div>
              <div className="">
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
                <button
                  className="ApplyButton"
                  type="submit"
                  onClick={this.disableScroll}
                >
                  Submit
                </button>
                <button
                  className="ApplyButton1"
                  onClick={() => (this.setModalClose(), this.enableScroll())}
                >
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
          <div
            className="hamburger"
            style={{ paddingRight: "20px" }}
            onClick={() => this.mobileJoin()}
          >
            {" "}
            <img src={ham} />
          </div>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <div className="menu">
            {navigation.map((menu, idx) => (
              <Link
                key={menu.link}
                to={menu.link}
                style={{
                  textDecoration: "none",
                  color: " #343434",
                }}
              >
                <div
                  id="hide"
                  onClick={() => this.setState({ currentPage: menu.link })}
                  className={
                    this.state.currentPage === menu.link
                      ? "linkdecorate"
                      : "linkdecorate1"
                  }
                >
                  {menu.title}
                </div>
              </Link>
            ))}

            <div id="hide">
              <div id="vertical"></div>
            </div>
            <button className="apply" onClick={this.setModalOpen}>
              Apply
            </button>
            <div id="hide">
              <div id="vertical"></div>
            </div>
            <Link
              id="hide"
              to="/joinasreferral"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div id="join" onClick={this.joinTab}>
                <img
                  src={referal}
                  style={{ textDecoration: "none", color: "inherit" }}
                />
                <div style={{ textDecoration: "none", color: "inherit" }}>
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

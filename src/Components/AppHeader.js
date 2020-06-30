import React, { useState } from "react";
import "../App.css";
import Modal1 from "react-modal";
import Modal2 from "react-modal";

import Phone from "../Assets/Phone_Black.svg";
import Email from "../Assets/Email_Black.svg";

import { Link } from "react-router-dom";
import Modal from "react-modal";
import Close from "../Assets/Close.svg";
import axios from "axios";
import Success from "../Assets/Success.svg";

import img1 from "../mobile/Email.svg";
import img2 from "../mobile/Phone.svg";
import join_img from "../mobile/Lead Gen.svg";
import mobilecross from "../mobile/Close_Blue.svg";
import TopHeader from "./header/TopHeader";
import ApiServices from "../services/api.services";

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

class AppHeader extends React.Component {
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

  submiteHandler = (e) => {
    e.preventDefault();

    if (validateForm(this.state.errors)) {
      console.log(this.state);
      axios
        .post("http://52.73.189.181/applyproduct", this.state)
        
        // ApiServices.product.apply(this.state)
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

  render() {
    const style = {
      color: "inherit",
      textDecoration: "inherit",
      cursor: "pointer",
    };
    const { name, phone, email, instrument, join } = this.state;
    return (
      <React.Fragment>
        <Modal2
          style={{
            overlay: {
              background: "rgba(52,52,52,0.60)",
              overflow: "hidden",
            },
          }}
          className="ApplyModal"
          isOpen={this.state.openSuccess}
          ariaHideApp={false}
        >
          <div className="firstBox">
            <div className="successModal">
              <img src={Success}></img>
              <div className="appSubmited">Application Submitted</div>
              <div className="SubmitedSub">
                We will get in touch with you soon to get the process started
              </div>
            </div>
          </div>
        </Modal2>

        <TopHeader />
      </React.Fragment>
    );
  }
}

export default AppHeader;

import React from "react";
import "../css/Footer.css";
import Copy from "../Assets/Copyright.svg";
import { Link } from "react-router-dom";
import PhoneWhite from "../Assets/Phone_White.svg";
import EmailWhite from "../Assets/Email_White.svg";
import axios from "axios";
const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validateName = (name) => {
  var letter = /^[a-zA-Z\s]*$/;
  if (name.match(letter) && name.length > 2) {
    return true;
  } else {
    return false;
  }
};
const validateSubject = (name) => {
  var letter = /^[a-zA-Z0-9\s]*$/;
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
class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
      dateTime: Date(),
      errors: {
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
      },
    };
  }
  submitHandler = (e) => {
    e.preventDefault();
    if (validateForm(this.state.errors)) {
      console.log(this.state);
      axios
        .post("http://52.73.189.181/inquiries", this.state)
        .then((response) => {
          console.log(response);
          if (response.status == 200) {
            this.setState({
              name: "",
              phone: "",
              email: "",
              subject: "",
              message: "",
              errors: {
                name: "",
                phone: "",
                email: "",
                subject: "",
                message: "",
              },
            });
          }
          alert("submitted Successfully");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log("Invalid application");
    }
  };
  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    const { name, value } = e.target;
    let errors = this.state.errors;

    switch (name) {
      case "name":
        errors.name = !validateName(value) ? "Enter a valid Name" : "";
        break;
      case "subject":
        errors.subject = !validateSubject(value) ? "Enter a valid subject" : "";
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
  render() {
    const { name, phone, email, subject, message } = this.state;
    return (
      <div>
        <div className="footer">
          <div className="footCol1">
            <div className="footerhead">QUICK LINKS</div>
            <Link
              to="/"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <div className="footerSub">Home</div>
            </Link>
            <Link
              to="/about"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <div className="footerSub">About Dr.Finance</div>
            </Link>
            <Link
              to="joinasreferral"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <div className="footerSub">Join as Referral Partners</div>
            </Link>
            <Link
              to="/contact"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <div className="footerSub">Contact</div>
            </Link>
            <Link
              to="/termsandconditions"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <div className="footerSub">Terms and Conditions</div>
            </Link>
            <Link
              to="/faqs"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <div className="footerSub">FAQs</div>
            </Link>
            <div className="copyright">
              <img src={Copy}></img>
              <div>2020 Dr. Finance</div>
            </div>
          </div>
          <div className="footCol1">
            <div className="footerhead">PRODUCTS</div>
            <Link
              to="/loans"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <div className="footerSub">Loans</div>
            </Link>
            <Link
              to="/investments"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <div className="footerSub">Investments</div>
            </Link>
            <Link
              to="/insurance"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <div className="footerSub">Insurance</div>
            </Link>
            <Link
              to="/creditcards"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <div className="footerSub">Credit Cards</div>
            </Link>
          </div>
          <div className="footCol1">
            <div className="footerhead">GET IN TOUCH</div>
            <div className="footerSub1">
              <img src={PhoneWhite} style={{ paddingRight: "10px" }}></img>
              <div>+91 95814 76948</div>
            </div>
            <div className="footerSub1">
              <img src={EmailWhite} style={{ paddingRight: "10px" }}></img>
              <div>support@drfinance.com</div>
            </div>
          </div>
          <div className="footerForm">
            <div className="footerFormTitle">Got any questions?</div>
            <div className="footerFormSub">Please fill the below details</div>
            <form onSubmit={this.submitHandler}>
              <div className="footer-input-height">
                <input
                  type="text"
                  name="name"
                  value={name}
                  required
                  onChange={this.changeHandler}
                  placeholder="Name*"
                  className="footerFormName"
                ></input>
                {this.state.errors.name.length > 0 && (
                  <div className="error">{this.state.errors.name}</div>
                )}
              </div>
              <div className="footer-input-height">
                <input
                  type="number"
                  name="phone"
                  maxLength="10"
                  pattern="\d{10}"
                  title="please enter proper phone number"
                  value={phone}
                  required
                  onChange={this.changeHandler}
                  placeholder="Mobile Number*"
                  className="footerFormName"
                ></input>
                {this.state.errors.phone.length > 0 && (
                  <div className="error">{this.state.errors.phone}</div>
                )}
              </div>
              <div className="footer-input-height">
                <input
                  type="text"
                  name="email"
                  value={email}
                  onChange={this.changeHandler}
                  placeholder="Email"
                  className="footerFormName"
                ></input>
                {this.state.errors.email.length > 0 && (
                  <div className="error">{this.state.errors.email}</div>
                )}
              </div>
              <div className="footer-input-height">
                <input
                  type="text"
                  value={subject}
                  name="subject"
                  required
                  onChange={this.changeHandler}
                  placeholder="Subject*"
                  className="footerFormName"
                ></input>
                {this.state.errors.subject.length > 0 && (
                  <div className="error">{this.state.errors.subject}</div>
                )}
              </div>
              <div className="footer-input-height">
                <input
                  type="text"
                  name="message"
                  value={message}
                  required
                  onChange={this.changeHandler}
                  placeholder="Message*"
                  className="footerFormName"
                ></input>
              </div>
              <button type="submit" className="footerButton">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="footer1">
          <div className="footerhead">GET IN TOUCH</div>
          <div className="footerSub1">
            <img src={PhoneWhite} style={{ paddingRight: "10px" }}></img>
            <div>+91 95814 76948</div>
          </div>
          <div className="footerSub1">
            <img src={EmailWhite} style={{ paddingRight: "10px" }}></img>
            <div>support@drfinance.com</div>
          </div>
          <div className="copyright">
            <img src={Copy}></img>
            <div>2020 Dr. Finance</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;

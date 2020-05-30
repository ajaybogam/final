import React from "react";
import "../css/about.css";
import "../css/Stars.css";
import Star from "../Assets/Star.svg";
import "../css/loans.css";
import Insure from "../process/Insurance.svg";
import Analysis from "../process/Expert Analysis.svg";
import Digital from "../process/Digital Process.svg";
import Support from "../process/Claim Support.svg";
import Variety from "../process/Variety of products.svg";
import axios from "axios";
import Modal from "react-modal";
import Close from "../Assets/Close.svg";
import Success from "../Assets/Success.svg";
import Phone from "../Assets/Phone_Black.svg";
import Email from "../Assets/Email_Black.svg";

class Insurance extends React.Component {
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
    };
  }
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
    const loantitle = {
      width: "80.8%",
    };
    const { name, phone, email, instrument } = this.state;
    return (
      <div>
        <Modal style={{
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
        <div className="about">
          <div>
            <img src={Star} className="star38"></img>
            <img src={Star} className="star39"></img>
            <img src={Star} className="star40"></img>
            <div className="aboutTitle" style={loantitle}>
              Over a decade of experience in insurance sector
            </div>
            <div className="aboutTitle-mobile" style={loantitle}>
              Over a decade of experience in insurance sector
            </div>
            <div className="aboutSubtitle">
              Our partnership with premier insurance companies and our insurance
              experts enables us to provide you the best possible insurance
              policies
            </div>
          </div>
          <img className="image-mobile" src={Insure}></img>
        </div>
        <div className="loansthrough">
          <img src={Star} className="star41"></img>
          <div className="loansTitle">insurance through dr. finance</div>
          <div className="loansTitle-mobile" id="insurance-width">
            insurance in dr. finance
          </div>
          <img src={Star} className="star42"></img>
          <div className="loansSub">
            We have partnered with all premier Insurance companies to serve you.
            Our dedicated claims team will handle your claims. We will be having
            one on one call with you to get to know your needs. Upon analysis,
            we would educate you about the policy terms and conditions in detail
            and then we will recommend you the product with different options.
            If there is an agreement, we will process and close the insurance.
            Besides, we have got your back at every stage of the application.
            You would not have to worry about the clauses and conditions that
            are in fine print as our team would educate you about every nuance
            and share the necessary documentation for further reference.
          </div>
        </div>
        <div className="processed">
          <img src={Star} className="star43"></img>
          <div className="processedtitle">policies processed</div>
          <img src={Star} className="star44"></img>
          <div className="applyfor">
            <div className="catalog">Life</div>
            <div className="line"></div>
            <div className="catalog">Term</div>
            <div className="line"></div>
            <div className="catalog">
              Child
              <br /> Education
            </div>
            <div className="line"></div>
            <div className="catalog">Retirement</div>
            <div className="line"></div>
            <div className="catalog">Pension</div>
          </div>
          <div className="catalogTitle">Health Insurance Policies</div>
          <div>
            <div className="loansMenu123">
              <div className="Menu11" style={{ backgroundColor: "none" }}>
                <div className="Box11">Individual</div>
                <div className="Box11">Family</div>
                <div className="Box11">Diabetic</div>
                <div className="Box11">Senior Citizen</div>
                <div className="Box11">Cardiac</div>
                <div className="Box112">Cancer</div>
              </div>
              <div className="Menu22">
                <div className="Box22">Special Children Health</div>
                <div className="Box22">Accidental</div>
                <div className="Box22">Overseas Medical Insurance</div>
                <div className="Box22">Travel Insurance</div>
                <div className="Box22">Group Health</div>
                <div className="Box223"></div>
              </div>
            </div>
          </div>
          <button className="applybtn" onClick={this.setModalOpen}>
            Apply Now
          </button>
        </div>
        <div className="loansthrough">
          <img src={Star} className="star45"></img>
          <div className="processTitle">
            why process insurance through dr. finance?
          </div>
          <img src={Star} className="star46"></img>
          <div className="dealsRow1">
            <div className="dealsBlock">
              <img src={Analysis}></img>
              <div className="dealsTitle">Expert Analysis</div>
              <div className="dealsSub">
                Our experts will conduct a deep analysis of your application &
                understand you requirements
              </div>
            </div>
            <div className="dealsBlock">
              <img src={Digital}></img>
              <div className="dealsTitle">Digital process</div>
              <div className="dealsSub">
                Our online ecosystem will help you throughout the process. You
                can buy and renew your policies online
              </div>
            </div>
            <div className="dealsBlock">
              <img src={Support}></img>
              <div className="dealsTitle">Dedicated Claims support</div>
              <div className="dealsSub">
                Our experienced team will not just help you in buying but they
                will also help you in settling claims smoothly
              </div>
            </div>
          </div>
          <div className="dealsRow2">
            <div className="dealsBlock">
              <img src={Variety}></img>
              <div className="dealsTitle">Variety of products</div>
              <div className="dealsSub">
                Dr. Finance provides a variety of products for various stages of
                your life and health
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Insurance;

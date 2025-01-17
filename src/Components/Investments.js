import React from "react";
import "../css/about.css";
import "../css/loans.css";
import "../css/Stars.css";
import Star from "../Assets/Star.svg";
import Invest from "../process/Investments.svg";
import Deals from "../process/Best Deals.svg";
import Safe from "../process/Safe Secure.svg";
import Back from "../process/Set Back.svg";
import axios from "axios";
import Modal from "react-modal";
import Close from "../Assets/Close.svg";
import Success from "../Assets/Success.svg";
import Phone from "../Assets/Phone_Black.svg";
import Email from "../Assets/Email_Black.svg";

class Investments extends React.Component {
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
        <Modal style={{
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
              We will help you process & plan your investments
            </div>
            <div className="aboutTitle-mobile">
              We will help you process & plan your investments
            </div>
            <div className="aboutSubtitle">
              Get your investments processed by our experts and also receive
              advice on how to plan your investments
            </div>
          </div>
          <img className="image-mobile" src={Invest}></img>
        </div>
        <div className="loansthrough">
          <img src={Star} className="star41"></img>
          <div className="loansTitle">investments through dr. finance</div>
          <div className="loansTitle-mobile" id="investments-width">
            investments in dr. finance
          </div>
          <img src={Star} className="star42"></img>
          <div className="loansSub">
            Rupee saved is a rupee earned. We totally understand how a goo
            saving can save you from crises. To serve you, we have tied up with
            banks, post offices and NBFC’s to sell saving instruments like fixed
            deposits, tax saving deposits, recurring deposits and special saving
            schemes which are secured and offer good returns. Our expert spends
            time with you to understand your long-term or short-term plans and
            suggest the best instrument to invest in.
          </div>
        </div>
        <div className="processed">
          <img src={Star} className="star43"></img>
          <div className="processedtitle">investments processed</div>
          <img src={Star} className="star44"></img>
          <div className="applyfor">
            <div className="catalog">Fixed Deposits</div>
            <div className="line"></div>
            <div className="catalog">Tax saving deposits</div>
            <div className="line"></div>
            <div className="catalog">Recurring deposits</div>
            <div className="line"></div>
            <div className="catalog">Special saving schemes</div>
          </div>
          <button className="applybtn" onClick={this.setModalOpen}>
            Apply Now
          </button>
        </div>
        <div className="loansthrough">
          <img src={Star} className="star45"></img>
          <div className="processTitle">
            why process investments through dr. finance?
          </div>
          <img src={Star} className="star46"></img>
          <div className="dealsRow1">
            <div className="dealsBlock">
              <img src={Back}></img>
              <div className="dealsTitle">Expert Analysis</div>
              <div className="dealsSub">
                Our experts will analyse your application and suggest you the
                best investment plans
              </div>
            </div>
            <div className="dealsBlock">
              <img src={Deals}></img>
              <div className="dealsTitle">Get the best deals</div>
              <div className="dealsSub">
                We lobby on your behalf to get you the best possible deals on
                your investments
              </div>
            </div>
            <div className="dealsBlock">
              <img src={Safe}></img>
              <div className="dealsTitle">Be safe & Secure</div>
              <div className="dealsSub">
                All your documents and details will be stored securely and by
                following the industry standards
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Investments;

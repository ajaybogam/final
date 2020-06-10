import React from "react";
import Loan from "../Assets/Loans.svg";
import "../css/about.css";
import "../css/loans.css";
import "../css/Stars.css";
import Star from "../Assets/Star.svg";
import Close from "../Assets/Close.svg";
import Success from "../Assets/Success.svg";
import Phone from "../Assets/Phone_Black.svg";
import Email from "../Assets/Email_Black.svg";
import Deals from "../process/Best Deals.svg";
import Score from "../process/Cibil Score.svg";
import Service from "../process/Doorstep Service.svg";
import Checks from "../process/Eligibility Checks.svg";
import Analysis from "../process/Expert Analysis.svg";
import Free from "../process/Hassle Free Processing.svg";
import Status from "../process/Loan Status.svg";
import Safe from "../process/Safe Secure.svg";
import axios from "axios";
import Modal from "react-modal";
import Modal2 from "react-modal";
const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validateName=name=>{
  console.log(name)
  var letter= /^[a-zA-Z\s]*$/;
  if(name.match(letter) && name.length>2){return true}
  else{return false}
  
}
const validateForm = errors => {
  let valid = true;
  Object.values(errors).forEach(val => val.length > 0 && (valid = false));
  return valid;
};
class Loans extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: false,
      name: "",
      phone: "",
      email: "",
      instrument: "Loans",
      dateTime: Date(),
      openSuccess: false,
      errors:{
        name:"",
        phone:"",
        email:''
      }
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    
    const { name, value } = e.target;
    let errors = this.state.errors;

    switch (name) {
      case 'name': 
        errors.name = 
          (!validateName(value))
            ? 'Enter a valid Name'
            : '';
        break;
      case 'email': 
        errors.email = 
          validEmailRegex.test(value)
            ? ''
            : 'Email is not valid!';
        break;
      case 'phone':
        errors.phone=
          value.length==10
            ?""
            :"Enter a valid number"
      default:
        break;
    }
  };
  setModalOpen = () => {
    this.setState({
      openModal: true,
      errors:{
        name:"",
        phone:"",
        email:''
      }
    });
  };
  setModalClose = () => {
    this.setState({
      openModal: false,
      name: "",
      phone: "",
      email: "",
    });
  };
  successModalClose = () => {
    this.setState({
      openSuccess: false,
    });
  };
  disableScroll = () => { document.body.style.overflow = 'hidden' }
  enableScroll = () => {  document.body.removeAttribute('style') }
  submiteHandler = (e) => {
    e.preventDefault();

    if(validateForm(this.state.errors)){
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
        email: ""
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
    
        
    }
    else{
      console.log("Invalid application")
    }
    
  };
  
  render() {
    const loantitle = {
      width: "80.8%",
    };
    const style = {
      color: "inherit",
      textDecoration: "inherit",
      cursor: "pointer",
    };
    const { name, phone, email, instrument } = this.state;
    return (
      <div>
        <Modal2
          className="ApplyModal"
          style={{
            overlay: {
              background: "rgba(52,52,52,0.60)",
              overflow: "hidden",
            },
          }}
          isOpen={this.state.openSuccess}
          onRequestClose={()=>(this.successModalClose(),this.enableScroll())}
          onAfterOpen={this.disableScroll}
          ariaHideApp={false}
      
        >
          <div className="firstBox">
            <div className="ApplyClose">
              <div className="ApplyTitle">Apply for a product</div>
              <img
                src={Close}
                className="Closeapply"
                onClick={()=>(this.successModalClose(),this.enableScroll())}
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
        <Modal  style={{
            overlay: {
              background: "rgba(52,52,52,0.60)",
              overflow: "hidden",
            },
          }}
          className="ApplyModal"
          isOpen={this.state.openModal}
          ariaHideApp={false}
          onRequestClose={()=>(this.setModalClose(),this.enableScroll())}
          onAfterOpen={this.disableScroll}
          
          
        >
          <div className="firstBox">
            <div className="ApplyClose">
              <div className="ApplyTitle">Apply for a product</div>
              <img
                src={Close}
                className="Closeapply"
                onClick={()=>(this.setModalClose(),this.enableScroll())}
              ></img>
            </div>
            <div className="ApplySub">Please fill the below details</div>
            <form onSubmit={this.submiteHandler} >
              <div className='modal-input-height'>
                <input
                  type="text"
                  placeholder="Name*"
                  name="name"
                  onChange={this.handleChange}
                  value={name}
                  className="ApplyInput"
                  required
                  
                ></input>
                {this.state.errors.name.length > 0 && 
                  <div className='error'>{this.state.errors.name}</div>}
              </div>
              <div  className='modal-input-height'>
                <input
                  type="text"
                  name="phone"
                  value={phone}
                  onChange={this.handleChange}
                  placeholder="Mobile Number*"
                  className="ApplyInput"
                  required
                ></input>
                 {this.state.errors.phone.length>0 && 
                <div className='error'>{this.state.errors.phone}</div>}
              </div>
              <div className='modal-input-height'>
                <input
                  type="text"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                  placeholder="Email ID*"
                  className="ApplyInput"
                  required
                ></input>
                 {this.state.errors.email.length>0 && 
                <div className='error'>{this.state.errors.email}</div>}
              </div>
              <div className=''>
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
                <button className="ApplyButton" type="submit" onClick={this.disableScroll}>
                  Submit
                </button>
                <button className="ApplyButton1" onClick={()=>(this.setModalClose(),this.enableScroll())}>
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
              Over a decade of experience in processing loans
            </div>
            <div className="aboutTitle-mobile">
              Over a decade of experience in processing loans
            </div>
            <div className="aboutSubtitle">
              Our experts will understand your requirements, analyse your
              application and provide you the best possible loans through our
              partnered premier banks & lending institutions
            </div>
          </div>
          <img className="image-mobile" src={Loan}></img>
        </div>
        <div className="loansthrough">
          <img src={Star} className="star41"></img>
          <div className="loansTitle">loans through dr. finance</div>
          <div className="loansTitle-mobile">loans in dr. finance</div>
          <img src={Star} className="star42"></img>
          <div className="loansSub">
            We have a state of art Technology where we can determine possible
            loan amount and loan eligibility in multiple banks within a few
            minutes without affecting your CIBIL score. After deep analysis, we
            would inform you about the banks that fulfil your requirement, the
            loan process, charges and time required to process your loan. Upon
            your approval, we will start the loan process. Dr.Finance is your
            financial doctor for all your family needs like home renovation,
            property purchase, vacation, education and business needs. Your data
            is safe with us and will not be shared with anyone.
          </div>
        </div>
        <div className="processed">
          <img src={Star} className="star43"></img>
          <div className="processedtitle">loans processed</div>
          <img src={Star} className="star44"></img>
          <div>
            <div className="loansMenu123">
              <div className="Menu11">
                <div className="Box11">Personal</div>
                <div className="Box11">Business</div>
                <div className="Box11">Home</div>
                <div className="Box11">Mortgage</div>
                <div className="Box11">Construction</div>
                <div className="Box112">Professional</div>
              </div>
              <div className="Menu22">
                <div className="Box22">Plot</div>
                <div className="Box22">Car</div>
                <div className="Box22">Gold</div>
                <div className="Box22">Education</div>
                <div className="Box22">Equipment</div>
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
            why process loans through dr. finance?
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
              <img src={Deals}></img>
              <div className="dealsTitle">Get the best deals</div>
              <div className="dealsSub">
                We will get you the maximum tenure, higher loan amount, low
                processing fees & no hidden charges
              </div>
            </div>
            <div className="dealsBlock">
              <img src={Service}></img>
              <div className="dealsTitle">Doorstep Service</div>
              <div className="dealsSub">
                Our team will ensure that your entire application is processed
                right from the comfort of your home
              </div>
            </div>
          </div>
          <div className="dealsRow1">
            <div className="dealsBlock">
              <img src={Free}></img>
              <div className="dealsTitle">Hassle-free processing</div>
              <div className="dealsSub">
                Our Experts will make sure that the loan process is hassle free
                and gets approved in few days
              </div>
            </div>
            <div className="dealsBlock">
              <img src={Status}></img>
              <div className="dealsTitle">Loan Status Updates</div>
              <div className="dealsSub">
                Our team will give your constant updates our mobile app until
                the end of the process
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
          <div className="dealsRow2">
            <div className="dealsBlock">
              <img src={Checks}></img>
              <div className="dealsTitle">Multiple Eligibility Checks</div>
              <div className="dealsSub">
                Check your eligibility in various banks at same time without
                letting it affect your CIBIL score
              </div>
            </div>
            <div className="dealsBlock">
              <img src={Score}></img>
              <div className="dealsTitle">Low Cibil Score:</div>
              <div className="dealsSub">
                If you have a low CIBIL score? Then do not worry. Dr Finance
                will still help you process the application
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Loans;

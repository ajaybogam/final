import React from "react";
import "../css/about.css";
import "../css/loans.css";
import "../css/Stars.css";
import Star from "../Assets/Star.svg";
import Credit from "../Assets/Credit Cards.svg";
import Simple from "../Assets/Simple Process.svg";
import Understand from "../Assets/Understanding Needs.svg";
import Cards from "../Assets/Variety of Cards.svg";
import axios from "axios";
import Modal from "react-modal";
import Close from "../Assets/Close.svg";
import Success from "../Assets/Success.svg";
import Phone from "../Assets/Phone_Black.svg";
import Email from "../Assets/Email_Black.svg";
const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validateName=name=>{
  console.log(name)
  var letter= /^[a-zA-Z\s]*$/;
  if(name.match(letter)&& name.length>2){return true}
  else{return false}
  
}
const validateForm = errors => {
  let valid = true;
  Object.values(errors).forEach(val => val.length > 0 && (valid = false));
  return valid;
};
class CrediCard extends React.Component {
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
        (!validateName(value) )
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
      
        name:"",
        phone:"",
        email:''
      
    });
  };
  successModalClose = () => {
    this.setState({
      openSuccess: false,
    });
  };
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
  disableScroll = () => { document.body.style.overflow = 'hidden' }
  enableScroll = () => { document.body.removeAttribute('style')  }
  render() {
    const loantitle = {
      width: "80.8%",
    };
    const { name, phone, email, instrument } = this.state;
    return (
      <div>
        <Modal  
          style={{
            overlay: {
              background: "rgba(52,52,52,0.60)",
              overflow: "hidden",
            },
          }}
          className="ApplyModal"
          isOpen={this.state.openSuccess}
          onRequestClose={this.successModalClose}
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
        </Modal>
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
            <div className="aboutTitle " id="CreditTitle" style={loantitle}>
              We will help you pick the best credit card for you
            </div>
            <div className="aboutTitle-mobile" id="CreditTitle" style={loantitle}>
              We will help you pick the best credit card for you
            </div>
            <div className="aboutSubtitle">
              After a thorough analysis of your requirements, our experts will
              choose the credit card that fits your needs. It will not just help
              you spend but also earn money
            </div>
          </div>
          <img  className="image-mobile"  src={Credit}></img>
        </div>
        <div className="loansthrough">
          <img src={Star} className="star41"></img>
          <div className="loansTitle">credit cards through dr. finance</div>
          <div className="loansTitle-mobile">credit cards in dr. finance</div>
          <img src={Star} className="star42"></img>
          <div className="loansSub">
            There are a lot of advantages to using a credit card when chosen
            wisely and used responsibly. They offer rewards, protection, and
            convenience. Credit cards can be great for your financial well-being
            and you can also earn money just by using certain cards! Our experts
            will get in touch with you to collect all your requirements and
            understand your needs. We then analyse your needs and based on your
            eligibility we suggest you the best possible credit card. You can
            finish your entire application right from the comfort of your home.
          </div>
        </div>
        <div className="processed">
          <img src={Star} className="star43"></img>
          <div className="processedtitle">credit cards processed</div>
          <img src={Star} className="star44"></img>
          <div className="applyfor">
            <div className="catalog">Lifestyle</div>
            <div className="line"></div>
            <div className="catalog">Shopping</div>
            <div className="line"></div>
            <div className="catalog">Travel</div>
            <div className="line"></div>
            <div className="catalog">Rewards</div>
            <div className="line"></div>
            <div className="catalog">Cashback</div>
            <div className="line"></div>
            <div className="catalog">Professional</div>
          </div>
          <button className="applybtn" onClick={this.setModalOpen}>
            Apply Now
          </button>
        </div>
        <div className="loansthrough">
          <img src={Star} className="star45"></img>
          <div className="processTitle">
            why process credit cards through dr. finance?
          </div>
          <img src={Star} className="star46"></img>
          <div className="dealsRow1">
            <div className="dealsBlock">
              <img src={Simple}></img>
              <div className="dealsTitle">SIMPLE PROCESS</div>
              <div className="dealsSub">
                Finish your entire application process in a few simple steps.
                Apply from the comfort of your home
              </div>
            </div>
            <div className="dealsBlock">
              <img src={Understand}></img>
              <div className="dealsTitle">UNDERSTANDING YOU NEEDS</div>
              <div className="dealsSub">
                We analyse your requirements and suggest a credit card that fits
                perfectly for your needs
              </div>
            </div>
            <div className="dealsBlock">
              <img src={Cards}></img>
              <div className="dealsTitle">VARIETY OF CREDIT CARDS</div>
              <div className="dealsSub">
                From shopping to travel and dining to rewards, we process cards
                that fits you the best
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CrediCard;

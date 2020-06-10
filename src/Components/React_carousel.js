import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Icici from "../Partners/ICICI.png";
import Aditya from "../Partners/Aditya Birla.png";
import Axis from "../Partners/Axis.png";
import Bajaj from "../Partners/Bajaj Finserv.png";
import City from "../Partners/City Bank.png";
import Clix from "../Partners/Clix.png";
import DCB from "../Partners/DCB Bank.png";
import Dhani from "../Partners/Dhani.png";
import Fullerton from "../Partners/Fullerton India.png";
import Hdb from "../Partners/HDB.png";
import Hdfc from "../Partners/HDFC.png";
import Idfc from "../Partners/IDFC.png";
import Incred from "../Partners/InCred.png";
import Indus from "../Partners/IndusInd Bank.png";
import Kotak from "../Partners/Kotak.png";
import Muthoot from "../Partners/Muthoot Finance.png";
import Rbl from "../Partners/RBL.png";
import Shriram from "../Partners/Shriram.png";
import Standard from "../Partners/Standard Chartered.png";
import Yes from "../Partners/Yes Bank.png";
import Star from "../Assets/Star.svg";
import "../css/React_carousel.css"
import '../css/Partners.css'
class  React_Carousel extends React.Component{
  constructor(){
    super()
  }
render(){
  return (
    <div className='mobile-row'>
        <div className='row-title'>
        our financial partners
        </div>
        <Carousel id='one' >
      <div className="row">
        <img className='c_img'src={Icici} />
        <img className='c_img' src={Aditya}/>
        <img className='c_img' src={Axis}/>
        <img className='c_img'src={Bajaj}/>
      </div>
      <div className="row">
        <img className='c_img'src={City}/>
        <img className='c_img' src={Clix}/>
        <img className='c_img' src={DCB}/>
        <img className='c_img'src={Dhani}/>
      </div>
      <div className="row">
        <img className='c_img'src={Fullerton}/>
        <img className='c_img' src={Hdb}/>
        <img className='c_img' src={Hdfc}/>
        <img className='c_img'src={Idfc}/>
      </div>
      <div className="row">
        <img className='c_img'src={Incred}/>
        <img className='c_img' src={Indus}/>
        <img className='c_img' src={Kotak}/>
        <img className='c_img'src={Muthoot}/>
      </div>
      <div className="row">
        <img className='c_img'src={Rbl}/>
        <img className='c_img' src={Shriram}/>
        <img className='c_img' src={Standard}/>
        <img className='c_img'src={Yes}/>
      </div>
      
      
    </Carousel>
    </div>
  )
}
}
export default React_Carousel
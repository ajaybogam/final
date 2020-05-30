import React from "react";
import "./App.css";
import Solar from "./Components/Solar";
import Choose from "../src/Components/Choose";
import Hassle from "../src/Components/Hassle";
import Head from "../src/Components/Head";
import Partners from "../src/Components/Partners";
import Part from "../src/Components/Part";
import Footer from "../src/Components/Footer";
import Join from "../src/Components/Join";
import Profitable from "../src/Components/Profitable";
import Tracking from "../src/Components/Tracking";
import GetStarted from "../src/Components/GetStarted";
import About from "../src/Components/About";
import Team from "../src/Components/Team";
import AboutPage from "../src/Components/AboutPage";
import LoansPage from "../src/Components/LoansPage";
import Investments from "../src/Components/InvestmentsPage";
import Insurance from "../src/Components/InsurancePage";
import ContactPage from "../src/Components/ContactPage";
import JoinasReferral from "../src/Components/JoinasReferral";
import HomePage from "../src/Components/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import InvestmentsPage from "../src/Components/InvestmentsPage";
import InsurancePage from "../src/Components/InsurancePage";
import Faqs from "./Components/Faqs";
import TncPage from "../src/Components/TncPage";
import CreditPage from "../src/Components/CreditCardsPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/loans" component={LoansPage}></Route>
          <Route path="/investments" component={InvestmentsPage}></Route>
          <Route path="/insurance" component={InsurancePage}></Route>
          <Route path="/joinasreferral" component={JoinasReferral}></Route>
          <Route path="/contact" component={ContactPage}></Route>
          <Route path="/about" component={AboutPage}></Route>
          <Route path="/faqs" component={Faqs}></Route>
          <Route path="/termsandconditions" component={TncPage}></Route>
          <Route path="/creditcards" component={CreditPage}></Route>
          
        </Switch>
        {/* <HomePage /> */}
        {/* <JoinasReferral /> */}
        {/* <ContactPage /> */}
        {/* <Insurance /> */}
        {/* <Investments /> */}
        {/* <LoansPage /> */}
        {/* <AboutPage /> */}
        {/* <Solar /> */}
        {/* <Choose /> */}
        {/* <Hassle /> */}
        {/* <Part /> */}
        {/* <Join />
      <Profitable />
      <Tracking />
      <GetStarted />
      <Footer /> */}
      </div>
    </Router>
  );
}

export default App;

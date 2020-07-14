import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";

import AppHeader from "../src/Components/AppHeader";
import Footer from "../src/Components/Footer";

import AboutPage from "../src/Components/AboutPage";
import LoansPage from "../src/Components/LoansPage";
import ContactPage from "../src/Components/ContactPage";
import InvestmentsPage from "../src/Components/InvestmentsPage";
import InsurancePage from "../src/Components/InsurancePage";
import CreditPage from "../src/Components/CreditCardsPage";
import TandC from "../src/Components/TandC";
import JoinasReferral from "../src/Components/JoinasReferral";
import Faqs from "./Components/Faqs";

import "./App.css";
import AppTheme from "./app.theme";
import HomePage from "./Components/containers/home/HomePage";
import FotterUpdate from "./Components/FooterUpdate";
import TncPage from "./Components/TncPage";
import PrivacyPolicy from "./Components/PrivacyPolicy";
const routes = [
  { path: "/", component: HomePage, exact: true }, 
  { path: "/loans", component: LoansPage },
  { path: "/investments", component: InvestmentsPage },
  { path: "/insurance", component: InsurancePage },
  { path: "/creditcards", component: CreditPage },
  { path: "/joinasreferral", component: JoinasReferral },
  { path: "/about", component: AboutPage },
  { path: "/contact", component: ContactPage },
  { path: "/faqs", component: Faqs },
  { path: "/termsandconditions", component: TncPage },
  { path: "/privacypolicy", component: PrivacyPolicy },
];

function App() {
  return (
    <ThemeProvider theme={AppTheme}>
      <CSSReset />
      <Router>
        <div className="App">
          <AppHeader />
          <Switch>
            {routes.map((route, idx) => (
              <Route key={idx} {...route} />
            ))}
          </Switch>
          <FotterUpdate />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;

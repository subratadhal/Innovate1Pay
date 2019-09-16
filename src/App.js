import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Home from "./components/pages/home";
import Header from "./components/common/header/index";
import Footer from "./components/common/footer/index";
import IndividualRegistration from "./components/pages/individualRegistration";
import PersonalDetails from "./components/pages/individualRegistration/applicationForm/personalDetails";
import EducationalInfo from "./components/pages/individualRegistration/applicationForm/educationalInfo";
import EmploymentInfo from "./components/pages/individualRegistration/applicationForm/employmentInfo";
import PreviewAndPayment from "./components/pages/individualRegistration/applicationForm/previewAndPayment";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/individual/registration"
              component={IndividualRegistration}
            />
            <Route
              exact
              path="/individual/personal-info"
              component={PersonalDetails}
            />
            <Route
              exact
              path="/individual/educational-info"
              component={EducationalInfo}
            />
            <Route
              exact
              path="/individual/employment-info"
              component={EmploymentInfo}
            />
            <Route
              exact
              path="/individual/preview-and-payment"
              component={PreviewAndPayment}
            />
            <Redirect to="/" />
          </Switch>
          <Footer />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;

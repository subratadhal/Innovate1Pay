import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import TabContainer from "./tabContainer";

class Banner extends Component {
  render() {
    return (
      <section className="home-banner">
        <Container>
          <Row>
            <Col className="reg-form-container">
              <div className="reg-form">
                <div className="req-section">
                  <div className="req-title">Requirements</div>
                  <p>
                    To register as individual with CRFFN you will need to
                    provide the following:
                  </p>
                  <ul>
                    <li>Basic Personal Information.</li>
                    <li>Education Records.</li>
                    <li>Employment History.</li>
                  </ul>
                  <div className="warning-bar"></div>
                  <p className="p13">
                    All required fields must be filled before Application Form
                    can be submitted.
                    <br />
                    <br />
                    Please Note that the Application fees are non-refundable.
                  </p>
                </div>
                <div className="form-section">
                  <div className="form-title">Individual Application</div>
                  <TabContainer />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default Banner;

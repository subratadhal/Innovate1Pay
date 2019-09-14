import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Img1 from "../../../assets/images/1.png";
import Img2 from "../../../assets/images/2.png";
import Img3 from "../../../assets/images/3.png";

class ApplicationProcess extends Component {
  render() {
    return (
      <Container className="application-process">
        <Row>
          <h1>Application Process</h1>
        </Row>
        <Row className="ap-bg-con">
          <Col className="ap-icon-container">
            <img src={Img1} alt="" className="ap-icons" />
          </Col>
          <Col className="ap-icon-container">
            <img src={Img2} alt="" className="ap-icons" />
          </Col>
          <Col className="ap-icon-container">
            <img src={Img3} alt="" className="ap-icons" />
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>
              Fill All Required
              <br />
              Fields Correctly
            </h2>
            <p>
              Filled and saved at least one Educational Record and one
              Employment History
            </p>
          </Col>
          <Col>
            <h2>Submit and Payment</h2>
            <p>
              Accept the Declaration on page 4, Click Save & Proceed to Payment
            </p>
          </Col>
          <Col>
            <h2>Print and Bank Payment</h2>
            <p>
              Print the Acknowledgement slip, take it to the bank AND make
              payment.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ApplicationProcess;

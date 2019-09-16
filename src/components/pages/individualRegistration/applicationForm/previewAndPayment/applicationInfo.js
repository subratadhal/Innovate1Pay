import React, { Component } from "react";
import { Row, Col } from "reactstrap";

class ApplicationInfo extends Component {
  componentDidMount() {}
  render() {
    return (
      <div className="preview-container">
        <Row>
          <Col>
            <div className="pc-row">
              <div className="pc-label">Application Number</div>
              <div className="pc-text">
                <span className="highlight">CRFFNI2019090311751</span>
              </div>
            </div>
            <div className="pc-row">
              <div className="pc-label">APPLICATION APPROVAL STATUS</div>
              <div className="pc-text">Pending for Payment</div>
            </div>
            <div className="pc-row">
              <div className="pc-label">PAYMENT STATUS</div>
              <div className="pc-text">Payment not made</div>
            </div>
          </Col>
          <Col>
            <div className="pc-row">
              <div className="pc-label">Pin Number</div>
              <div className="pc-text">
                <span className="highlight">8930920</span>
              </div>
            </div>
            <div className="pc-row">
              <div className="pc-label">APPLICATION DATE</div>
              <div className="pc-text">2019-09-03</div>
            </div>
            <div className="pc-row">
              <div className="pc-label">PAYMENT TYPE</div>
              <div className="pc-text">Individual Application</div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ApplicationInfo;

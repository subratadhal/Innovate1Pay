import React, { Component } from "react";
import { Row, Col, Button, Form, FormGroup, Input } from "reactstrap";

class ContinueRegistration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      applicantNumberError: ""
    };
  }

  inputOnChange = e => {
    const name = e.target.name;
    const input = e.target.value ? e.target.value : "";
    this.setState({
      [name + "Error"]: "",
      [name]: input,
      [name + "Style"]: ""
    });
  };
  formSubmit = e => {
    e.preventDefault();
    const applicantNumber = document.getElementById("applicantNumber");
    const applicantNumberValue = applicantNumber.value;
    const applicantNumberName = applicantNumber.name;
    let validApplicantNumber = false;

    if (applicantNumberValue === "") {
      this.setState({
        [applicantNumberName + "Error"]: "Applicant Number field is required"
      });
    } else {
      validApplicantNumber = true;
    }

    const pin = document.getElementById("pin");
    const pinValue = pin.value;
    const pinName = pin.name;
    let validPin = false;

    if (pinValue === "") {
      this.setState({
        [pinName + "Error"]: "Pin field is required"
      });
    } else {
      validPin = true;
    }

    if (validApplicantNumber && validPin) {
      console.log("form submit1");
    }
  };
  render() {
    return (
      <Form onSubmit={this.formSubmit}>
        <Row>
          <Col>
            <FormGroup>
              <Input
                type="text"
                name="applicantNumber"
                id="applicantNumber"
                placeholder="Applicant Number*"
                onChange={this.inputOnChange}
              />
            </FormGroup>
            {this.state.applicantNumberError ? (
              <div className="error">{this.state.applicantNumberError}</div>
            ) : null}
          </Col>
        </Row>
        <Row>
          <Col sm={5}>
            <FormGroup>
              <Input
                type="text"
                name="pin"
                id="pin"
                placeholder="Pin*"
                onChange={this.inputOnChange}
              />
            </FormGroup>
            {this.state.pinError ? (
              <div className="error">{this.state.pinError}</div>
            ) : null}
          </Col>
        </Row>
        <Row>
          <Col sm={5}>
            <Button className="primary-btn">Login</Button>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default ContinueRegistration;

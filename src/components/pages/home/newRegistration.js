import React, { Component } from "react";
import { Row, Col, Button, Form, FormGroup, Input } from "reactstrap";

import validator from "validator";
import ClientCaptcha from "react-client-captcha";

class NewRegistration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      capchaCode: "",
      emailStyle: "",
      emailError: "",
      capchaStyle: "",
      capchaError: ""
    };
  }

  setCaptcha(val) {
    this.setState({
      capchaCode: val
    });
  }
  inputOnBlur = e => {
    const name = e.target.name;
    const input = e.target.value ? e.target.value : "";
    const type = e.target.type;

    if (validator.isEmpty(input)) {
      this.setState({
        [name + "Error"]: "",
        [name]: input,
        [name + "Style"]: ""
      });
    } else {
      if (type === "email") {
        if (validator.isEmail(input)) {
          this.setState({
            [name + "Error"]: "",
            [name]: input,
            [name + "Style"]: "bb-green"
          });
        } else {
          this.setState({
            [name + "Error"]: "",
            [name]: input,
            [name + "Style"]: "bb-red"
          });
        }
      } else if (name === "capcha") {
        if (input === this.state.capchaCode) {
          this.setState({
            [name + "Error"]: "",
            [name]: input,
            [name + "Style"]: "bb-green"
          });
        } else {
          this.setState({
            [name + "Error"]: "",
            [name]: input,
            [name + "Style"]: "bb-red"
          });
        }
      }
    }
  };
  inputOnChange = e => {
    const name = e.target.name;
    const input = e.target.value ? e.target.value : "";
    const type = e.target.type;

    if (validator.isEmpty(input)) {
      this.setState({
        [name + "Error"]: "",
        [name]: input,
        [name + "Style"]: ""
      });
    } else {
      if (type === "email") {
        if (validator.isEmail(input)) {
          this.setState({
            [name + "Error"]: "",
            [name]: input,
            [name + "Style"]: "bb-green"
          });
        }
      } else if (name === "capcha") {
        if (input === this.state.capchaCode) {
          this.setState({
            [name + "Error"]: "",
            [name]: input,
            [name + "Style"]: "bb-green"
          });
        }
      }
    }
  };
  formSubmit = e => {
    e.preventDefault();
    let email = document.getElementById("email");
    const emailValue = email.value;
    const emailName = email.name;
    let validEmail = false;

    if (!validator.isEmail(emailValue)) {
      this.setState({
        [emailName + "Error"]: "Email field is required",
        [emailName + "Style"]: ""
      });
    } else if (emailValue === "") {
      this.setState({
        [emailName + "Error"]: "Email field is required",
        [emailName + "Style"]: ""
      });
    } else {
      validEmail = true;
    }

    let capcha = document.getElementById("capcha");
    const capchaValue = capcha.value;
    const capchaName = capcha.name;
    let validCapcha = false;

    if (capchaValue !== this.state.capchaCode) {
      this.setState({
        [capchaName + "Error"]: "Capcha field is required",
        [capchaName + "Style"]: ""
      });
    } else {
      validCapcha = true;
    }

    if (validEmail && validCapcha) {
      console.log("form submit");
    }
  };
  render() {
    return (
      <Form onSubmit={this.formSubmit}>
        <Row>
          <Col>
            <FormGroup>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Verify Email address*"
                onChange={this.inputOnChange}
                onBlur={this.inputOnBlur}
                className={this.state.emailStyle}
              />
            </FormGroup>
            {this.state.emailError ? (
              <div className="error">{this.state.emailError}</div>
            ) : null}
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <ClientCaptcha
              charsCount={6}
              width={200}
              height={58}
              fontSize={35}
              backgroundColor="#e3e3e3"
              fontColor="#1752a2"
              captchaCode={code => this.setCaptcha(code)}
            />
          </Col>
          <Col sm={6}>
            <FormGroup>
              <Input
                type="text"
                name="capcha"
                id="capcha"
                onChange={this.inputOnChange}
                onBlur={this.inputOnBlur}
                placeholder="Enter code as displayed*"
                className={this.state.capchaStyle}
              />
            </FormGroup>
            {this.state.capchaError ? (
              <div className="error">{this.state.capchaError}</div>
            ) : null}
          </Col>
        </Row>
        <Row>
          <Col sm={5}>
            <Button className="primary-btn">Submit</Button>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default NewRegistration;

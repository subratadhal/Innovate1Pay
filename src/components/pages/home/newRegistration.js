import React, { Component } from "react";
import { Row, Col, Button, Form, FormGroup, Input, Alert } from "reactstrap";
import { connect } from "react-redux";
import validator from "validator";
import ClientCaptcha from "react-client-captcha";
import { createPost } from "../../../actions";

class NewRegistration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      capchaCode: "",
      emailStyle: "",
      emailError: "",
      capchaStyle: "",
      capchaError: "",
      registerSuccess: false
    };
  }
  componentWillReceiveProps(props) {
    //console.log("componentWillReceiveProps", props);
    if (props.type === "REGISTER_USER") {
      console.log("one post");
      this.setState({
        registerSuccess: true
      });
    }
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
      this.props.onAddPost(this.state);
    }
  };
  render() {
    const { registerSuccess } = this.state;
    return (
      <React.Fragment>
        {registerSuccess ? (
          <Alert color="success">
            An email of confirmation has been sent to your given email address.
            <br />
            The Confirmation link will expire after three months.
          </Alert>
        ) : (
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
                    autoComplete="off"
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
                    autoComplete="off"
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
        )}
      </React.Fragment>
    );
  }
}

//export default NewRegistration;

const mapDispatchToProps = dispatch => {
  return {
    onAddPost: post => {
      dispatch(createPost(post));
    }
  };
};

const stateProps = state => {
  return {
    posts: state.posts.posts,
    type: state.posts.type
  };
};

export default connect(
  stateProps,
  mapDispatchToProps
)(NewRegistration);

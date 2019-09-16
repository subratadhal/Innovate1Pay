import React, { Component } from "react";
import { Container, Row, Col, Button, Form } from "reactstrap";
import Widget from "../../../common/others/widget";
import InputElement from "../../../common/formElement/inputElement";
import SelectElement from "../../../common/formElement/selectElement";
import RadioInput from "../../../common/formElement/radioInput";
import DatepickerElement from "../../../common/formElement/datepickerElement";
import NumberElement from "../../../common/formElement/numberElement";
import MobNumberElement from "../../../common/formElement/mobNumberElement";
import UploadPhotoElement from "../../../common/formElement/uploadPhotoElement";
class PersonalDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      firstName: "",
      middleName: "",
      lastName: "",
      gender: "male",
      dateofBirth: "",
      maritalStatus: "",
      bvn: "",
      highestLevelofEducation: "",
      contactAddress: "",
      mainPostalAddress: "",
      countryofOrigin: "",
      state: "",
      stateList: ["--Please Select--"],
      lga: "",
      lgaList: ["--Please Select--"],
      town: "",
      cityProvin: false,
      preferedValidationCenter: "",
      freightForwardingAssociationAffiliation: "",
      category: "",
      insurerName: "",
      insurerPolicyNo: "",
      telephoneNumber: "",
      mobileNumber: "",
      confirmMobileNumber: "",
      pasportPhoto: "",
      stateProvince: "",
      cityTown: ""
    };
  }
  checkFormValidElement = () => {
    let array = [
      "title",
      "firstName",
      "middleName",
      "lastName",
      "dateofBirth",
      "bvn",
      "highestLevelofEducation",
      "contactAddress",
      "mainPostalAddress",
      "countryofOrigin",
      "state",
      "lga",
      "preferedValidationCenter",
      "freightForwardingAssociationAffiliation",
      "category",
      "telephoneNumber",
      "mobileNumber",
      "confirmMobileNumber",
      "pasportPhoto",
      "stateProvince",
      "cityTown"
    ];
    let count = 0;
    do {
      const name = array[count];
      if (this.state[name] === "") {
        const element = document.getElementById(name);
        if (element !== null) {
          element.classList.add("is-invalid");
        }
      }
      count += 1;
    } while (count < array.length);
  };
  formSubmit = e => {
    e.preventDefault();
    this.checkFormValidElement();
  };
  inputOnChange = (v, n) => {
    //console.log(v, n);
    this.setState({
      [n]: v
    });
  };
  selectOnChange = (v, n) => {
    console.log(v, n);
    if (v === "Select") {
      this.setState({
        [n]: ""
      });
    } else {
      //check state only
      if (n === "countryofOrigin") {
        if (v === "128") {
          //check Nigeria value 128
          this.setState({
            [n]: v,
            stateList: ["--Please Select--"]
          });
          console.log("Nigeria");
        } else {
          // for other country state should be Others.
          this.setState({
            [n]: v,
            stateList: ["--Please Select--", "Others"]
          });
        }
      } else if (n === "state") {
        if (v === "Others") {
          this.setState({
            [n]: v,
            cityProvin: true
          });
        } else {
          //other state for Nigeria
          this.setState({
            [n]: v,
            cityProvin: false
          });
        }
      } else {
        //for other select
        this.setState({
          [n]: v
        });
      }
    }
  };
  radioOnChange = (v, n) => {
    this.setState({
      [n]: v
    });
  };
  uploadPhoto = src => {
    this.setState({
      pasportPhoto: src
    });
  };
  render() {
    console.log(this.state);
    const { stateList, lgaList, cityProvin } = this.state;
    return (
      <React.Fragment>
        <section className="application-container">
          <Widget
            tab1={"active"}
            tab2={"incomplete"}
            tab3={"incomplete"}
            tab4={"incomplete"}
          />
          <Container>
            <Row>
              <Col>
                <div className="app-wrapper">
                  <Form onSubmit={this.formSubmit}>
                    <div className="app-body">
                      <div className="app-body__left">
                        <Row>
                          <Col className="mr30">
                            <div className="main-heading">
                              Personal Information
                            </div>
                            <SelectElement
                              type={"select"}
                              name={"Title"}
                              id={"title"}
                              selectOnChange={this.selectOnChange}
                              req={true}
                            />
                            <InputElement
                              type={"text"}
                              name={"First Name"}
                              id={"firstName"}
                              inputOnChange={this.inputOnChange}
                              req={true}
                            />
                            <InputElement
                              type={"text"}
                              name={"Middle Name"}
                              id={"middleName"}
                              inputOnChange={this.inputOnChange}
                              req={true}
                            />
                            <InputElement
                              type={"text"}
                              name={"Last Name"}
                              id={"lastName"}
                              inputOnChange={this.inputOnChange}
                              req={true}
                            />
                            <RadioInput
                              label={"Gender"}
                              radioLabel1={"Male"}
                              radioValue1={"male"}
                              radioLabel2={"Female"}
                              radioValue2={"female"}
                              id={"gender"}
                              radioOnChange={this.radioOnChange}
                            />
                            <DatepickerElement
                              label={"Date of Birth"}
                              id={"dateofBirth"}
                              inputOnChange={this.inputOnChange}
                            />
                            <RadioInput
                              label={"Marital Status"}
                              radioLabel1={"Single"}
                              radioValue1={"single"}
                              radioLabel2={"Married"}
                              radioValue2={"married"}
                              id={"maritalStatus"}
                              radioOnChange={this.radioOnChange}
                            />
                            <InputElement
                              type={"text"}
                              name={"BVN"}
                              id={"bvn"}
                              inputOnChange={this.inputOnChange}
                              req={true}
                            />
                            <SelectElement
                              type={"select"}
                              name={"Highest Level of Education"}
                              id={"highestLevelofEducation"}
                              selectOnChange={this.selectOnChange}
                            />
                            <UploadPhotoElement
                              name={"Pasport Photo"}
                              id="pasportPhoto"
                              uploadPhoto={this.uploadPhoto}
                            />
                          </Col>
                          <Col className="ml30">
                            <div className="main-heading">
                              <div className="main-heading">
                                Contact Information
                              </div>
                              <InputElement
                                type={"textarea"}
                                name={"Contact Address"}
                                id={"contactAddress"}
                                inputOnChange={this.inputOnChange}
                                req={true}
                              />
                              <InputElement
                                type={"textarea"}
                                name={"Main Postal Address"}
                                id={"mainPostalAddress"}
                                inputOnChange={this.inputOnChange}
                                req={true}
                              />
                              <InputElement
                                type={"email"}
                                name={"email"}
                                id={"email"}
                                inputOnChange={this.inputOnChange}
                                req={true}
                              />
                              <NumberElement
                                label={"Telephone Number"}
                                id={"telephoneNumber"}
                                ex={"E.g. 245-528-8745-985"}
                                inputOnChange={this.inputOnChange}
                              />
                              <MobNumberElement
                                label={"Mobile Number"}
                                id={"mobileNumber"}
                                ex={
                                  "(format: +[10-14] digit no,eg: +1234567891)"
                                }
                                inputOnChange={this.inputOnChange}
                              />
                              <MobNumberElement
                                label={"Confirm Mobile Number"}
                                id={"confirmMobileNumber"}
                                inputOnChange={this.inputOnChange}
                              />
                              <SelectElement
                                type={"select"}
                                name={"Country of Origin"}
                                id={"countryofOrigin"}
                                selectOnChange={this.selectOnChange}
                              />
                              <SelectElement
                                type={"select"}
                                name={"State"}
                                id={"state"}
                                selectOnChange={this.selectOnChange}
                                stateList={stateList}
                              />
                              {cityProvin ? (
                                <React.Fragment>
                                  <InputElement
                                    type={"text"}
                                    name={"State/Province"}
                                    id={"stateProvince"}
                                    inputOnChange={this.inputOnChange}
                                    req={true}
                                  />
                                  <InputElement
                                    type={"text"}
                                    name={"City/Town"}
                                    id={"cityTown"}
                                    inputOnChange={this.inputOnChange}
                                    req={true}
                                  />
                                </React.Fragment>
                              ) : (
                                <SelectElement
                                  type={"select"}
                                  name={"LGA"}
                                  id={"lga"}
                                  selectOnChange={this.selectOnChange}
                                  lgaList={lgaList}
                                />
                              )}
                              <InputElement
                                type={"text"}
                                name={"Town"}
                                id={"town"}
                                req={false}
                                inputOnChange={this.inputOnChange}
                              />
                            </div>
                          </Col>
                        </Row>
                        <Row className="mt30">
                          <Col>
                            <div className="main-heading">
                              Other Information
                              <hr />
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col className="mr30">
                            <SelectElement
                              type={"select"}
                              name={"Prefered Validation Center"}
                              id={"preferedValidationCenter"}
                              selectOnChange={this.selectOnChange}
                            />
                            <SelectElement
                              type={"select"}
                              name={
                                "Freight Forwarding Association Affiliation"
                              }
                              id={"freightForwardingAssociationAffiliation"}
                              selectOnChange={this.selectOnChange}
                            />
                            <SelectElement
                              type={"select"}
                              name={"Category"}
                              id={"category"}
                              selectOnChange={this.selectOnChange}
                            />
                          </Col>
                          <Col className="ml30">
                            <InputElement
                              type={"text"}
                              name={"Insurer Name"}
                              id={"insurerName"}
                              req={false}
                              inputOnChange={this.inputOnChange}
                            />
                            <InputElement
                              type={"text"}
                              name={"Insurer Policy No"}
                              id={"insurerPolicyNo"}
                              req={false}
                              inputOnChange={this.inputOnChange}
                            />
                          </Col>
                        </Row>
                      </div>
                    </div>
                    <div className="app-footer">
                      <Button className="primary-btn">Save & Continue</Button>
                    </div>
                  </Form>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default PersonalDetails;

// Image cropper in redux: rotation, zoom, fixed/dynamic aspect ratio. Uses reselect for intelligent caching. Port from fengyuanchen/cropper.

// Demo: lapanoid.github.io/redux-cropper

// Code: github.com/lapanoid/redux-cropper

import React, { Component } from "react";
import { Row, Col, Button, Form } from "reactstrap";
import InputElement from "../../../../common/formElement/inputElement";
import SelectElement from "../../../../common/formElement/selectElement";
import DatepickerElement from "../../../../common/formElement/datepickerElement";
class EducationForm extends Component {
  componentDidMount() {}
  inputOnChange = (v, n) => {
    this.setState({
      [n]: v
    });
  };
  selectOnChange = (v, n) => {
    if (v === "Select") {
      this.setState({
        [n]: ""
      });
    } else {
      this.setState({
        [n]: v
      });
    }
  };
  render() {
    return (
      <React.Fragment>
        <Row>
          <Col sm={6}>
            <div className="sub-heading">Add New Educational Information</div>
            <Form>
              <InputElement
                type={"text"}
                name={"Name of Institution"}
                id={"nameofInstitution"}
                inputOnChange={this.inputOnChange}
                req={true}
              />
              <SelectElement
                type={"select"}
                name={"Institution Category"}
                id={"institutionCategory"}
                selectOnChange={this.selectOnChange}
                req={true}
              />
              <DatepickerElement
                label={"Graduated Date"}
                id={"graduatedDate"}
                inputOnChange={this.inputOnChange}
              />
              <InputElement
                type={"text"}
                name={"Qualification Obtained"}
                id={"qualificationObtained"}
                inputOnChange={this.inputOnChange}
                req={true}
              />
              <Button className="form-btn">Submit</Button>
            </Form>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default EducationForm;

import React, { Component } from "react";
import { Row, Col, Button, Form } from "reactstrap";
import InputElement from "../../../../common/formElement/inputElement";
import SelectElement from "../../../../common/formElement/selectElement";
import DatepickerElement from "../../../../common/formElement/datepickerElement";
class EmploymentForm extends Component {
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
            <div className="sub-heading">Add New Employment Information</div>
            <Form>
              <InputElement
                type={"text"}
                name={"Employer Name"}
                id={"employerName"}
                inputOnChange={this.inputOnChange}
                req={true}
              />
              <SelectElement
                type={"select"}
                name={"Employer Status"}
                id={"employerStatus"}
                selectOnChange={this.selectOnChange}
                req={true}
              />
              <InputElement
                type={"text"}
                name={"Position"}
                id={"position"}
                inputOnChange={this.inputOnChange}
                req={true}
              />
              <InputElement
                type={"text"}
                name={"Employer Address"}
                id={"employerAddress"}
                inputOnChange={this.inputOnChange}
                req={true}
              />
              <DatepickerElement
                label={"Period From"}
                id={"periodFrom"}
                inputOnChange={this.inputOnChange}
              />
              <DatepickerElement
                label={"Period To"}
                id={"periodTo"}
                inputOnChange={this.inputOnChange}
              />

              <Button className="form-btn">Submit</Button>
            </Form>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default EmploymentForm;

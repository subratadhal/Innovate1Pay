import React, { Component } from "react";
import { FormGroup, Label, CustomInput } from "reactstrap";

class RadioInput extends Component {
  onChange = e => {
    this.props.radioOnChange(e.target.value, this.props.id);
  };
  render() {
    return (
      <FormGroup className="form-element mt20">
        <Label for={this.props.id}>
          {this.props.label}
          <span>*</span>
        </Label>
        <CustomInput
          type="radio"
          id={this.props.id + 1}
          name={this.props.id}
          label={this.props.radioLabel1}
          onChange={this.onChange}
          value={this.props.radioValue1}
          defaultChecked
        />
        <CustomInput
          type="radio"
          id={this.props.id + 2}
          name={this.props.id}
          label={this.props.radioLabel2}
          onChange={this.onChange}
          value={this.props.radioValue2}
        />
      </FormGroup>
    );
  }
}

export default RadioInput;

//https://www.npmjs.com/package/react-datepicker

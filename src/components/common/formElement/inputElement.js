import React, { Component } from "react";
import { FormGroup, Label, Input } from "reactstrap";
import validator from "validator";

class InputElement extends Component {
  onChange = e => {
    const val = e.target.value;
    const name = e.target.name;
    if (!validator.isEmpty(val)) {
      const element = document.getElementById(name);
      element.classList.remove("is-invalid");
    }
    this.props.inputOnChange(val, name);
  };
  render() {
    return (
      <FormGroup className="form-element">
        <Label for={this.props.id}>
          {this.props.name}
          {this.props.req ? <span>*</span> : null}
        </Label>
        <Input
          type={this.props.type}
          name={this.props.id}
          id={this.props.id}
          onChange={this.onChange}
          readOnly={this.props.name === "email" ? true : null}
        />
      </FormGroup>
    );
  }
}

export default InputElement;

import React, { Component } from "react";
import { FormGroup, Label } from "reactstrap";
import MaskedInput from "react-text-mask";
import classNames from "classnames";
class NumberElement extends Component {
  handleChange = v => {
    this.props.inputOnChange(v, this.props.id);
  };
  render() {
    const ex = this.props.ex;
    var classNumber = classNames("form-element form-group", {
      mb26: ex !== undefined
    });
    return (
      <FormGroup className={classNumber}>
        <Label for={this.props.id}>
          {this.props.label}
          <span>*</span>
        </Label>
        <MaskedInput
          mask={[
            /[1-9]/,
            /\d/,
            /\d/,
            "-",
            /\d/,
            /\d/,
            /\d/,
            "-",
            /\d/,
            /\d/,
            /\d/,
            /\d/,
            "-",
            /\d/,
            /\d/,
            /\d/
          ]}
          className="form-control"
          guide={false}
          id={this.props.id}
          onBlur={() => {}}
          onChange={e => this.handleChange(e.target.value)}
        />
        {this.props.ex ? (
          <span className="example">{this.props.ex}</span>
        ) : null}
      </FormGroup>
    );
  }
}

export default NumberElement;

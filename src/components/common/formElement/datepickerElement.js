import React, { Component } from "react";
import { FormGroup, Label } from "reactstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class DatepickerElement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null
    };
  }

  onChange = date => {
    this.setState({
      startDate: date
    });
    this.props.inputOnChange(date, this.props.id);
  };
  render() {
    return (
      <FormGroup className="form-element">
        <Label for={this.props.id}>
          {this.props.label}
          <span>*</span>
        </Label>
        <DatePicker
          selected={this.state.startDate}
          onChange={this.onChange}
          id={this.props.id}
        />
      </FormGroup>
    );
  }
}

export default DatepickerElement;

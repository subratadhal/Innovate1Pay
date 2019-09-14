import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class IndividualRegistration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/individual/personal-info" />;
    }
  };

  componentDidMount() {
    const qs = new URLSearchParams(this.props.location.search);
    const token = qs.get("id");
    console.log(token);
  }
  render() {
    return (
      <React.Fragment>
        <h1>IndividualRegistration</h1>
        <div>
          {this.renderRedirect()}
          <button onClick={this.setRedirect}>Redirect</button>
        </div>
      </React.Fragment>
    );
  }
}

export default IndividualRegistration;

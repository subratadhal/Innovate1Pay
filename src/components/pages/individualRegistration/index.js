import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Container, Row, Col, Alert } from "reactstrap";
import PostList from "../../PostList";
import CreatePost from "../../CreatePost";
import NewPost from "../../NewPost";
//https://appdividend.com/2018/06/15/react-redux-axios-tutorial-example/

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
      <section class="application-container ">
        <Container>
          <Row>
            {/* <Col>
              <NewPost />
            </Col>
            <Col>
              <PostList />
            </Col> */}
            <Col>
              <div className="app-wrapper mt50">
                <div className="app-body">
                  <div className="app-body__left">
                    <div class="main-heading">Individual Application</div>
                    <Alert color="primary">
                      Sorry, You can not proceed further in the process as you
                      have already validated your email address.
                    </Alert>

                    <div>
                      {this.renderRedirect()}
                      <button onClick={this.setRedirect}>Redirect</button>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default IndividualRegistration;

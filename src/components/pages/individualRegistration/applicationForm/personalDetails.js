import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import Widget from "../../../common/others/widget";

class PersonalDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
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
                  <div className="app-body">
                    <div className="app-body__left">
                      <Row>
                        <Col>
                          <div className="main-heading">
                            Personal Information
                          </div>
                        </Col>
                        <Col>
                          <div className="main-heading">
                            Contact Information
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                  <div className="app-footer">
                    <Button className="primary-btn">Save & Continue</Button>
                  </div>
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

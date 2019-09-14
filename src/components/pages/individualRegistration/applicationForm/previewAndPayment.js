import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import Widget from "../../../common/others/widget";

class PreviewAndPayment extends Component {
  componentDidMount() {}
  render() {
    return (
      <React.Fragment>
        <section className="application-container">
          <Widget
            tab1={"complete"}
            tab2={"complete"}
            tab3={"complete"}
            tab4={"active"}
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
                            Individual Application
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                  <div className="app-footer">
                    <Button className="primary-btn">I/We Agree</Button>
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

export default PreviewAndPayment;

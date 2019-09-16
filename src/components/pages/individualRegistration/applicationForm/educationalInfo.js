import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import Widget from "../../../common/others/widget";
import EducationlTips from "../../../common/others/educationlTips";
import EducationTable from "./education/educationTable";
import EducationForm from "./education/educationForm";

class EducationalInfo extends Component {
  componentDidMount() {}
  render() {
    return (
      <React.Fragment>
        <section className="application-container">
          <Widget
            tab1={"complete"}
            tab2={"active"}
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
                            Individual Educational Information
                          </div>
                          <EducationTable />
                          <EducationForm />
                        </Col>
                      </Row>
                    </div>
                    <EducationlTips />
                  </div>
                  <div className="app-footer">
                    <Button disabled className="primary-btn">
                      Save & Continue
                    </Button>
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

export default EducationalInfo;

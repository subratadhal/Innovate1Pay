import React, { Component } from "react";
import { Row, Col, Button, CustomInput } from "reactstrap";
import PersonalInfo from "./personalInfo";
import ApplicationInfo from "./applicationInfo";
import EducationTable from "../education/educationTable";
import EmploymentTable from "../employment/employmentTable";
class Preview extends Component {
  componentDidMount() {}
  render() {
    return (
      <React.Fragment>
        <div className="app-wrapper">
          <div className="app-body">
            <div className="app-body__left">
              <Row>
                <Col>
                  <div className="main-heading">
                    Individual Application
                    <p>Please Review The Application Details Bellow:</p>
                  </div>
                  <ApplicationInfo />
                  <PersonalInfo />
                  <div className="table-preview">
                    <p>Education History</p>
                    <EducationTable />
                  </div>
                  <div className="table-preview">
                    <p>Employment History</p>
                    <EmploymentTable />
                  </div>
                  <div className="table-preview">
                    <p>
                      <strong>Declaration</strong>
                    </p>
                    <div>
                      <CustomInput
                        type="checkbox"
                        id="dd"
                        label="I/We declare that"
                      />
                    </div>
                    <div>
                      <ul>
                        <li>
                          All information and document provided are correct
                        </li>
                        <li>
                          I/We shall conduct our business abiding by the CRFFN
                          Code of Professional Conduct and CRFFN Act
                        </li>
                        <li>
                          I/We will offer to the general public services in line
                          international standards of freight forwarding and also
                          promote same
                        </li>
                      </ul>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
          <div className="app-footer">
            <Button className="primary-btn">I/We Agree</Button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Preview;

import React, { Component } from "react";
import { Row, Col, Button } from "reactstrap";

class PersonalInfo extends Component {
  componentDidMount() {}
  render() {
    return (
      <div className="preview-container">
        <Button className="edit">
          <i className="fa fa-pen"></i>
        </Button>
        <Row>
          <Col sm={6}>
            <div className="pc-row">
              <div className="pc-label">FULL NAME</div>
              <div className="pc-text">Mr. Amar Rai</div>
            </div>
            <div className="pc-row">
              <div className="pc-label">EMAIL</div>
              <div className="pc-text">amar@email.com</div>
            </div>
            <div className="pc-row">
              <div className="pc-label">MAIN PHONE</div>
              <div className="pc-text">98569874589</div>
            </div>
            <div className="pc-row">
              <div className="pc-label">BVN</div>
              <div className="pc-text">8569874589</div>
            </div>
            <div className="pc-row">
              <div className="pc-label">GENDER</div>
              <div className="pc-text">Male</div>
            </div>
            <div className="pc-row">
              <div className="pc-label">DATE OF BIRTH</div>
              <div className="pc-text">1980-04-01</div>
            </div>
            <div className="pc-row">
              <div className="pc-label">MARITAL STATUS</div>
              <div className="pc-text">Single</div>
            </div>
            <div className="pc-row">
              <div className="pc-label">POSTAL ADDRESS</div>
              <div className="pc-text">Part Street</div>
            </div>
            <div className="pc-row">
              <div className="pc-label">COUNTRY</div>
              <div className="pc-text">India</div>
            </div>
            <div className="pc-row">
              <div className="pc-label">STATE</div>
              <div className="pc-text">SAS Nagar</div>
            </div>
            <div className="pc-row">
              <div className="pc-label">CITY</div>
              <div className="pc-text">Mohali</div>
            </div>
          </Col>
          <Col sm={5}>
            <div className="pc-row wb-column">
              <div className="pc-label wblock">PASSPORT PHOTO</div>
              <div className="pc-text wblock">
                <div className="photo-prev"></div>
              </div>
            </div>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <div className="pc-row">
              <div className="pc-label">PREFERED VALIDATION CENTER</div>
              <div className="pc-text">Abuja</div>
            </div>
            <div className="pc-row">
              <div className="pc-label">
                FREIGHT FORWARDING ASSOCIATION AFFILIATION
              </div>
              <div className="pc-text">ANCLA</div>
            </div>
            <div className="pc-row">
              <div className="pc-label">CATEGORY</div>
              <div className="pc-text">Staff Freight Forwarder</div>
            </div>
          </Col>
          <Col>
            <div className="pc-row">
              <div className="pc-label">INSURER NAME</div>
              <div className="pc-text">Daljit Singh</div>
            </div>
            <div className="pc-row">
              <div className="pc-label">INSURER POLICY NO</div>
              <div className="pc-text">1245236356346346</div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default PersonalInfo;

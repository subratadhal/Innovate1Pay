import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Widget from "../../../common/others/widget";
import Preview from "./previewAndPayment/preview";
import Payment from "./previewAndPayment/payment";

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
                {/* <Preview /> */}
                <Payment />
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default PreviewAndPayment;

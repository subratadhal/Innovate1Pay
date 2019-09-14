import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import classNames from "classnames";
class Widget extends Component {
  render() {
    const tab1 = this.props.tab1;
    var tab1class = classNames("app-widget-section", {
      "app-widget-section--active": tab1 == "active",
      "app-widget-section--complete": tab1 == "complete"
    });
    const tab2 = this.props.tab2;
    var tab2class = classNames("app-widget-section", {
      "app-widget-section--active": tab2 == "active",
      "app-widget-section--complete": tab2 == "complete"
    });
    const tab3 = this.props.tab3;
    var tab3class = classNames("app-widget-section", {
      "app-widget-section--active": tab3 == "active",
      "app-widget-section--complete": tab3 == "complete"
    });
    const tab4 = this.props.tab4;
    var tab4class = classNames("app-widget-section", {
      "app-widget-section--active": tab4 == "active",
      "app-widget-section--complete": tab4 == "complete"
    });
    return (
      <div className="app-widget">
        <Container>
          <Row>
            <Col>
              <div className={tab1class}>
                <div className="app-widget-section__icon"></div>
                <div className="app-widget-section__text">Personal Info</div>
              </div>
            </Col>
            <Col>
              <div className={tab2class}>
                <div className="app-widget-section__icon"></div>
                <div className="app-widget-section__text">Educational Info</div>
              </div>
            </Col>
            <Col>
              <div className={tab3class}>
                <div className="app-widget-section__icon"></div>
                <div className="app-widget-section__text">Employmetnt Info</div>
              </div>
            </Col>
            <Col>
              <div className={tab4class}>
                <div className="app-widget-section__icon"></div>
                <div className="app-widget-section__text">Pay and Preview</div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Widget;

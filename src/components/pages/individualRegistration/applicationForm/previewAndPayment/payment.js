import React, { Component } from "react";
import {
  Row,
  Col,
  Button,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import classnames from "classnames";

class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "1"
    };
  }
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
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
                    Payment
                    <div className="clearfix"></div>
                    <p className="leftpara">
                      Application No. <span>CRFFNI2019090311751</span> Pin No.{" "}
                      <span>8930920</span>
                    </p>
                    <p className="rightpara">
                      Amount: <span>$5000</span>
                    </p>
                    <div className="clearfix"></div>
                  </div>
                  <div className="payment-tab-container">
                    <div className="tab-links">
                      <Nav tabs>
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: this.state.activeTab === "1"
                            })}
                            onClick={() => {
                              this.toggle("1");
                            }}
                          >
                            <span className="bank"></span>Cash @ Bank
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: this.state.activeTab === "2"
                            })}
                            onClick={() => {
                              this.toggle("2");
                            }}
                          >
                            <span className="card"></span>Card / Netbanking
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: this.state.activeTab === "3"
                            })}
                            onClick={() => {
                              this.toggle("3");
                            }}
                          >
                            <span className="wallet"></span>Wallet
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: this.state.activeTab === "4"
                            })}
                            onClick={() => {
                              this.toggle("4");
                            }}
                          >
                            <span className="pos"></span>POS
                          </NavLink>
                        </NavItem>
                      </Nav>
                    </div>
                    <div className="tab-box">
                      <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="1">
                          <Row>
                            <Col sm="12">
                              <div className="gateway-row">
                                <div className="gateway-row__icons innovate1pay"></div>
                                <div className="gateway-row__text">
                                  Innovate1pay
                                </div>
                                <div className="gateway-row__action">
                                  <Button>Pay</Button>
                                </div>
                              </div>
                              <div className="gateway-row">
                                <div className="gateway-row__icons newPaymentsPlatform"></div>
                                <div className="gateway-row__text">
                                  New Payments
                                  <br />
                                  Platform(NPP)
                                </div>
                                <div className="gateway-row__action">
                                  <Button>Pay</Button>
                                </div>
                              </div>
                              <div className="gateway-row">
                                <div className="gateway-row__icons teasyPay"></div>
                                <div className="gateway-row__text">
                                  TeasyPay
                                </div>
                                <div className="gateway-row__action">
                                  <Button>Pay</Button>
                                </div>
                              </div>
                              <div className="gateway-row">
                                <div className="gateway-row__icons saanaPAY"></div>
                                <div className="gateway-row__text">
                                  SaanaPAY
                                </div>
                                <div className="gateway-row__action">
                                  <Button>Pay</Button>
                                </div>
                              </div>
                            </Col>
                          </Row>
                        </TabPane>
                        <TabPane tabId="2">
                          <Row>
                            <Col sm="12">
                              <h4>Tab 2 Contents</h4>
                            </Col>
                          </Row>
                        </TabPane>
                        <TabPane tabId="3">
                          <Row>
                            <Col sm="12">
                              <h4>Tab 2 Contents</h4>
                            </Col>
                          </Row>
                        </TabPane>
                        <TabPane tabId="4">
                          <Row>
                            <Col sm="12">
                              <h4>Tab 2 Contents</h4>
                            </Col>
                          </Row>
                        </TabPane>
                      </TabContent>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Payment;

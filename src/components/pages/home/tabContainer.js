import React, { Component } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import classnames from "classnames";
import NewRegistration from "./newRegistration";
import ContinueRegistration from "./continueRegistration";

class TabContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "1"
    };
  }

  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  };

  render() {
    //console.log(this.state);
    return (
      <section className="tab-container">
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "1" })}
              onClick={() => {
                this.toggle("1");
              }}
            >
              <span>New Application</span>
              <span>For new application</span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "2" })}
              onClick={() => {
                this.toggle("2");
              }}
            >
              <span>Continue Application</span>
              <span>To continue an already exsisting application</span>
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <NewRegistration />
          </TabPane>
          <TabPane tabId="2">
            <ContinueRegistration />
          </TabPane>
        </TabContent>
      </section>
    );
  }
}

export default TabContainer;

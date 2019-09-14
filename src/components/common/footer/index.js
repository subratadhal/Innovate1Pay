import React, { Component } from "react";
import { Link } from "react-router-dom";
class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <footer className="_style_bg footer-main foote-bg">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="footer-links">
                  <h4>MEMBERSHIP</h4>
                  <ul>
                    <li>
                      <Link to={"/"}>Membership Benefits Content</Link>
                    </li>
                    <li>
                      <Link to={"/"}>Membership Fee Content</Link>
                    </li>
                    <li>
                      <Link to={"/"}>Member Directory</Link>
                    </li>
                    <li>
                      <Link to={"/"}>Payment Acknowledgement Slip</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <div className="footer-links">
                  <h4>INFORMATION CENTER</h4>
                  <ul>
                    <li>
                      <Link to={"/"}>Publication</Link>
                    </li>
                    <li>
                      <Link to={"/"}>Press Release</Link>
                    </li>
                    <li>
                      <Link to={"/"}>Downloads</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <div className="footer-links">
                  <h4>CONTACT</h4>
                  <ul>
                    <li>
                      <Link to={"http://crffn.resourceonhire.com/contact"}>
                        Contact CRFFN
                      </Link>
                    </li>
                    <li>
                      <Link to={"/"}>CRFFN Zonal Offices</Link>
                    </li>
                    <li>
                      <Link to={"/"}>CRFFN Outpost Offices</Link>
                    </li>
                    <li>
                      <Link to={"http://crffn.resourceonhire.com/faqs"}>
                        Frequently Asked Questions (FAQs)
                      </Link>
                    </li>
                    <li>
                      <Link to={"/"}>Governing Council Members</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-sm-8">
                <div className="copyright">
                  <p>
                    COPYRIGHT © 2019 Council FOR THE REGULATION OF FREIGHT
                    FORWARDING IN NIGERIA. ALL RIGHTS RESERVED.
                  </p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="social-links">
                  <ul>
                    <li>
                      <Link
                        to={"https://web.facebook.com/OfficialCRFFN/"}
                        target="_blank"
                      >
                        <i className="fab fa-facebook-f">facebook</i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"https://www.linkedin.com/company/crffnofficial/"}
                        target="_blank"
                      >
                        <i className="fab fa-linkedin-in">linkedin</i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"https://twitter.com/CrffnOfficial"}
                        target="_blank"
                      >
                        <i className="fab fa-twitter">twitter</i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;

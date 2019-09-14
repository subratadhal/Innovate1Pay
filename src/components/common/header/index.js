import React, { Component } from "react";
import { Link } from "react-router-dom";
class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <div className="top_bar">
            <div className="container">
              <div className="row">
                <div className="col-md-3 col-lg-4">
                  <div className="top_search">
                    <form method="post" action="">
                      <input
                        type="hidden"
                        name="_token"
                        value="kqGzWmqtan2ThnUgyOC4Mm2s07IBx7mZEkDmmnRU"
                      />
                      <input
                        type="search"
                        name="search_text"
                        className="form-control"
                        placeholder="Search"
                      />
                      <button type="submit" className="btn">
                        <i className="fas fa-search"></i>
                      </button>
                    </form>
                  </div>
                </div>
                <div className="col-md-9 col-lg-8">
                  <div className="top_registration">
                    <ul>
                      <li className="dropdown">
                        <Link
                          to={"/"}
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                          id="registration"
                        >
                          <img
                            src="http://crffn.resourceonhire.com/img/frontend/i2.png"
                            alt=""
                          />
                          Registration and Subscriptions
                        </Link>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="registration"
                        >
                          <li>
                            <Link to={"/"}>Registration</Link>
                          </li>
                          <li>
                            <Link to={"/"}>Subscriptions</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to={"/"}>
                          <img
                            src="http://crffn.resourceonhire.com/img/frontend/i3.png"
                            alt=""
                          />
                          2019 Membership Renewel
                        </Link>
                      </li>
                      <li>
                        <Link to={"/"}>
                          <img
                            src="http://crffn.resourceonhire.com/img/frontend/i4.png"
                            alt=""
                          />
                          Practioners Operating fee
                        </Link>
                      </li>
                      <li>
                        <Link to={"http://crffn.resourceonhire.com/login"}>
                          <img
                            src="http://crffn.resourceonhire.com/img/frontend/login_top.png"
                            alt=""
                          />
                          Login
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <nav className="navbar navbar-expand-lg main-navbar">
            <div className="container">
              <Link
                className="navbar-brand"
                to={"http://crffn.resourceonhire.com"}
              >
                <img
                  src="http://crffn.resourceonhire.com/img/logo/1562679726New-Logo.jpg"
                  alt=""
                />
              </Link>

              <button
                className="navbar-toggler collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#navbarToggle"
                aria-controls="navbarToggle"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <div className="hamburger hamburger--squeeze js-hamburger">
                  <div className="hamburger-box">
                    <div className="hamburger-inner"></div>
                  </div>
                </div>
              </button>

              <div className="collapse navbar-collapse" id="navbarToggle">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item  has-submenu ">
                    <Link to={"/"}>About Us</Link>
                    <ul>
                      <li>
                        <Link
                          to={
                            "http://crffn.resourceonhire.com/crffn-mission.html"
                          }
                        >
                          CRFFN Mission
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={
                            "http://crffn.resourceonhire.com/membership-benefits.html"
                          }
                        >
                          Mebership Benefits
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={
                            "http://crffn.resourceonhire.com/what-is-crffn.html"
                          }
                        >
                          What is CRFFN
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={
                            "http://crffn.resourceonhire.com/goals-vision.html"
                          }
                        >
                          CRFFN Goals &amp; Vison
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={"http://crffn.resourceonhire.com/council_members"}
                        >
                          Council Members
                        </Link>
                      </li>
                      <li>
                        <Link to={"#"}>Information Center</Link>
                      </li>
                    </ul>
                    <div className="arrow-down">
                      <i className="fas fa-plus"></i>
                    </div>
                  </li>
                  <li className="nav-item  has-submenu ">
                    <Link
                      to={
                        "http://crffn.resourceonhire.com/education_and_research.html"
                      }
                    >
                      Education and Research
                    </Link>
                    <ul>
                      <li>
                        <Link
                          to={
                            "http://crffn.resourceonhire.com/role-in-industry.html"
                          }
                        >
                          CRFFN Role In Industry
                        </Link>
                      </li>
                    </ul>
                    <div className="arrow-down">
                      <i className="fas fa-plus"></i>
                    </div>
                  </li>
                  <li className="nav-item ">
                    <Link to={"/"}>CRFFN Act</Link>
                  </li>
                  <li className="nav-item  has-submenu ">
                    <Link to={"/"}>Membership</Link>
                    <ul>
                      <li>
                        <Link
                          to={
                            "http://crffn.resourceonhire.com/goals-vision.html"
                          }
                          target="_blank"
                        >
                          CRFFN ASSOCIATION
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={
                            "http://crffn.resourceonhire.com/membership-rules.html"
                          }
                          target="_blank"
                        >
                          Membership Rules
                        </Link>
                      </li>
                    </ul>
                    <div className="arrow-down">
                      <i className="fas fa-plus"></i>
                    </div>
                  </li>
                  <li className="nav-item ">
                    <Link to={"http://crffn.resourceonhire.com/contact"}>
                      Contact Us
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <Link to={"http://crffn.resourceonhire.com/POF"}>
                      POF Applications
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </React.Fragment>
    );
  }
}

export default Header;

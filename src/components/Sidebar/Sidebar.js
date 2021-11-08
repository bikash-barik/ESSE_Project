import React, { Component } from "react";

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        {/* <!-- ======= Header ======= --> */}
        <header id="header">
          <div className="d-flex flex-column">
            <div className="profile">
              <img
                src="https://www.w3schools.com/howto/img_avatar.png"
                alt=""
                className="img-fluid rounded-circle"
              />
              <h1 className="text-light">
                <a href="index.html">
                  <span>Hello,</span>Bikash Barik
                </a>
              </h1>
              <p className=" text-light">
                <a href="index.html">rahulpatel.333@gmail.com</a>
              </p>
              <p className="text-light">
                <a href="index.html">
                  <span>ID</span> #C123456
                </a>
              </p>
            </div>
            <hr />

            <nav id="navbar" className="nav-menu navbar">
              <ul>
                <li>
                  <a href="#hero" className="nav-link scrollto active">
                    <i className="bx bx-home"></i> <span>Dashboard</span>
                  </a>
                </li>
                <li>
                  <a href="#about" className="nav-link scrollto">
                    <i className="bx bx-user"></i>{" "}
                    <span>Profile Information</span>
                  </a>
                </li>
                <li>
                  <a href="#resume" className="nav-link scrollto">
                    <i className="bx bxs-heart"></i> <span>Wishlist</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://mrbikashbarik.blogspot.com/"
                    className="nav-link scrollto"
                  >
                    <i className="bx bx-book-content"></i>{" "}
                    <span>Save Card</span>
                  </a>
                </li>
                <li>
                  <a href="#contact" className="nav-link scrollto">
                    <i
                      className="bx bx-user-check"
                    ></i>{" "}
                    <span>Refer and Win</span>
                  </a>
                </li>
                <li>
                  <a href="#contact" className="nav-link scrollto">
                    <i className="bx bx-log-out"></i> <span>Logout</span>
                  </a>
                </li>
              </ul>
            </nav>
            {/* <!-- .nav-menu --> */}
          </div>
        </header>
        {/* <!-- End Header --> */}
      </div>
    );
  }
}

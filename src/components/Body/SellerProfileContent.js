import React, { Component } from "react";
import Sidebar from "../Sidebar/Sidebar";

export default class SellerProfileContent extends Component {
  render() {
    return (
      <div className="container shadow-sm p-3 mb-5 rounded">
        <div className="row">
          <div className="col-sm-12 col-md-12">
            <nav className="nav-bar-path bg-white" aria-label="breadcrumb">
              <ol class="breadcrumb bg-white py-4">
                <li class="breadcrumb-item ml-md-5">
                  <a href="#">MyProfile</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Manage My Products
                </li>
                <li class="breadcrumb-item " aria-current="page">
                  Add New Product
                </li>
              </ol>
            </nav>
          </div>
          <div className=" col-sm-12 col-md-12 text-success fw-bold bg-light1">
            <div class="row text-center">
              <div class=" py-3 col-sm-12 col-md-4">PRODUCT SPECIFICATIONS</div>
              <div class=" py-3 col-sm-12 col-md-2">PHOTOS</div>
              <div class=" py-3 col-sm-12 col-md-3">PARKING AND SHIPPING</div>
              <div class=" py-3 col-sm-12 col-md-3 active bg-light2 ">
              <a className="border-bottom border-3 border-success">  SHELLER PROFILE</a>
              </div>
            </div>
          </div>

          {/* //body */}
          <div className="col-sm-12 col-md-12">
            <div class="row ">
              <div class="col-sm-12 col-md-3 bg-light">
                <header id="header-profile">
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
                  </div>
                </header>
              </div>
              <div class="container  col-sm-12 col-md-8">
                <div class="row">
                  <div class="col-sm-12 col-md-8">
                    <form class="row g-3 mt-5">
                      <div class="col-sm-12 col-md-6">
                        <label for="inputEmail4" class="form-label">
                          FIRST NAME
                        </label>
                        <input
                          placeholder="ENTER FIRST NAME"
                          type="text"
                          class="form-control"
                          id="inputEmail4"
                        />
                      </div>
                      <div class="col-sm-12 col-md-6">
                        <label for="inputPassword4" class="form-label">
                          LAST NAME
                        </label>
                        <input
                          type="text"
                          placeholder="ENTER LAST NAME"
                          class="form-control"
                          id="inputPassword4"
                        />
                      </div>
                      <div class="col-sm-12 col-md-12">
                        <label for="inputEmail4" class="form-label">
                          E-MAIL
                        </label>
                        <input
                          type="email"
                          placeholder="ENTER EMAIL ID"
                          class="form-control"
                          id="inputEmail4"
                        />
                      </div>
                      <div class="col-sm-12 col-md-6">
                        <label for="inputPassword4" class="form-label">
                          PHONE NUMBER
                        </label>
                        <input
                          type="number"
                          placeholder="ENTER MOBILE  NUMBER "
                          class="form-control"
                          id="inputPassword4"
                        />
                      </div>
                      <div class="col-sm-12 col-md-6">
                        <label for="inputPassword4" class="form-label">
                          PIN CODE
                        </label>
                        <input
                          type="number"
                          placeholder="ENTER PIN CODE "
                          class="form-control"
                          id="inputPassword4"
                        />
                      </div>

                      <div class="col-sm-12 col-md-6">
                        <label for="inputState" class="form-label">
                          COUNTRY
                        </label>
                        <select id="inputState" class="form-select">
                          <option selected>Choose...</option>
                          <option>...</option>
                        </select>
                      </div>

                      <div class="col-sm-12 col-md-4">
                        <label for="inputCity" class="form-label">
                          CITY
                        </label>
                        <input
                          placeholder="ENTER CITY"
                          type="text"
                          class="form-control"
                          id="inputCity"
                        />
                      </div>

                      <div class="mb-3">
                        <label
                          for="exampleFormControlTextarea1"
                          class="form-label"
                        >
                          ADDRESS
                        </label>
                        <textarea
                          class="form-control"
                          placeholder="ENTER YOUR ADDRESS"
                          id="exampleFormControlTextarea1"
                          rows="3"
                        ></textarea>
                      </div>
                    </form>
                  </div>
                  <div class="col-sm-12 col-md-4 mt-5">
                    <div class="col-sm-12 col-md-12 d-flex justify-content-evenly position-absolute bottom-0 end-0 ">
                      <button type="submit" class="btn btn-success shadow ">
                        SAVE
                      </button>
                      <button type="submit" class="btn btn-light shadow ">
                        ADD
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

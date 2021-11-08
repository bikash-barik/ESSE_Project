import React, { Component } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import SelleradddressRoght from "../components/Body/SelleradddressRoght";
import Footer from "../components/Footer";

export default class SellerAddress extends Component {
  render() {
    return (
      
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-3">
              <Sidebar />
            </div>
            <div class="col-sm-12 col-md-9 col-lg-9">
              <SelleradddressRoght />
            </div>
            

          </div>
        </div>
    );
  }
}

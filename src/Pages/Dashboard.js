import React, { Component } from "react";
import Dashbord from "../components/Body/Dashbord";
import Sidebar from "../components/Sidebar/Sidebar";

export default class Dashboard extends Component {
  render() {
    return (
      
        <div class="container">
          <div class="row">
            <div class="col-sm-0 col-md-3">
              <Sidebar />
            </div>
            <div class="col-sm-12 col-md-9 col-lg-8">
              <Dashbord />
            </div>
          </div>
        </div>
    );
  }
}

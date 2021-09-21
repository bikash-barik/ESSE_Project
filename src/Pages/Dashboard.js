import React, { Component } from "react";
import DashbordBody from "../components/Body/DashbordBody";
import Dashbord from "../components/Body/Dashbord";
import Sidebar from "../components/Sidebar/Sidebar";

export default class Dashboard extends Component {
  render() {
    return (
      
        <div class="container">
          <div class="row">
            <div class="col-4">
              <Sidebar />
            </div>
            <div class="col-sm-12 col-md-8 col-lg-8">
              <Dashbord />
            </div>
          </div>
        </div>
    );
  }
}

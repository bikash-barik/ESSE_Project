import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./Style.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Custom Component
import Header from "./components/Header";
import Dashboard from "./Pages/Dashboard";
import SellerAddress from "./Pages/SellerAddress";
import SellerProfile from "./Pages/SellerProfile";

function App() {
  return (
    <div>
     

      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/seller_address" component={SellerAddress} />
          <Route exact path="/seller_profile" component={SellerProfile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

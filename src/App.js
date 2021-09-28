import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./Style.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


// Custom Component
import Header from "./components/Header";
import Dashboard from "./Pages/Dashboard";
import SellerAddress from "./Pages/SellerAddress";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/selleraccount" component={SellerAddress} />
      
    
       

      </Switch>
    </Router>
  );
}

export default App;

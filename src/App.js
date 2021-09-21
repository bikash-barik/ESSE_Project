import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./Style.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


// Custom Component
import Header from "./components/Header";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Dashboard} />
      
    
       

      </Switch>
    </Router>
  );
}

export default App;

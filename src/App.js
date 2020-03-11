import React from 'react';
import './App.css';
import Navigation from "../src/component/Navigation"
import { Switch, Route } from "react-router-dom"
import Signup from "../src/component/signUp"
import Homepage from './pages/Homepage';




function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact="" path="/" component={Homepage} /> 
        <Route path="/navigation" component={Navigation} />
        <Route path="/signup" component={Signup} />
      </Switch>
     
    </div>
  );
}

export default App;

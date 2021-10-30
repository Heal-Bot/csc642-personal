import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import SurveyForm from './Components/Form'


import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>

        <Switch>
          <Route exact path="/">
          <SurveyForm/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;



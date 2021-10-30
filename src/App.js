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
            <SurveyForm/>

      <Router>

        {/* <Switch>
          <Route path="/">
          </Route>
        </Switch> */}
      </Router>
    </div>
  );
}

export default App;



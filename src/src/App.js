import React from 'react';
import './styles/App.css';
import Login from './pages/Login.js';


//this is the react router 

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


//This is the principal render from the app;

function App() {
  return (
    <div className="App" id="App">
      <Router>
        <Switch>
          <Route path="/" component={Login} />
        </Switch>
      </Router>
    </div>

  );
}

export default App;

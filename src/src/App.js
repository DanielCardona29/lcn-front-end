import React from 'react';
import './styles/App.css';


import Login from './pages/Login';
import HomePage from './pages/Home';
import Error404 from './pages/404';

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
          <Route path="/" exact component={Login} />
          <Route path="/home" exact component={HomePage} />
          <Route component={Error404} />
        </Switch>
      </Router>
    </div>

  );
}

export default App;

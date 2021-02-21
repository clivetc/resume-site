import React from "react";
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import Home from './components/Home.js';
import Skills from './components/Skills.js';
import Experience from './components/Experience.js';
import Education from './components/Education.js';
import Portfolio from './components/Portfolio.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
      <>
        <Route exact path='/' component={Home}/>
        <Switch>
          <Route path="/skills" component={Skills}/>
          <Route path="/education" component={Education}/>
          <Route path="/experence" component={Experience}/>
          <Route path="/portfolio" component={Portfolio}/>
        </Switch>
      </>
    </Router>
  );
}

export default App;

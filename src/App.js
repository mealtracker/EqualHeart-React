import React, { Component } from 'react';
import {Route,NavLink,HashRouter} from "react-router-dom";
import Home from "./Home";
import Services from "./Services";
import Contact from "./Contact";
import About from "./About";
import './App.css';
// use React Route for SPA by installing > npm i react-router-dom --save
class App extends Component {
  //when link is clicked, "active" class is assigned
  render() {
    return (
      <HashRouter>
      <div>
        <ul className="App-header">
          <li className='logo'><img src="images/eq-heart.png" alt="Equal Heart" /></li>
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to="/whatwedo">What We Do</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
        <div className="App-content">
            <Route exact path="/" component={Home}/>
            <Route path="/whatwedo" component={Services}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
        </div>
      </div>
      </HashRouter>
    );
  }
}

export default App;

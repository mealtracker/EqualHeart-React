import React, { Component } from 'react';
import {Route,NavLink,HashRouter} from "react-router-dom";
import Home from "./Home";
import Services from "./Services";
import Contact from "./Contact";
import About from "./About";
import Jobs from "./Jobs";
import './App.css';
// use React Route for SPA by installing > npm i react-router-dom --save
class App extends Component {
  //when link is clicked, "active" class is assigned
  render() {
    return (
      <HashRouter>
      <div>
        <ul className="App-header">
          <li id='long_logo'><img src="images/eq-heart.png" alt="Equal Heart" /></li>
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to="/whatwedo">What We Do</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li><NavLink to="/jobs">Jobs</NavLink></li>
          <li><a href="https://www.paypal.com/cgi-bin/webscr?hosted_button_id=26R6QEWWKV57G&cmd=_s-xclick" >Donate</a></li>
          <li><a href="https://www.facebook.com/equalheart.org"><img src='images/facebook.png' alt='Facebook' id="fb_icon" /></a></li>
        </ul>
        <div className="App-content">
            <Route exact path="/" component={Home}/>
            <Route path="/whatwedo" component={Services}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/jobs" component={Jobs}/>
        </div>
      </div>
      </HashRouter>
    );
  }
}

export default App;

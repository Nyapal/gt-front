import React, { Component } from 'react';
import Directory from './Directory';
import Home from './Home';
import Shop from './Shop';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
           <nav className="navbar">
              <li className="navbarItem">
                <Link to="/">Home</Link>
              </li>
              <li className="navbarItem">
                <Link to="/directory">Directory</Link>
              </li>
              <li className="navbarItem">
                <Link to="/shop">Shop</Link>
              </li >
           </nav>
           {/* ION EVEN KNOW WHAT GOES IN HERE TBH!! */}
           <Switch>
             <Route path="/" exact>
               <Home />
             </Route>
             <Route path="/directory">
               <Directory />
             </Route>
             <Route path="/shop">
               <Shop />
             </Route>
           </Switch>
       </BrowserRouter>
       </div>
    )
  }
}
export default App;

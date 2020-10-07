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
           <nav>
             <ul>
               <li>
                 <Link to="/">Home</Link>
               </li>
               <li>
                 <Link to="/directory">Directory</Link>
               </li>
               <li>
                 <Link to="/shop">Shop</Link>
               </li>
             </ul>
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

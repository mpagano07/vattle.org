import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';

import Navy from './components/Navy';
import Users from './components/users';

import Registro from './mobs/registro';
import Home from './mobs/inicio';

class App extends Component {
  

  render() {
   
    return (
    
    <main>
      <Navy />
      <Router>
            <Switch>
              <Route path= "/inicio" component={Home} />
              <Route path= "/users" component={Users} />
              <Route path= "/registro" component={Registro} />
            </Switch>
       </Router> 
    </main>
    
    );
  }
}
export default App;
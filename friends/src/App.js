import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import { Home } from './components/Home'
import { Login } from './components/Login'
import { PrivateRoute } from './components/PrivateRoute'
import { Friends } from './components/Friends'

function App() {
  return (
    <Router>
    <div className="App">
        <div className="nav-bar">
            <Link to='/'>Home</Link>
            <Link to='/login'>Login</Link>
            <Link to='/protected'>Friends</Link>
        </div>
          <Switch>
            <Route exact path="/" component={ Home } />

            {/* PrivateRoute replacing route to the protected page */}

            <PrivateRoute exact path='/protected' component={ Friends } />
            <Route exact path='/login' component={ Login } />
            <Route component={ Login } />
          </Switch>
    </div>
    </Router>
  );
}

export default App;

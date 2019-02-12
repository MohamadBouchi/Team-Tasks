import React, { Component } from 'react';
import './App.css';
import Login from './pages/auth/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Switch>
            <Route exact path="/" component={Login} />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;

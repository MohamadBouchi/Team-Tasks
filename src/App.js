
//TODO: redirect to login page if someone goes without login to dashboard
/* EXPORT */

import React, { Component } from 'react';
import './App.css';
import Login from './pages/auth/Login';
import Dashboard from './pages/dashboard/Dashboard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Navbar from './layout/navbar/Navbar';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Navbar/>
          <Switch>
            { !this.props.user_name && <Route exact path="/" component={Login} />}
            { this.props.user_name && <Route exact path="/" component={Dashboard} />}
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}
const mapStateToProps = (state) => {
  return {
      user_name: state.auth.user_name
  }
}

export default connect(mapStateToProps)(App);

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from '../Login/Login';

class Routes extends React.Component {
  render() {
    // console.log(this.props);
    return (
      <Router>
        <Route path="/" name="Login" component={Login}>
        </Route>
      </Router>
    );
  }
}

export default Routes;

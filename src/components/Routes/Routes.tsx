import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../Login/Login';
import Exam from '../Exam/Exam';

const Routes = () => {
  // console.log(props);
  return (
    <Router>
      <Switch>
        <Route exact path="/" name="Login" component={Login}/>
        <Route exact path="/Exam" name="Exam" component={Exam}/>
      </Switch>
    </Router>
  );
}

export default Routes;

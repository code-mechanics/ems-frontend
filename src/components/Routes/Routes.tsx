import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from '../Login/Login';
import ListPost from '../Post/ListPost';


class Routes extends React.Component {
  render() {
    // console.log(this.props);
    return (
      <Router>
            <Route path="/" name="Login" component={Login}></Route>
            <Route path="/post" name="Post" component={ListPost}></Route>
      </Router>
    );
  }
}

export default Routes;

import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import FacebookList from './containers/FacebookListPage';
import FacebookLogin from './containers/FacebookLoginPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="facebook">
      <Route path="login" component={FacebookLogin} />
      <Route path="list" component={FacebookList} />
    </Route>
  </Route>
);

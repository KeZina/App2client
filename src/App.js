import React from 'react';
// import { createStore, applyMiddleware } from 'redux';
// import { Provider } from 'react-redux';
// import createSagaMiddleware from 'redux-saga';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Nav from './Nav.js';
import Main from './Main.js';
import Search from './Search.js';
import Profile from './profile/Profile.js';

const App = () => {
  return (
    <HashRouter>
      <Nav />
      <Switch>
        <Route exact path = '/' component = {Main} />
        <Route exact path = '/Search' component = {Search} />
        <Route exact path = '/Profile' component = {Profile} />
      </Switch>
    </HashRouter>
  );
}

export default App;
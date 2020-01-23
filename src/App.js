import React from 'react';
// import { createStore, applyMiddleware } from 'redux';
// import { Provider } from 'react-redux';
// import createSagaMiddleware from 'redux-saga';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from './Nav.js';
import Main from './Main.js';
import Search from './Search.js';
import Profile from './profile/Profile.js';
import Registration from './Registration.js';

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path = '/' component = {Main} />
        <Route exact path = '/search' component = {Search} />
        <Route exact path = '/profile' component = {Profile} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
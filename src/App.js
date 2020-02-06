import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { UserContext } from './UserContext';
import Nav from './Nav';
import Main from './Main';
import Search from './Search';
import Profile from './profile/Profile';
import useCheckAuth from './hooks/useCheckAuth';

const App = () => {
  const {data, logout} = useCheckAuth();
  const user = {
    data,
    logout
  }

  return (
    <UserContext.Provider value = {user}>
      <BrowserRouter>
          <Nav />
          <Switch>
            <Route exact path = '/' component = {Main} />
            <Route exact path = '/search' component = {Search} />
            {UserContext.auth &&
              <Route exact path = '/profile' component = {Profile} />
            }
          </Switch>
      </BrowserRouter>
    </UserContext.Provider>
  ) 
}

export default App;
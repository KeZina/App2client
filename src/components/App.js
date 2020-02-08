import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { UserContext } from '../context';
import Nav from './Nav';
import Main from './Main';
import Search from './Search';
import Profile from './profile/Profile';
import useAuth from '../hooks/useAuth';
import Loading from './Loading';

const App = () => {
  const {loading, login, logout, data} = useAuth();
  const user = {
    loading,
    login,
    logout,
    data
  }

  return (
    <UserContext.Provider value = {user}>
      <BrowserRouter>
          <Loading />
          <Nav />
          <Switch>
            <Route exact path = '/' component = {Main} />
            <Route exact path = '/search' component = {Search} />
            {user.data && user.data.auth &&
              <Route exact path = '/profile' component = {Profile} />
            }
          </Switch>
      </BrowserRouter>
    </UserContext.Provider>
  ) 
}

export default App;
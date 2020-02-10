import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { UserContext } from '../context';
import Nav from './nav/Nav';
import Main from './nav/Main';
import Search from './nav/Search';
import Profile from './user/profile/Profile';
import Loading from './nav/Loading';
import useAuth from '../hooks/useAuth';

const App = () => {
  const {loading, login, logout, deleteUser, data} = useAuth();
  const user = {
    loading,
    login,
    logout,
    deleteUser,
    data
  }

  return (
    <UserContext.Provider value = {user}>
      <Router>
          <Loading />
          <Nav />
          <Switch>
            <Route exact path = '/' component = {Main} />
            <Route exact path = '/search' component = {Search} />
            {user.data && user.data.auth &&
              <Route exact path = '/profile' component = {Profile} />
            }
          </Switch>
      </Router>
    </UserContext.Provider>
  ) 
}

export default App;
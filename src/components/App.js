import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { UserContext } from '../context';
import useAuth from '../hooks/useAuth';
import Nav from './nav/Nav';
import Loading from './nav/Loading';
import Main from './nav/Main';
import Search from './nav/Search';
import Profile from './user/profile/Profile';
import Messages from './user/Messages';
import Pages from './user/Pages';
import People from './user/People'
import Settings from './user/settings/Settings';

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
        <Loading />
        <Nav />
        <Switch>
          <Route exact path = '/' component = {Main} />
          <Route exact path = '/search' component = {Search} />
          {user.data && user.data.auth &&
            <>
              <Route exact path = '/user/profile' component = {Profile} />
              <Route exact path = '/user/messages' component = {Messages} />
              <Route exact path = '/user/pages' component = {Pages} />
              <Route exact path = '/user/people' component = {People} />
              <Route exact path = '/user/settings' component = {Settings} />
            </>
          }
        </Switch>
    </UserContext.Provider>
  ) 
}

export default App;
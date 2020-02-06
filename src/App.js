import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { UserContext, RequestContext } from './context';
import Nav from './Nav';
import Main from './Main';
import Search from './Search';
import Profile from './profile/Profile';
import useAuth from './hooks/useAuth';
import useRequest from './hooks/useRequest';

const App = () => {
  const {handleGet, handlePost, GET, POST} = useRequest();
  const request = {
    handleGet,
    handlePost,
    GET,
    POST
  }

  const {data, logout} = useAuth(POST);
  const user = {
    data,
    logout
  }

  return (
    <UserContext.Provider value = {user}>
      <RequestContext.Provider value = {request}>
        <BrowserRouter>
            <Nav />
            <Switch>
              <Route exact path = '/' component = {Main} />
              <Route exact path = '/search' component = {Search} />
              {user.data.auth &&
                <Route exact path = '/profile' component = {Profile} />
              }
            </Switch>
        </BrowserRouter>
      </RequestContext.Provider>
    </UserContext.Provider>
  ) 
}

export default App;
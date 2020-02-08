import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { UserContext, RequestContext } from '../context';
import Nav from './Nav';
import Main from './Main';
import Search from './Search';
import Profile from './profile/Profile';
import useAuth from '../hooks/useAuth';
import useRequest from '../hooks/useRequest';
import Loading from './Loading';

const App = () => {
  const {handleGet, handleForm, GET, POST} = useRequest();
  const request = {
    handleGet,
    handleForm,
    GET,
    POST
  }

  console.log(POST)

  const {loading, logout, data} = useAuth(POST);
  const user = {
    loading,
    logout,
    data
  }

  return (
    <UserContext.Provider value = {user}>
      <RequestContext.Provider value = {request}>
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
      </RequestContext.Provider>
    </UserContext.Provider>
  ) 
}

export default App;
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './screens/home';
import RegisterScreen from './screens/auth/register';
import LoginScreen from './screens/auth/login';
import NotesIndex from './screens/notes/index';
import UsersEditScreen from './screens/users/edit';

import PrivateRouter from './components/auth/private_router';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/register' component={RegisterScreen} />
      <Route exact path='/login' component={LoginScreen} />
      <PrivateRouter exact path='/notes' component={NotesIndex} />
      <PrivateRouter exact path='/users/edit' component={UsersEditScreen} />
    </Switch>
  </BrowserRouter>
)

export default Routes;
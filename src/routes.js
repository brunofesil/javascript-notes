import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './screens/home';
import RegisterScreen from './screens/auth/register';
import LoginScreen from './screens/auth/login';
import NotesIndex from './screens/notes/index';
import UsersEditScreen from './screens/users/edit';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/register' component={RegisterScreen} />
      <Route exact path='/login' component={LoginScreen} />
      <Route exact path='/notes' component={NotesIndex} />
      <Route exact path='/users/edit' component={UsersEditScreen} />
    </Switch>
  </BrowserRouter>
)

export default Routes;
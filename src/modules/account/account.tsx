import React from 'react';
import {
  Route,
  RouterComponentProps,
  Switch
} from 'react-router-dom';

import Login from './login/login'

const Account: React.FC = ({ match }: RouterComponentProps)=> {
  const AccountSub = () => (
    <div>Account subcomponent</div>
  );

  const Routes = () => (
    <Switch>
      <Route path={`${match.path}/`} component={AccountSub}></Route>
      <Route path={`${match.path}/Login`} component={Login}></Route>
    </Switch>
  );
  
  return (
    <div>
      Account Main panel
      <hr/>
      <Routes></Routes>
    </div>
  );
}

export default Account;
import React from 'react';
import {
  Redirect,
  RouterComponentProps,
  Switch
} from 'react-router-dom';

import Login from './login/login';
import MyAccount from './my-account/my-account';
import NoLoggedRoute from '../../common/custom-routes/no-logged-route';
import PrivateRoute from '../../common/custom-routes/private-route';

const Account: React.FC = ({ match }: RouterComponentProps)=> {

  const Routes = () => (
    <Switch>
      <Redirect exact from={`${match.path}`} to={`${match.path}/MyAccount`}></Redirect>
      <NoLoggedRoute
        path={`${match.path}/Login`}
        redirect={`${match.path}/MyAccount`}
        component={Login}>
      </NoLoggedRoute>
      <PrivateRoute
        path={`${match.path}/MyAccount`}
        redirect={`${match.path}/Login`}
        component={MyAccount}>
      </PrivateRoute>
    </Switch>
  );
  
  return (
    <Routes></Routes>
  );
}

export default Account;
import React from 'react';
import { useAuthDataContext } from '../../providers/auth-data-provider';
import { Route, Redirect } from 'react-router-dom';
import { CustomRoutesProps } from './common';

const PrivateRoute: React.FC<CustomRoutesProps> = ({component, path, redirect }) => {

  const dataContext = useAuthDataContext();

  let user;

  if (dataContext && dataContext.user) {
    user = dataContext.user;
  }

  if(user) {
    return <Route path={path} component={component}></Route>
  } else {
    return <Redirect to={redirect}></Redirect>
  }
}

export default PrivateRoute as React.ComponentType<CustomRoutesProps>;

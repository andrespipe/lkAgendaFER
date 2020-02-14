import React from 'react';
import { useAuthDataContext } from '../../providers/auth-data-provider';
import { Route, Redirect } from 'react-router-dom';
import { CustomRoutesProps } from './common';

const NoLoggedRoute: React.FC<CustomRoutesProps> = ({component, path, redirect }) => {
  const dataContext = useAuthDataContext();

  let user;

  if (dataContext && dataContext.user) {
    user = dataContext.user;
  }
  console.log(user);
  if(user) {
    return <Redirect to={redirect}></Redirect>
  } else {
    return <Route path={path} component={component}></Route>
  }
}

export default NoLoggedRoute as React.ComponentType<CustomRoutesProps>;
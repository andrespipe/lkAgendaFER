import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import './login.scss';
// import { useTranslation } from 'react-i18next';
import LoginForm from '../login-form/login-form';
import axios from 'axios';
import { ILogin, IUser } from '../models/login.model';
import * as userActions from '../../../actions/userActions';

import { connect } from 'react-redux';

const Login: React.FC = (props) => {
  console.log('Props', {props});
  const state = useState(0);

  // const { t, i18n } = useTranslation();

  const initialValues = {
    user: '',
    password: '',
  };

  const authenticate = (values: ILogin) => {
    console.log('authenticate', {values});

    const data: ILogin = {
      email: 'andres.pipe.mv@gmail.co',
      password: 'cekheb-mAgtur-3dusri'
    };
    
    axios.post<ILogin, IUser>(
      'https://lazy-kitten-auth-api.herokuapp.com/auth/login',
      data,
    )
      .then(ans => console.log({ ans }))
      .catch(error => {
        console.error(error);
      });
  };

  const FormStatus = (state) => {
    if (state.error) {
      return (
        <div>
          <hr/>
          Error message
        </div>
      );
    }
    return <div></div>
  }

  return (
    <div className="login-component">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}></Grid>
        <Grid item xs={12} sm={4}>
          <Paper elevation={3}>
            <div className="text-center">
              <LoginForm
                onSubmit={authenticate}
                initialValues={initialValues}>
              </LoginForm>
              <FormStatus state={state}></FormStatus>
            </div>
          </Paper>
        </Grid>
      </Grid>
      <Grid item xs={4}></Grid>
    </div>
  );
};

const mapStateToProps = (reducers) => {
  console.log('Reduers', { reducers });
  return reducers.userReducer;
};

export default connect(mapStateToProps, userActions)(Login);

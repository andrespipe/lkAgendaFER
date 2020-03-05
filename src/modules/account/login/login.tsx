import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import './login.scss';
import { useTranslation } from 'react-i18next';
import LoginForm from '../login-form/login-form';

const Login: React.FC = () => {
  const { t, i18n } = useTranslation();

  const authenticate = (values) => {
    console.log('authenticate', {values});
  };

  const initialValues = {
    user: '',
    password: '',
  };

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
            </div>
          </Paper>
        </Grid>
      </Grid>
      <Grid item xs={4}></Grid>
    </div>
  );
};

export default Login;

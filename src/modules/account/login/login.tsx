import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { TextField } from '@material-ui/core';
import './login.scss';

const Login: React.FC = () => {
  return (
    <div className="login-component">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}></Grid>
        <Grid item xs={12} sm={4}>
          <Paper elevation={3}>
            <div className="text-center">
              <form>
                <TextField label="User" />
                <br/><br/>
                <TextField label="Password" />
                <br/><br/>
                <Button variant="contained" color="primary">
                  Login
                </Button>
                <br/><br/>
              </form>
            </div>
          </Paper>
        </Grid>
      </Grid>
      <Grid item xs={4}></Grid>
    </div>
  );
};

export default Login;

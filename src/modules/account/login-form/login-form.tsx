import React from 'react';
import { Formik, Form } from 'formik';
import { TextField, Button } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

interface Values {
  user: string;
  password: string;
}

interface Errors {
  user?: string;
  password?: string;
}

interface Props {
  initialValues: Values;
  onSubmit: (values: Values) => void;
}

const LoginForm: React.FC<Props> = ({ onSubmit, initialValues }) => {
  const { t, i18n } = useTranslation();

  const validate = (values: Values) => {
    const errors: Errors = {};
    if (!values.user) {
      errors.user = 'Invalid user name';
    }
    if (!values.user) {
      errors.password = 'Invalid password';
    }
    return errors;
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={(values) => onSubmit(values)}>
      {({
          handleChange,
          handleBlur,
          errors,
          values,
      }) => (
        <Form>
          <TextField
            label="User"
            name="user"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.user}/>
            {errors.user}
          <br/><br/>
          <TextField
            label="Password"
            name="password"
            onBlur={handleBlur}
            onChange={handleChange}
            type="password"
            value={values.password}/>
            {errors.password}
          <br/><br/>
          <Button
            type="submit"
            color="primary"
            variant="contained">
            {t('NavBar.login')}
          </Button>
          <br/><br/>
          {/* <pre>{JSON.stringify(values)}</pre> */}
        </Form>
      )}
    </Formik>
  );
}

export default LoginForm;

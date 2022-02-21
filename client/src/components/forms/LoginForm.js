import React from 'react'
import InputField from '../inputField/InputField'
import { Formik, Form } from 'formik'
import Styles from './form.module.css'
import { Button, Typography } from '@mui/material'
import {Link,useNavigate} from 'react-router-dom'
import * as Yup from 'yup'
import { useDispatch} from 'react-redux'
import { login } from '../../actions/userAction'

function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const validate = Yup.object({
    email: Yup.string().email('Email is invalid').required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),
  })
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        const {email,password} = values
        dispatch(login(email, password));
        navigate('/')
      }}
    >
      {(formik) => (
        <div className={Styles.container}>
          <h1>Log In</h1>
          <Form className={Styles.formContainer}>
            <InputField
              width={true}
              label={'Email'}
              id={'outlined-email-input'}
              name="email"
              margin={'dense'}
              type="email"
            />
            <InputField
              width={true}
              label={'Password'}
              id={'outlined-password-input'}
              name="password"
              margin={'dense'}
              type="password"
            />
            <Typography>
              Don't have an account? Please
              &nbsp;
              <Link to="/signup">
                  Sign Up
              </Link>
            </Typography>
            <br></br>
            <Button
              variant="contained"
              size="large"
              type="submit"
              className={Styles.formBtn}
            >
              Log In
            </Button>
          </Form>
        </div>
      )}
    </Formik>
  )
}

export default LoginForm

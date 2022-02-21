import React, { useEffect} from 'react'
import InputField from '../inputField/InputField'
import { Formik, Form } from 'formik'
import Styles from './form.module.css'
import { Button, Typography } from '@mui/material'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import { register } from "../../actions/userAction";
import {useNavigate} from 'react-router-dom'
function SignUpForm() {


const dispatch = useDispatch();
const userRegister = useSelector((state)=> state.userRegister)
const  navigate = useNavigate();
const {userInfo } = userRegister;
useEffect(() => {
  if (userInfo) {
    navigate('/login')
  }
}, [userInfo,navigate]);


  const validate = Yup.object({
    username: Yup.string()
      .max(15, 'Must be 15 character or less')
      .required('Required'),
    email: Yup.string().email('Email is invalid').required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Confirm password is required'),
  })
  return (
    <Formik
      initialValues={{
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        const {username,email,password} = values
        dispatch(register(username,email,password))
      }}
    >
      {(formik) => (
        <div className={Styles.container}>
          <h1>Sign Up</h1>
          <Form className={Styles.formContainer}>
            <InputField
              width={true}
              label={'User Name'}
              id={'outlined-username-input'}
              name="username"
              margin={'dense'}
              type="text"
            />
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
            <InputField
              width={true}
              label={'Confirm Password'}
              id={'outlined-confirmpassword-input'}
              name="confirmPassword"
              margin={'dense'}
              type="password"
            />
            <Typography>
              Have an account? Already Please
              &nbsp;
              <Link to="/login">
                  Log In
              </Link>
            </Typography>
            <br></br>
            <Button
              variant="contained"
              size="large"
              type="submit"
              className={Styles.formBtn}
            >
              Sign Up
            </Button>
          </Form>
        </div>
      )}
    </Formik>
  )
}

export default SignUpForm

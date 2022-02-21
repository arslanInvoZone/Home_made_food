import React from 'react'
import Styles from './login.module.css'
import LoginForm from '../../components/forms/LoginForm'
function Login() {
  return (
    <div className={Styles.container}>
      <div className={Styles.imageContainer}>
        <img src={`${process.env.REACT_APP_ROOT_PATH}assets/images/loginImage.jpg`} alt="" />
      </div>
      <div className={Styles.formContainer}>
        <LoginForm />
      </div>
    </div>
  )
}

export default Login

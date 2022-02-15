import React from 'react'
import Styles from './login.module.css'
import LoginForm from '../../components/form/LoginForm'
function Login() {
  return (
    <div className={Styles.container}>
        <div className={Styles.imageContainer}>
            <img src='./assets/images/loginImage.jpg' alt='' />
        </div>
        <div className={Styles.formContainer}>
            <LoginForm/>
        </div>
    </div>
  )
}

export default Login
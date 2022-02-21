import React from 'react'
import Styles from './signUp.module.css'
import SignUpForm from '../../components/forms/SignUpForm'
function SignUp() {
  return (
    <div className={Styles.container}>
      <div className={Styles.imageContainer}>
        <img src={`${process.env.REACT_APP_ROOT_PATH}assets/images/signupImage.jpg`} alt="" />
      </div>
      <div className={Styles.formContainer}>
        <SignUpForm />
      </div>
    </div>
  )
}

export default SignUp

import React from 'react'
import SignIn from '../../components/SignIn/SignIn'
import SignUp from '../../components/SignUp/SignUp'

import './SignInSignUp.styles.scss'

const SignInSignUp = () => {
  return (
    <div className="SignInSignUp">
      <SignIn />
      <SignUp />
    </div>
  )
}

export default SignInSignUp
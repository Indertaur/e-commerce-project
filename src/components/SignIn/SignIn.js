import React, { useState, useEffect } from 'react'
import Button from '../Button/Button'
import { signInWithGoogle } from '../../firebase/Firebase.utils'
import FormInput from '../FormInput/FormInput'
import './SignIn.styles.scss'

const SignIn = () => {

  const [authFormData, setAuthFormData] = useState({email:'',password:'',});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setAuthFormData({
      ...authFormData,
      [name]: value
    })
    
  }

  useEffect(() => {
    console.log(authFormData)
  }, [authFormData]);

  const formSubmitHandler = (e) => {
    // console.log(email)
    // console.log(password)
    e.preventDefault()
  }
  return (
    <div className="sign-in">
      <h2> Already have a account ? </h2>
      <span> Sign In With your Email and Password </span>
      <form onSubmit={formSubmitHandler} className="sign-in">
        <FormInput name="email" type="email" value={authFormData?.email} label="Email" handleChange={handleChange} required />
        <FormInput name="password" type="password" value={authFormData?.password} label="Password" handleChange={handleChange} required />
        <div className="buttons">
          <Button type="button"> Sign In </Button>
          <Button onClick={signInWithGoogle} isGoogleSignIn> Sign in With Google </Button>
        </div>
      </form>
    </div>
  )
}
export default SignIn
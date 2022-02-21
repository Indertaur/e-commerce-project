import React, { useState } from 'react'
import Button from '../Button/Button'
import { signInWithGoogle } from '../../firebase/Firebase.utils'
import FormInput from '../FormInput/FormInput'
import './SignIn.styles.scss'

const SignIn = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleChange = (e) => {
    setEmail(e.target.value)
    setPassword(e.target.value)
  }

  const formSubmitHandler = (e) => {
    console.log(email)
    console.log(password)
    e.preventDefault()
    setEmail('')
    setPassword('')
  }
  return (
    <>
      <div className="title"> I already have a account </div>
      <div className="title"> Sign In </div>
      <form onSubmit={formSubmitHandler} className="sign-in">
        <FormInput name="email" type="email" value={email} label="Email" handleChange={handleChange} required />
        <FormInput name="password" type="password" value={password} label="Password" handleChange={handleChange} required />
        <div className="buttons">
          <Button type="submit"> Sign In </Button>
          <Button onClick={signInWithGoogle}> Sign in With Google </Button>
        </div>
      </form>
    </>
  )
}

export default SignIn
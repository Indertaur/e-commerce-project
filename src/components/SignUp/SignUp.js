import React, { useState } from 'react'
import FormInput from '../FormInput/FormInput'
import Button from '../Button/Button'

import { auth, createUserProfileDocument } from '../../firebase/Firebase.utils'

import './SignUp.styles.scss'

const SignUp = () => {

    const [signUpFormData, setSignUpFormData] = useState({name:'',email:'',password:'',confirmPassword:''})

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setSignUpFormData({
            ...signUpFormData,
            [name]: value
        })
    }

    const submitHandler = async (event) => {
        event.preventDefault()

        // if (password !== confirmPassword) {
        //     alert(`Passwords do not match!`)
        //     return;
        // }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(
                signUpFormData?.email,
                signUpFormData?.password
            );

            await createUserProfileDocument(user, {  } );

        } catch (error) {
            console.error(error);
        }
    }
    return (
        <>
            <div className="sign-up">
                <h2 className="title"> Do not have a account ? </h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={submitHandler}>
                    <FormInput type="text" name="name" value={signUpFormData?.name} label="Name" handleChange={handleChange} required />
                    <FormInput type="email" name="email" value={signUpFormData?.email} label="Email" handleChange={handleChange} required />
                    <FormInput type="password" name="password" value={signUpFormData?.password} label="Password" handleChange={handleChange} required />
                    <FormInput type="password" name="confirmPassword" value={signUpFormData?.confirmPassword} label="confirmPassword" handleChange={handleChange} required />
                    <Button type="submit"> SIGN UP </Button>
                </form>
            </div>
        </>
    )
}

export default SignUp
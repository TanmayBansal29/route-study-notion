import React from 'react'
import { Template } from '../components/Template'
import signupImg from '../assets/signup.png'

export const SignUp = ({setIsLoggedIn}) => {
    return (
        <Template
        title="Join the millions learning to code with Study Notion for Free"
        desc1="Build Skills for today, tomorrow and beyond"
        desc2="Education to future-proof your career"
        image={signupImg}
        formtype="SignUp"
        setIsLoggedIn={setIsLoggedIn}
        />
    )
}

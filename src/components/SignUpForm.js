import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

export const SignUpForm = ({ setIsLoggedIn }) => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirm_password: ""
    })

    function changeHandler(event) {
        setFormData((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value
        }))
    }

    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [accountType, setAccountType] = useState("student")

    function submitHandler(event) {
        event.preventDefault()
        if (formData.password != formData.confirm_password) {
            toast.error("Password Not Matched")
            return
        }

        setIsLoggedIn(true)
        toast.success("Account Created")
        const accountData = {
            ...formData
        }
        const finalData = {
            ...accountData,
            accountType
        }
        navigate("/dashboard")


    }
    return (
        <div className=' overflow-hidden'>
            {/* Student Instructor Tab */}

            <div className='flex bg-[#1e1e1e] p-[0.95] gap-x-1 mt-3 rounded-full max-w-max'>
                <button className={`${accountType === "student" ?
                    "bg-black text-white":
                        "bg-transparent text-[#a09c9c]"} py-[6px] px-5 rounded-full transition-all`}
                    onClick={() => {
                        setAccountType("student")
                    }}>
                    Student
                </button>
                <button className={`${accountType === "instructor" ?
                    "bg-black text-white":
                        "bg-transparent text-[#a09c9c]"} py-[6px] px-5 rounded-full transition-all`}
                onClick={() => {
                    setAccountType("instructor")
                }}>
                    Instructor
                </button>
            </div>

            <form onSubmit={submitHandler} className='flex flex-col w-full gap-y-1 mt-2'>
                {/* First Name and Last Name */}
                <div className='w-full flex gap-x-4 mt-2'>
                    <label className='w-full'>
                        <p className='text-[0.875rem] text-white mb-1 leading-[1.375]'>First Name <sub className='text-red-500'>*</sub></p>
                        <input required
                            type="text"
                            name='firstname'
                            onChange={changeHandler}
                            placeholder='Enter First Name'
                            value={formData.firstname}
                            className='bg-[#1e1e1e] rounded-[0.5rem] text-white w-full p-[9px]' />
                    </label>
                    <label className='w-full'>
                        <p className='text-[0.875rem] text-white mb-1 leading-[1.375]'>Last Name <sub className='text-red-500'>*</sub></p>
                        <input required
                            type="text"
                            name='lastname'
                            onChange={changeHandler}
                            placeholder='Enter Last Name'
                            value={formData.lastname}
                            className='bg-[#1e1e1e] rounded-[0.5rem] text-white w-full p-[9px]' />
                    </label>
                </div>

                {/* Email Address  */}
                <label className='w-full mt-3'>
                    <p className='text-[0.875rem] text-white mb-2 leading-[1.375]'>Email Address <sub className='text-red-500'>*</sub></p>
                    <input required
                        type="email"
                        name='email'
                        onChange={changeHandler}
                        placeholder='Enter email address'
                        value={formData.email}
                        className='bg-[#1e1e1e] rounded-[0.5rem] text-white w-full p-[9px]' />
                </label>

                {/* Password and Confirm Password */}
                <div className='flex gap-x-4 mt-4'>
                    <label className='w-full relative mt-3'>
                        <p className='text-[0.875rem] text-white mb-2 leading-[1.375]'>Create Password <sub className='text-red-500'>*</sub></p>
                        <input required
                            type={showPassword ? ("text") : ("password")}
                            name='password'
                            onChange={changeHandler}
                            placeholder='Create Password'
                            value={formData.password}
                            className='bg-[#1e1e1e] rounded-[0.5rem] text-white w-full p-[9px]' />
                        <span onClick={() => setShowPassword((prev) => !prev)} className='absolute right-3 top-[38px] cursor-pointer'>
                            {showPassword ?
                                (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2B2' />) :
                                (<AiOutlineEye fontSize={24} fill='#AFB2B2' />)}
                        </span>
                    </label>
                    <label className='w-full relative mt-3'>
                        <p className='text-[0.875rem] text-white mb-2 leading-[1.375]'>Confirm Password <sub className='text-red-500'>*</sub></p>
                        <input required
                            type={showConfirmPassword ? ("text") : ("password")}
                            name='confirm_password'
                            onChange={changeHandler}
                            placeholder='Confirm Password'
                            value={formData.confirm_password}
                            className='bg-[#1e1e1e] rounded-[0.5rem] text-white w-full p-[9px]' />

                        <span onClick={() => setShowConfirmPassword((prev) => !prev)} className='absolute right-3 top-[38px] cursor-pointer'>
                            {showConfirmPassword ?
                                (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2B2' />) :
                                (<AiOutlineEye fontSize={24} fill='#AFB2B2' />)}
                        </span>
                    </label>
                </div>

                <button className='bg-yellow-400 mt-6 rounded-[8px] font-medium text-[#121212] px-[12px] py-[8px]'>
                    Create Account
                </button>
            </form>
        </div>
    )
}

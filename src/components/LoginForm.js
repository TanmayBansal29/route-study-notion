import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';

export const LoginForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    function changeHandler(event) {
        setFormData((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value
        }))
    }

    const [showPassword, setShowPassword] = useState(false)

    function submitHandler(event) {
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        navigate("/dashboard")
        
    }

    return (
        <form onSubmit={submitHandler} className='flex flex-col w-full gap-y-4 mt-6'>
            <label className='w-full'>
                <p className='text-[0.875rem] text-white mb-1 leading-[1.375]'>
                    Email Address <sup className='text-red-500'>*</sup>
                </p>
                <input required type="email"
                    value={formData.email}
                    onChange={changeHandler}
                    placeholder='Enter email id'
                    name='email'
                    className='bg-[#1e1e1e] rounded-[0.5rem] text-white w-full p-[12px]'></input>
            </label>

            <label className='w-full relative'>
                <p className='text-[0.875rem] text-white mb-1 leading-[1.375]'>
                    Password <sup className='text-red-500'>*</sup>
                </p>
                <input required type={showPassword ? ("text") : ("password")}
                    value={formData.password}
                    onChange={changeHandler}
                    placeholder='Enter Password'
                    name='password'
                    className='bg-[#1e1e1e] rounded-[0.5rem] text-white w-full p-[12px]'></input>
                
                <span className='absolute right-3 top-[38px] cursor-pointer'
                onClick={() => setShowPassword((prev) => !prev)}>
                    {showPassword ?
                    (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2B2'/>) :
                    (<AiOutlineEye fontSize={24} fill='#AFB2B2'/>)}
                </span>

                <Link to="/">
                    <p className='text-xs mt-1 text-blue-200 max-w-max ml-auto'>
                        Forgot Password?
                    </p>
                </Link>
            </label>

            <button className='bg-yellow-400 mt-6 rounded-[8px] font-medium text-[#121212] px-[12px] py-[8px]' >
                Sign In
            </button>

        </form>
    )
}

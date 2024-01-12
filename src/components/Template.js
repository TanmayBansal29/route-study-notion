import React from 'react'
import frameImage from '../assets/frame.png'
import { SignUpForm } from './SignUpForm'
import { LoginForm } from './LoginForm'
import {FcGoogle} from "react-icons/fc"

export const Template = ({title, desc1, desc2, image, formtype, setIsLoggedIn}) => {
    return (
        <div className='max-w-[1060px] w-11/12 flex justify-between mx-auto gap-x-12 gap-y-0 pt-7'>
            <div className='w-11/12 max-w-[460px] mx-0'>
                <h1 className='text-white font-semibold text-[1.475rem]' >{title}</h1>
                <p className='text-[1.02rem] leading-[1.325rem] mt-4'>
                    <span className='text-[#f6f6f6] opacity-70'>{desc1}</span>
                    <br />
                    <span className='text-blue-300 italic'>{desc2}</span>
                </p>
                {
                    formtype === "SignUp" ?
                    (<SignUpForm setIsLoggedIn={setIsLoggedIn} />) :
                    (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)
                }
                <div className='flex w-full items-center my-4 gap-x-2'>
                    <div className='w-full h-[1px] bg-[#322f2f] opacity-65'></div>
                    <p className='font-medium text-[#f6f6f6] opacity-30'>OR</p>
                    <div className='w-full h-[1px] bg-[#322f2f] opacity-65'></div>
                </div>
                <button className='w-full flex justify-center items-center rounded-[8px] font-medium text-[#f4f4f4] border border-[#322f27] px-[12px] py-[8px] gap-x-2 mt-3'>
                    <FcGoogle/>
                    <p>Sign Up With Google</p>
                </button>
            </div>
            <div className='relative w-11/12 max-w-[360px] text-center'>
                <img src={frameImage} alt='pattern' width={558} height={504} loading="lazy"/>
                <img className='absolute top-4 right-4' src={image} alt='Students' width={558} height={490} loading='lazy'/>
            </div>
        </div>
    )
}

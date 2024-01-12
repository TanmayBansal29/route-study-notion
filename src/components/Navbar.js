import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/Logo.svg"
import toast from 'react-hot-toast'

export const Navbar = (props) => {

    let isLoggedIn = props.isLoggedIn
    let setIsLoggedIn = props.setIsLoggedIn
    return (
        <div className='flex justify-between item-center w-11/12 max-w-[1160px] py-4 mx-auto'>
            <Link to="/">
                <img src={logo} alt='Logo' width={160} height={32} loading='lazy'></img>
            </Link>

            <nav>
                <ul className='text-white flex gap-x-6'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">About</Link>
                    </li>
                    <li>
                        <Link to="/">Contact</Link>
                    </li>
                </ul>
            </nav>

            {/* Login - Signup- LogOut - Dashboard */}

            <div className='flex items-center gap-x-4'>
                { !isLoggedIn &&
                    <Link to="/login">
                        <button className='bg-[#1d1b1b] text-white py-[8px] px-[12px] rounded-[8px] border border-[#21210f]'>Login</button>
                    </Link>
                }
                { !isLoggedIn &&
                    <Link to="/signup">
                        <button className='bg-[#1d1b1b] text-white py-[8px] px-[12px] rounded-[8px] border border-[#21210f]'>Sign up</button>
                    </Link>
                }
                { isLoggedIn &&
                    <Link to="/">
                        <button className='bg-[#1d1b1b] text-white py-[8px] px-[12px] rounded-[8px] border border-[#21210f]'
                        onClick={() => {
                            setIsLoggedIn(false)
                            toast.success("Logged Out")
                        }}>Log Out</button>
                    </Link>
                }
                { isLoggedIn &&
                    <Link to="/dashboard">
                        <button className='bg-[#1d1b1b] text-white py-[8px] px-[12px] rounded-[8px] border border-[#21210f]'>Dashboard</button>
                    </Link>
                }
            </div>
        </div>
    )
}

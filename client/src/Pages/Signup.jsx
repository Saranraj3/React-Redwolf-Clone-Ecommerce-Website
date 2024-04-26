import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../Common";
import { toast } from "react-toastify";

function Signup() {

    const navigate = useNavigate();

    const [data, setData] = useState({
        Firstname: '',
        Lastname: '',
        Email: '',
        Password: '',
        Confirmpassword: '',
    })

    const HandleOnChange = (e) => {
        const { name, value } = e.target
        setData((preve) => {
            return {
                ...preve,
                [name]: value
            };
        });
    };


    const HandleOnSubmit = async (e) => {
        e.preventDefault()

        const dataresponse = await fetch(API.Signup.url, {
            method: API.Signup.method,
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })

        const dataAPI = await dataresponse.json()

        if (dataAPI.success) {
            toast.success(dataAPI.message)
            navigate('/account')
        }

        if (dataAPI.error) {
            toast.error(dataAPI.message)
        }

    }

    return (
        <div>
            <h1 className='mt-3 text-2xl text-center font-semibold text-gray-800 '>REGISTER NEW ACCOUNT</h1>
            <p className='mt-2 text-[15px] text-center text-footercolor'>ALREADY HAVE AN ACCUNT?<Link className='text-Red ml-1' to='/login'>CLICK HERE TO LOGIN</Link> </p>
            <form onSubmit={HandleOnSubmit}>
                <div className='text-center mt-5'>
                    <label className='mr-[4rem] text-footercolor text-sm' htmlFor="Fast Name">First Name</label>
                    <input className='pl-3 font-light w-[32rem] h-8 rounded-md placeholder-footercolor border border-gray-300' type="text" name='Firstname' value={data.Firstname} onChange={HandleOnChange} placeholder='First Name ' required />
                </div>
                <div className='text-center mt-5'>
                    <label className='mr-[4rem] text-footercolor text-sm' htmlFor="Last Name">Last Name</label>
                    <input className='pl-3 font-light w-[32rem] h-8 rounded-md placeholder-footercolor border border-gray-300' type="text" name='Lastname' value={data.Lastname} onChange={HandleOnChange} placeholder='Last Name' required />
                </div>
                <div className='text-center mt-5'>
                    <label className='mr-[5.7rem] text-footercolor text-sm' htmlFor="Email">E-mail</label>
                    <input className='pl-3 font-light w-[32rem] h-8 rounded-md placeholder-footercolor border border-gray-300' type="email" name='Email' value={data.Email} onChange={HandleOnChange} placeholder='E-mail' required />
                </div>
                <div className='text-center mt-5'>
                    <label className='mr-[4rem] text-footercolor text-sm' htmlFor="password">Password</label>
                    <input className='pl-3 font-light w-[32rem] h-8 rounded-md placeholder-footercolor border border-gray-300' type="password" name='Password' value={data.Password} onChange={HandleOnChange} placeholder='Password' required />
                </div>
                <div className='text-center mt-5'>
                    <label className='mr-3 text-footercolor text-sm' htmlFor="confirm password">Confirm Password</label>
                    <input className=' pl-3 font-light w-[32rem] h-8 rounded-md placeholder-footercolor border border-gray-300' type="password" name='Confirmpassword' value={data.Confirmpassword} onChange={HandleOnChange} placeholder='Confirm Password' required />
                </div>
                <div className='text-center mt-5'>
                    <label className='ml-[-25rem] text-footercolor text-sm' htmlFor="newsletter">Subscribe to Newsletter</label>
                    <input className='ml-4 accent-Red' type="radio" name='newsletter' placeholder='' required />
                    <label className=' mr-4 text-footercolor text-sm' htmlFor="">Yes</label>
                    <input className='accent-Red' type="radio" name='newsletter' placeholder='' required />
                    <label className=' text-footercolor text-sm' htmlFor="">No</label>
                </div>
                <p className='text-xs mt-2 text-center text-footercolor '>By creating an account,your agreeing to our<span className='ml-1 text-xs text-Red'>Privacy Policy.</span></p>
                <button className='ml-[39rem] mt-6 rounded-sm font-bold text-white bg-red-600 w-[7rem] h-[2.5rem] ' type='submit'>Continue</button>
            </form>
        </div>
    )
}

export default Signup
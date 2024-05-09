import React from "react";
import { Link } from "react-router-dom";
import google from '../Assets/Png/google.png';

function Login() {

    return (
        <div>
            <h1 className='sm:mt-3 sm:text-xl md:text-2xl text-center font-semibold text-gray-800 '>LOGIN TO YOUR ACCOUNT</h1>
            <p className='sm:mt-2 sm:text-sm md:text-[15px] text-center text-footercolor'>DON'T HAVE AN ACCOUNT?<Link className='text-Red ml-1' to='/signup'>CLICK HERE TO REGISTER</Link></p>
            <p className='sm:mt-2 sm:text-sm md:text-[15px] text-center text-footercolor'>SIGN IN WITH YOUR EMAIL</p>
            <form>
                <div className='text-center sm:mt-5'>
                    <label className='mr-[4rem] text-footercolor text-sm' htmlFor="email">Email</label>
                    <input className='sm:w-[14rem] sm:text-sm md:w-[32rem] pl-3 font-light h-8 rounded-md placeholder-footercolor border border-gray-300' type="email" name='Email' placeholder='Email' />
                </div>
                <div className='text-center mt-3'>
                    <label className='mr-[4rem] text-footercolor text-sm' htmlFor="password">Password</label>
                    <input className='sm:w-[14rem] sm:text-sm md:w-[32rem] pl-3 ml-[-1.2rem] mt-5 font-light h-8 rounded-md placeholder-footercolor border border-gray-300' type="password" name='Password' placeholder='Password' />
                </div>
                <button className=' sm:ml-[8rem] sm:w-[6rem] sm:h-[2.2rem] sm:mt-6 md:ml-[39rem] md:w-[7rem] md:h-[2.5rem] hover:opacity-90 rounded-[4px] font-bold text-white bg-red-600 ' type='submit'>Login</button>
                <p className='sm:text-xs md:text-sm mt-3 text-Red text-center'>FORGOT YOUR PASSWORD?</p>
                <div class="mt-[-1rem] inline-flex items-center justify-center w-full">
                    <hr class=" w-[45rem] h-px my-8 bg-gray-200 border-0 dark:bg-gray-400" />
                    <p className='text-sm  absolute px-3 font-light text-gray-900 -translate-x-1/2 bg-white left-1/2 '>OR</p>
                </div>
                <p className='sm:text-sm text-center text-footercolor'>SIGN IN WITH A SOCIAL ACCOUANT</p>
                <button className='sm:ml-[5rem] md:ml-[35rem] hover:opacity-80 relative pl-5 mt-5 rounded-sm font-bold text-white bg-blue-600 w-[15rem] h-[2.5rem] '>Login With Google</button>
                <img className='sm:ml-[5.2rem] md:ml-[35.1rem]  absolute mt-[-2.3rem] bg-white w-[2.1rem] h-[2.1rem] ' src={google} alt="" />
                <p className='text-xs mt-5 text-center text-footercolor '>By creating an account,your agreeing to our<span className='ml-1 text-xs text-Red'>Privacy Policy.</span></p>
            </form>
        </div>
    )
}

export default Login
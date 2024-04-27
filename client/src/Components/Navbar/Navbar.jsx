import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import redwolftitlegif from '../../Assets/Png/rw-logo-gif-transparent-red.gif'
import { RiArrowDropDownLine } from "react-icons/ri";
import search from '../../Assets/Png/searchicon.png'
import icon from '../../Assets/Png/icon.png'
import Location from '../../Assets/Png/Location.png'
import User from '../../Assets/Png/User.png'
import Cart from '../../Assets/Png/Cart.png'
import smsearch from '../../Assets/Png/sm-search.png'
import smmenu from '../../Assets/Png/sm-menu.png'
import smcart from '../../Assets/Png/sm-cart.png'

const Navbar = ({ user }) => {
  const logout = () => {
    window.open("http://localhost:5050/auth/logout", "_self");
  };

  const [profilesuggest, setProfilesuggest] = useState(false)

  const ProfileChange = () => {
    setProfilesuggest(!profilesuggest)
  }

  return (
    <div className='sticky top-0 z-10 h-[2.5rem] bg-white overflow-y-hidden overflow-x-hidden'>
      <p className='sm:text-center sm:font-extrabold sm:text-2xl sm:h-10 sm:pt-1 lg:invisible relative bg-Red text-white font-extrabold '>REDWOLF</p>
      <div className=' sm:left-0 absolute' >
        <img className='lg:invisible sm:mt-[-2.4rem] sm:ml-4  sm:h-8 sm:w-8  ' src={smmenu} alt="" />
      </div>
      <div className='lg:invisible sm:right-0  sm:h-8 sm:w-8 sm:mt-[-2.4rem] absolute flex '>
        <img className='sm:ml-[-3rem]' src={smsearch} alt="" />
        <img src={smcart} alt="" />
      </div>
      <nav className='lg:mt-[-2.5rem] lg:visible sm:invisible flex'>
        <Link to='/'><p className='xl:w-[11rem] lg:h-[3rem] lg:w-[11rem] lg:pt-1 lg:text-2xl lg:text-center font-extrabold text-white bg-Red'>𝑅𝐸𝒟𝒲𝒪𝐿𝐹</p></Link>
        <img className='xl:ml-[-9.5rem] lg:w-[8rem] lg:h-9 lg:ml-[-9.2rem] opacity-0 transition-opacity duration-300 transform hover:opacity-100 cursor-pointer ' src={redwolftitlegif} alt="" />
        <ul className='xl:ml-[3rem] xl:gap-4 xl:text-sm lg:ml-8 lg:mt-3 lg:gap-1 lg:text-xs font-extrabold flex'>
          <li className=' cursor-pointer flex hover:text-Red'>SHOP<RiArrowDropDownLine className='lg:h-7 lg:w-7' /></li>
          <li className=' cursor-pointer flex hover:text-Red'>MEN<RiArrowDropDownLine className='lg:h-7 lg:w-7' /></li>
          <li className=' cursor-pointer flex hover:text-Red'>WOMEN<RiArrowDropDownLine className='lg:h-7 lg:w-7' /></li>
          <li className=' cursor-pointer xl:visible lg:invisible flex hover:text-Red'>ACCESSORIES<RiArrowDropDownLine className='lg:h-7 lg:w-7' /></li>
          <li className=' cursor-pointer xl:ml-0 lg:ml-[-7.3rem] flex hover:text-Red'>CHARACTERS<RiArrowDropDownLine className='lg:h-7 lg:w-7' /></li>
          <li className=' cursor-pointer flex hover:text-Red'>ARTISTMERCH<RiArrowDropDownLine className='lg:h-7 lg:w-7' /></li>
        </ul>
        <div className='relative xl:ml-4 lg:mt-[-0.5rem] items-center flex'>
          <img className='lg:h-4 lg:ml-2 absolute ' src={search} alt="" />
          <input className='xl:w-[13rem] xl:text-sm lg:h-[2rem] lg:w-[67%] lg:pl-[2rem] lg:text-xs border border-bordergray placeholder-gray-500 bg-backgroundgray cursor-pointer rounded-md ' type="search" placeholder='Search for Products,Shows Or Characters' />
        </div>
        <div className='xl:ml-6 xl:gap-8 lg:h-7 lg:mt-[0.3rem] lg:gap-8 divide-x flex'>
          <img className='cursor-pointer ' src={icon} alt="" />
          <img className='cursor-pointer ' src={Location} alt="" />
          <div className='flex'>
            {user ? (
              <div>
                <img className='absolute rounded-full cursor-pointer lg:h-7 lg:w-10 xl:w-7 ml-[rem]' src={user.photos[0].value} alt="" />
                <div className='relative bg- text-Red mt-4'>
              <ul className='cursor-pointer'>
                  <li onClick={logout}>LOG OUT</li>
                  <li>ACCOUNT</li>
                  <li>WISH LIST</li>
                  <li>WALLET</li>
                  <li>ORDERS</li>
                </ul>
                </div>
                 
              
              </div>
            ) :
              <Link to='/login'><img className='cursor-pointer lg:h-7 lg:w-10 xl:w-7' src={User} alt="" /></Link>
            }
          </div>
          <div>
            <img className='absolute cursor-pointer lg:h-7 lg:w-10 xl:w-7 ml-2' src={Cart} alt="" />
            <p className='bg-black text-white text-center w-[1.3rem] size-[23px] rounded-[23px] mt-[-0.4rem] ml-5 relative'>0</p>
          </div>
        </div>
      </nav>
      <hr className='mt-[-0.6rem] ' />
    </div>
  )
}

export default Navbar
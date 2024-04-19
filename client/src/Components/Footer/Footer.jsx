import React from 'react'
import facebook from '../../Assets/FooterIcons/facebook-.png'
import twitter from '../../Assets/FooterIcons/twitter.png'
import instagram from '../../Assets/FooterIcons/instagram.png'
import pinterest from '../../Assets/FooterIcons/pinterest.png'
import deliverytruck from '../../Assets/FooterIcons/fast-delivery.png'
import indianruppe from '../../Assets/FooterIcons/rupee-indian.png'
import boxorder from '../../Assets/FooterIcons/sent.png'
import cicon from '../../Assets/FooterIcons/c-icon.png'

function Footer() {
  return (
    <div className='box-border sm:mt-5 bg-LightBlack sm:w-[100%]'>
      <p className='xl:max-w-[33rem] xl:ml-[-1rem] md:max-w-[22rem] md:text-left md:pl-[4rem] sm:text-sm text-center sm:text-footercolor sm:pt-[3rem]'>Subscribe to our Newsletter for updates and exclusive coupons & deals</p>
      <div className=' md:mt-[-5.5rem] md:ml-[13rem] md:text-center sm:mt-[-2rem]'>
        <input className='md:w-[31%] md:h-[2rem] sm:ml-3 sm:mt-[3rem] sm:pl-2 sm:w-[95%] sm:h-[3rem] font-light sm:text-sm placeholder-footercolor rounded-md ' type="email" placeholder='Enter Your Email Address' name="" id="" />
        <button className='md:w-[16%] md:h-[2rem] sm:ml-3 sm:mt-5 sm:w-[95%] sm:h-[3rem] sm:text-sm font-extrabold  bg-Red text-white rounded-md ' type='submit'>Submit</button>
      </div>
      <div className='md:text-left md:ml-[-0.7rem]'>
        <h3 className='md:ml-8 sm:ml-[4rem] sm:mt-6  sm:text-white sm:text-sm'>Information</h3>
        <p className=' md:ml-[2rem] sm:ml-[4.5rem] sm:mt-2 sm:text-sm sm:text-footercolor '>About Us </p>
        <p className=' md:ml-[2rem] sm:ml-[2rem] sm:mt-1 sm:text-footercolor sm:text-sm'>Delivery Information</p>
        <p className=' md:ml-[2rem] sm:ml-[3.5rem] sm:mt-1 sm:text-footercolor sm:text-sm'>Return Policy</p>
        <p className=' md:ml-[2rem] sm:ml-[1rem] sm:mt-1 sm:text-footercolor sm:text-sm'>Frequently Asked</p>
        <p className=' md:ml-[2rem] md:mt-[0.1rem] sm:ml-[8.2rem] sm:mt-[-1.3rem] sm:text-footercolor sm:text-sm'>Questions</p>
        <p className=' md:ml-[2rem] sm:ml-[3rem] sm:mt-1 sm:text-footercolor sm:text-sm'>Term & Conditions</p>
        <p className=' md:ml-[2rem] sm:ml-[4rem] sm:mt-1 sm:text-footercolor sm:text-sm'>Privacy Policy</p>
        <p className=' md:ml-[2rem] sm:ml-[2rem] sm:mt-1 sm:text-footercolor sm:text-sm'>Bulk & Custom</p>
        <p className=' md:ml-[2rem] md:mt-[0.1rem] sm:ml-[8rem] sm:mt-[-1.3rem] sm:text-footercolor sm:text-sm'>Orders</p>
        <p className=' md:ml-[2rem] sm:ml-[2.4rem] sm:mt-1 sm:text-footercolor sm:text-sm'>Preorder Campaigns</p>
        <p className=' md:ml-[2rem] sm:ml-[1rem] sm:mt-1 sm:text-footercolor sm:text-sm'>Campus Abassador</p>
        <p className=' md:ml-[2rem] md:mt-[0.1rem] sm:ml-[8.7rem] sm:mt-[-1.2rem] sm:text-footercolor sm:text-sm'>Program</p>
      </div>
      <div className='md:ml-[-rem]'>
        <h3 className='md:mt-[-19.3rem] md:text-left md:ml-[13rem] sm:text-right sm:mr-[3.5rem] sm:text-white sm:text-sm sm:mt-[-15rem]'>Extras</h3>
        <p className=' md:text-left md:ml-[13rem] sm:text-right sm:mr-[2rem] sm:text-footercolor sm:text-sm sm:mt-2'>Gift Vouchers</p>
        <p className=' md:text-left md:ml-[13rem] sm:text-right sm:mr-[3rem] sm:text-footercolor sm:text-sm sm:mt-1'>Afflliates</p>
        <p className=' md:text-left md:ml-[13rem] sm:text-right sm:mr-[3rem] sm:text-footercolor sm:text-sm sm:mt-1'>Fan Wall</p>
        <p className=' md:text-left md:ml-[13rem] sm:text-right sm:mr-[3rem] sm:text-footercolor sm:text-sm sm:mt-1'>Site Map</p>
      </div>
      <div>
        <h3 className=' md:mt-[-7.5rem] md:ml-[20rem] sm:ml-[2rem] sm:mt-[9rem] sm:text-white sm:text-sm'>Customer Services</h3>
        <p className='  md:ml-[20rem] sm:ml-[3rem] sm:mt-3 sm:text-footercolor sm:text-sm' >Contact Us</p>
        <p className='  md:ml-[20rem] sm:ml-[2rem] sm:mt-1 sm:text-footercolor sm:text-sm'>Request A Return</p>
      </div>
      <div className='xl:mr-[14rem]'>
        <h3 className='md:mt-[-4.7rem] md:text-center sm:text-right sm:mr-[3rem] sm:mt-[-4.5rem] sm:text-white sm:text-sm '>My Account</h3>
        <p className='md:text-center sm:text-right sm:mr-[3rem] sm:sm:text-footercolor sm:text-sm sm:mt-1  '>My Account</p>
        <p className='md:text-center sm:text-right sm:mr-[2.6rem] sm:text-footercolor sm:text-sm sm:mt-1  '>Order History</p>
        <p className='md:text-center sm:text-right sm:mr-[3rem] sm:text-footercolor sm:text-sm sm:mt-1 '>Newslatter</p>
      </div>
      <div >
        <h3 className=' sm:text-center sm:mt-[2rem] sm:text-sm text-white'>Social</h3>
        <div className=' sm:ml-[47%] sm:w-8 items-center justify-center sm:gap-8 flex' >
          <img className=' hover:opacity-30' src={facebook} alt="" />
          <img className=' hover:opacity-30' src={twitter} alt="" />
          <img className=' hover:opacity-30' src={instagram} alt="" />
          <img className=' hover:opacity-30' src={pinterest} alt="" />
        </div>
      </div>
      <div>
        <h3 className='md:mt-[18rem] sm:mt-5 sm:text-center text-white '>Our site uses secure payment gateways. All major credit & debit cards accepted.</h3>
        <img className='sm:ml-[1rem] sm:mt-[2rem]' src={deliverytruck} alt="" />
        <p className=' md:text-sm md:max-w-[10rem] sm:text-footercolor sm:mt-[-2rem] sm:ml-[4rem]  '>FREE SHIPPING ON ALL PREPAID ORDERS OVER Rs. 499</p>
        <img className='md:mt-[-4rem] md:ml-[20rem] sm:ml-[1rem] sm:mt-[1rem]' src={indianruppe} alt="" />
        <p className=' md:text-sm md:max-w-[10rem]  md:ml-[23rem] sm:text-footercolor sm:mt-[-2rem] sm:ml-[4rem] '>CASH ON DELIVERY AVAILABLE TO MOST PARTS OF INDIA</p>
        <img className='md:mt-[-4rem] md:ml-[35rem] sm:ml-[1rem] sm:mt-[1rem] ' src={boxorder} alt="" />
        <p className=' md:text-sm md:max-w-[7rem] md:ml-[38rem] sm:text-footercolor sm:mt-[-2rem] sm:ml-[4rem] ' >EASY 15 DAY RETURN POLICY</p>
      </div>
      <div className='md:mt-[8rem] sm:w-full sm:h-3rem bg-gray-700 sm:mt-5 flex items-center justify-center'>
        <img className='sm:w-4' src={cicon} alt="" />
        <p className='text-white sm:text-sm sm:text-center'>2023 Redwolf, All Rights Reserved</p>
      </div>
      <div className='bg-white sm:w-full sm:h-[1rem]'>
      </div>
    </div>
  )
}

export default Footer
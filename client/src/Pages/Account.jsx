import React from 'react'
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
function Account() {
    return (
        <div>
            <h1 className='mt-3 text-gray-800 text-center text-2xl font-bold'>WELCOME, YOUNG WOLF!</h1>
            <h4 className='mt-3 text-gray-700 text-center font-light  '>This is your account on our website - you can change your profile preferences, view your order history and manage your transactions from here.</h4>
            <ul className='text-gray-800 m-[13rem] mt-[1rem] text-2xl font-bold text-center flex justify-between'>
                <li>ORDERS</li>
                <li>REWARDS</li>
                <li>ACCOUNT</li>
            </ul>
            <div className='flex justify-between m-[4rem] mt-[-12rem] '>
                <div className='box-border border border-gray-300 bg-gray-100 rounded-lg  w-[24rem] h-[10rem]'>
                    <ul className='pl-5 pt-5 font-medium text-red-500 '>
                        <li className='hover:text-Red cursor-pointer'>View Order History</li>
                        <li className='hover:text-Red cursor-pointer'>View Return Requests</li>
                        <li className='hover:text-Red cursor-pointer'>Manage With Lists</li>
                        <li className='hover:text-Red cursor-pointer'>Downloads</li>
                    </ul>
                </div>
                <div className='box-border border border-gray-300 bg-gray-100 rounded-lg w-[24rem] h-[10rem]'>
                    <ul className='pl-5 pt-5 font-medium text-red-500 '>
                        <li className='hover:text-Red cursor-pointer'>Alpha Membership </li>
                        <li className='hover:text-Red cursor-pointer'>view Redwolf Wallet</li>
                        <li className='hover:text-Red cursor-pointer'>View Affiliate Information</li>
                        <li className='hover:text-Red cursor-pointer'>Affiliate Link Builder</li>
                    </ul>
                </div>
                <div className='box-border border border-gray-300 bg-gray-100 rounded-lg  w-[24rem] h-[10rem]'>
                    <ul className='pl-5 pt-5 font-medium text-red-500 '>
                        <li className='hover:text-Red cursor-pointer'>Edit Account Information</li>
                        <li className='hover:text-Red cursor-pointer'>Change Password</li>
                        <li className='hover:text-Red cursor-pointer'>Manage Address Book</li>
                        <li className='hover:text-Red cursor-pointer'>Delete Account</li>
                        <li className='hover:text-Red cursor-pointer'>Log Out</li>
                    </ul>
                </div>
            </div>
            <p className='flex text-Red justify-end text-xs '><Link to='/'><FaHome /></Link><p className='ml-1 font-light'>Account</p></p>
        </div>
    )
}

export default Account
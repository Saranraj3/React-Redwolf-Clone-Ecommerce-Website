import React, { useEffect, useState } from 'react'
import sent from '../../Assets/FooterIcons/sent.png'
import facebook from '../../Assets/Png/facebook.png'
import twitter from '../../Assets/Png/twitter.png'
import whatsapp from '../../Assets/Png/whatsapp.png'
import email from '../../Assets/Png/email.png'
import pinterest from '../../Assets/Png/pinterest.png'
import addnew from '../../Assets/Png/add-new.png'
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useLocation } from 'react-router-dom'

function Product() {
    const [details, setDetails] = useState({});
    const [changecolor, setChangecolor] = useState(false);

    const handleclick = () => {
        setChangecolor(!changecolor)
    }
    const Location = useLocation();
    useEffect(() => {
        setDetails(Location.state.item)
    }, []);

    return (
        <div className='mt-5'>
            <h1 className='text-2xl font-semibold text-gray-800 ml-[5rem]'>{details.title}</h1>
            <h2 className='ml-[4.5rem] mt-3 pt-1.5 w-[9rem] h-[2.7rem] bg-Red text-white text-sm font-bold text-center'>{details.category1}</h2>
            <hr className='ml-[13.5rem] mt-[-6px] w-[65rem] h-[6px] dark:bg-Red' />
            <div className='flex'>
                <img className='object-contain mt-[-28rem] ml-[6rem] w-[21rem]' src={details.image} alt="" />
                <img className='object-contain mt-[-28rem] ml-[0.6rem] w-[21rem]' src={details.img} alt="" />
                <span className='flex ml-[-43.2rem] mt-[rem]'>
                    <img className='object-contain mt-[29rem] ml-[0.6rem] w-[21rem]' src={details.im1} alt="" />
                    <img className='object-contain mt-[29rem] ml-[0.6rem] w-[21rem]' src={details.im2} alt="" />
                </span>

                <div>
                    <h1 className='text-nowrap mt-2 ml-3 text-2xl font-semibold text-gray-800'>{details.secondtitle}</h1>
                    <p className='mt-[0.5rem] ml-3 max-w-[28rem] text-[16px] text-footercolor'>{details.description}</p>
                    <img className='mt-4 ml-3 w-6 h-6' src={sent} alt="" />
                    <p className='mt-[-1rem] ml-[3rem] max-w-[28rem] text-sm text-footercolor'>{details.shortdescription}</p>
                    <h3 className='text-Red text-sm font-light mt-3 ml-3'>View More Details</h3>
                    <span className='flex mt-5'>
                        <p className='ml-3 text-xl font-bold text-gray-800'>{details.newprice}.00</p>
                        <del><p className='ml-3 text-lg font-bold  text-gray-600 ' >{details.oldprice}.00</p></del>
                        <h1 className='ml-2 text-xl font-bold text-Red'>{details.off}</h1>
                    </span>
                    <h1 className='ml-5 font-light text-sm text-gray-800'>(Incl.of GST)</h1>
                    <div className='box-border border border-black bg-gray-100 rounded-lg mt-3 ml-3 w-[29rem] h-[4rem]'>
                        <h3 className='text-sm ml-8 mt-3 text-gray-800'>Member Price</h3>
                        <h4 className='text-gray-800 text-sm font-bold ml-[3.5rem] mt-1'>{details.memberprice}</h4>
                        <span className='flex ml-[13rem] mt-[-3rem] text-sm'>
                            <h3 className='text-gray-800'>Save</h3>
                            <h3 className='ml-1 font-bold text-Red'>{details.membership}</h3>
                            <h3 className='ml-1 text-sm text-gray-800'>With Alpha Membership</h3>
                        </span>
                        <h4 className='ml-[16rem] mt-2 text-gray-800 text-xs'>and enjoy free returns</h4>
                    </div>
                    <h1 className='ml-3 mt-2 text-xl'>CLICK TO SELECT SIZE:</h1>
                    <div className='flex mt-[0.3rem]'>
                        <h1 onClick={handleclick} className={`rounded-[4px] box-border border border-black text-center font-bold ml-3 pt-2 w-[3rem] h-[2.5rem] ${(changecolor === true) ? 'bg-Red text-white border-none' : 'bg-white'}`}>XS</h1>
                        <h1 className='rounded-[4px] box-border border border-black text-center font-bold ml-1 pt-2 w-[3rem] h-[2.5rem]'>S</h1>
                        <h1 className='rounded-[4px] box-border border border-black text-center font-bold ml-1 pt-2 w-[3rem] h-[2.5rem]'>M</h1>
                        <h1 className='rounded-[4px] box-border border border-black text-center font-bold ml-1 pt-2 w-[3rem] h-[2.5rem]'>L</h1>
                        <h1 className='rounded-[4px] box-border border border-black text-center font-bold ml-1 pt-2 w-[3rem] h-[2.5rem]'>XL</h1>
                        <h1 className='rounded-[4px] box-border border border-black text-center font-bold ml-1 pt-2 w-[3rem] h-[2.5rem]'>2XL</h1>
                        <h1 className='rounded-[4px] box-border border border-black text-center font-bold ml-1 pt-2 w-[3rem] h-[2.5rem]'>3XL</h1>
                    </div>
                    <h2 className='text-base text-Red mt-4 ml-3 '>CLICK TO VIEW OUR SIZE CHART</h2>
                    <span className='flex mt-2 ml-3'>
                        <h2 className='text-gray-800 mt-1 font-light '>Quantity</h2>
                        <select className='ml-2 w-[6rem] h-[2rem] box-border border border-gray-300 ' name="" id="">
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                            <option value="">4</option>
                            <option value="">5</option>
                            <option value="">6</option>
                            <option value="">7</option>
                            <option value="">8</option>
                            <option value="">9</option>
                            <option value="">10</option>
                        </select>
                    </span>
                    <h1 className='ml-3 mt-8 pt-2 font-bold text-center text-white bg-Red rounded-md w-[29rem] h-[2.5rem] '>ADD TO CART</h1>
                    <h2 className='ml-5 mt-3 text-lg font-bold text-gray-700'>Login To Share & Share Cash!</h2>
                    <div className='flex ml-5 mt-2 h-10'>
                        <img className='ml-[-0.2rem]' src={facebook} alt="" />
                        <img className='ml-[-0.2rem]' src={twitter} alt="" />
                        <img className='ml-[-0.2rem]' src={whatsapp} alt="" />
                        <img className='ml-[-0.2rem]' src={email} alt="" />
                        <img className='ml-[-0.2rem]' src={pinterest} alt="" />
                        <img className='ml-[-0.2rem]' src={addnew} alt="" />
                    </div>
                    <h4 className='ml-3 mt-3 pt-1 rounded-[6px] text-center text-sm font-bold text-white bg-Red w-[11rem] h-[2rem]'><FavoriteIcon /> ADD TO WISLIST</h4>
                    <div className='ml-3 mt-3 '>
                        <StarBorderIcon className='text-gray-500' />
                        <StarBorderIcon className='text-gray-500' />
                        <StarBorderIcon className='text-gray-500' />
                        <StarBorderIcon className='text-gray-500' />
                        <StarBorderIcon className='text-gray-500' />
                    </div>
                    <h3 className='text-Red text-sm mt-[-1.3rem] ml-[8.5rem]'>0 reviews / Write a review</h3>
                </div>
            </div>
            <div className='mt-10 ml-[6rem] w-[85%] h-[30rem] bg-backgroundgray '>
                <h1 className='pt-3 text-center font-bold text-xl text-gray-700'>ABOUT THE DESIGN</h1>
                <h5 className='pt-2 pl-3 text-gray-800 font-bold'>{details.title}</h5>
                <img className='pl-[52rem] pr-[1rem]' src={details.poster} alt="" />
                <div className='pl-3 mt-[-18rem] max-w-[50rem] text-gray-700 text-[16px]'>
                    <p className='pt-4'>{details.paragraph1}</p>
                    <p className='pt-4'>{details.paragraph2}</p>
                    <p className='pt-4'>{details.paragraph3}</p>
                    <p className='pt-4'>{details.paragraph4}</p>
                </div>
                <h3 className='pt-[9rem] pl-3 text-gray-700 '>{details.paragraph5}</h3>
            </div>
        </div>
    )
}

export default Product
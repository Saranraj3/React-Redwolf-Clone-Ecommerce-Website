import React from 'react'

function HomeCategory(props) {
 
  return (
    <div className=' sm:ml-1 w-[100%] mt-2'>
      <img  src={props.image} alt="" />
      <h4 className='underline sm:text-xs text-sm text-gray-700'>{props.name}</h4>
      <h5 className='text-red-500 text-xs '>{props.brand}</h5>
      <p className='text-sm text-gray-700'>{props.newprice}</p>
      <del><p className='text-xs  text-gray-600 ' >{props.oldprice}</p></del>
    </div>
  )
}

export default HomeCategory
import React from 'react'
import { useNavigate } from 'react-router-dom';

function HomeCategory(props) {
  const navigate = useNavigate();
  const _id = props.name;
  const IdString =(_id)=>{
    return String(_id).toLowerCase().split(" ").join("")
  }
  const rootId = IdString(_id)
  const HandleDetails = () => {
  navigate(`/product/${rootId}`,{
    state:{
      item:props,
    }
  })
  }
  return (
    <div className=' sm:ml-1 w-[100%] mt-2'>
      <img onClick={HandleDetails} src={props.image} alt="" />
      <h4 className='underline sm:text-xs text-sm text-gray-700'>{props.name}</h4>
      <h5 className='text-red-500 text-xs '>{props.brand}</h5>
      <p className='text-sm text-gray-700'>{props.newprice}</p>
      <del><p className='text-xs  text-gray-600 ' >{props.oldprice}</p></del>
    </div>
  )
}

export default HomeCategory
import React from 'react'
import HomePage from '../HomeCategory/HomeMenu'
import HomeCategory from '../HomeCategory/HomeCategory'

function ProductList() {
  return (
    <div className='overflow-x-hidden xl:mt-[2rem] xl:m-[5rem] lg:m-[2rem] lg:mt-[1rem]'>
      <p className='sm:text-lg md:text-2xl font-extrabold text-center text-gray-700'>FEATURED PRODUCTS</p>
      <div className='xl:mt-5 md:grid md:grid-cols-4 sm:grid sm:grid-cols-3 flex justify-center flex-wrap'>
        {HomePage.map((list, i) => {
          return <HomeCategory key={i} image={list.image} name={list.name} brand={list.brand} newprice={list.newprice} oldprice={list.oldprice} />
        })}
      </div>
    </div>
  )
}

export default ProductList
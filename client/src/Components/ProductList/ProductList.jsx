import React from 'react'
import HomePage from '../HomeCategory/HomeMenu'
import HomeCategory from '../HomeCategory/HomeCategory'

function ProductList() {
  return (
    <div className='overflow-x-hidden xl:mt-[-3rem] lg:m-[5rem]'>
      <p className='sm:text-lg md:text-2xl font-extrabold text-center text-gray-700'></p>
      <div className=' md:grid md:grid-cols-4 sm:grid sm:grid-cols-3 flex justify-center flex-wrap'>
        {HomePage.map((list, i) => {
          return <HomeCategory key={i} title={list.title} category1={list.category1} image={list.image} img={list.img} im1={list.im1} im2={list.im2} poster={list.poster} secondtitle={list.secondtitle} description={list.description} shortdescription={list.shortdescription} paragraph1={list.paragraph1} paragraph2={list.paragraph2} paragraph3={list.paragraph3} paragraph4={list.paragraph4} paragraph5={list.paragraph5} name={list.name} brand={list.brand} newprice={list.newprice} oldprice={list.oldprice} off={list.off} memberprice={list.memberprice} membership={list.membership} />
        })}
      </div>
    </div>
  )
}

export default ProductList
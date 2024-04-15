import React from 'react'
import anime from '../../Assets/SectionPngs/featured-theme-anime.jpg'
import superhero from '../../Assets/SectionPngs/featured-theme-superhero.jpg'
import glowindark from '../../Assets/SectionPngs/featured-theme-glow-in-dark.jpg'
import cartoon from '../../Assets/SectionPngs/featured-theme-cartoon.jpg'
import slogan from '../../Assets/SectionPngs/featured-theme-slogan.jpg'
import funny from '../../Assets/SectionPngs/featured-theme-funny.jpg'
import geek from '../../Assets/SectionPngs/featured-theme-geek.jpg'
import funky from '../../Assets/SectionPngs/featured-theme-funky.jpg'

function Section() {
    return (
        <div>
            <p className='sm:text-center sm:mt-6 font-extrabold text-nowrap text-2xl text-gray-700'>FEATURED THEMES</p>
            <div className='flex xl:gap-1 xl:justify-center xl:h-[9rem] lg:h-[8rem] sm:h-[7.4rem] sm:mt-2 ' >
            <img className='xl:h-[9rem]' src={anime} alt="" />  
                <p className='xl:mt-[9rem] xl:ml-[-6rem] lg:mt-[8rem] sm:ml-[-5.2rem] sm:mt-[7rem] sm:text-sm ' >ANIME</p>

                <img className='sm:ml-11' src={superhero} alt="" />
                <p className='xl:mt-[9rem] xl:ml-[-7rem] lg:mt-[8rem] sm:text-sm sm:ml-[-6.5rem] sm:mt-[7rem] '>SUPERHERO</p>

                <img className='sm:ml-8 ' src={glowindark} alt="" />
                <p className='xl:mt-[9rem] xl:ml-[-8rem] lg:mt-[8rem] sm:text-sm sm:ml-[-7rem] sm:mt-[7rem] sm:text-nowrap ' >GLOW IN DARK</p>

                <img className='sm:ml-4' src={cartoon} alt="" />
                <p className='xl:mt-[9rem] xl:ml-[-7rem] lg:mt-[8rem] sm:text-sm sm:ml-[-6rem] sm:mt-[7rem] '>CARTOON</p>

                <img className='sm:ml-[2rem]' src={slogan} alt="" />
                <p className='xl:mt-[9rem] xl:ml-[-6rem] lg:mt-[8rem] sm:text-sm sm:ml-[-5.5rem] sm:mt-[7rem] '>SLOGAN</p>

                <img className='sm:ml-[2rem]' src={funny} alt="" />
                <p className='xl:mt-[9rem] xl:ml-[-6rem] lg:mt-[8rem] sm:text-sm sm:ml-[-5rem] sm:mt-[7rem]'>FUNNY</p>

                <img className='sm:ml-[2rem]' src={geek} alt="" />
                <p className='xl:mt-[9rem] xl:ml-[-6rem] lg:mt-[8rem] sm:text-sm sm:ml-[-5rem] sm:mt-[7rem] '>GEEK</p>

                <img className='sm:ml-[3rem]' src={funky} alt="" />
                <p className='xl:mt-[9rem] xl:ml-[-6rem] lg:mt-[8rem] sm:text-sm sm:ml-[-5.5rem] sm:mt-[7rem] '>FUNKY</p>
            </div>
        </div>


    )
}

export default Section
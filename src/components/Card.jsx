import React from 'react'
import 'aos/dist/aos.css'
import AOS from 'aos'

const Card = ({index,animation}) => {

    AOS.init();

  return (
    <>
        <div data-aos={animation} className='bg-red-300 h-[100px] w-full flex justify-center items-center rounded'>
            <p>#{index}</p>
        </div>
    </>
  )
}

export default Card
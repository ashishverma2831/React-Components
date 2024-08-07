import React from 'react'
import MaterialButton from './MaterialButton'

const Header = () => {
    return (
        <>
            <header className='flex items-center justify-between p-2  md:p-4'>
                <div className='flex items-center gap-2'>
                <div className='block md:hidden'>
                    <i className=" text-2xl fa-solid fa-bars"></i>
                </div>
                <div className='flex items-center gap-2 px-2'>
                    <img width={40} className='cursor-pointer' src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQgByBT5IiAT_a2x9pUVb4VMoOrlzHH7Jrzj-HB5jzHlR4lNLMS' />
                    <p className='hidden md:block'>Team 1</p>
                    <button type='button' className='hidden md:block text-[14px] px-2 font-medium text-gray-800 bg-gray-400 rounded-lg'>Free</button>
                    <button type='button'>
                        <img className='w-3 rotate-90' src='./src/assets/scroll.png' alt='scroll-arrow' />
                    </button>
                </div> 
                </div>
                <div className='flex gap-1 md:gap-2 items-center'>
                    <div className='md:bg-gray-400 rounded-lg flex gap-4 p-2 items-center  md:mr-3'>
                        <i className="text-gray-800 fa-solid fa-magnifying-glass"></i>
                        <p className='bg-gray-300 px-2 rounded-md hidden md:block'>K</p>
                    </div>
                    <div className='rounded-full hover:bg-gray-300/50 h-6 w-6 md:h-10 md:w-10 cursor-pointer flex justify-center items-center'>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5WZn1MYCdisvWzn2geMDKMKXz2MNqnXCYKQ&s' alt='country' />
                    </div>
                    <div className='rounded-full hover:bg-gray-300/50 h-6 w-6 md:h-10 md:w-10 cursor-pointer flex justify-center items-center'>
                    <i className="text-xl fa-solid fa-bell"></i>
                    </div>
                    <div className='rounded-full hover:bg-gray-300/50  h-6 w-6 md:h-10 md:w-10 cursor-pointer flex justify-center items-center'>
                        <i className="text-xl fa-solid fa-user"></i>
                    </div>
                    <div className='hover:bg-gray-300/50 h-10 w-10 flex justify-center items-center rounded-full'>
                    <i className="cursor-pointer animate-spin text-center rounded-full fa-solid fa-gear text-2xl text-gray-800"></i>
                    </div>
                    <div className='rounded-full cursor-pointer bg-gray-600  h-6 w-6 md:h-10 md:w-10 flex justify-center items-center'>
                        <i className="text-xl fa-solid fa-user"></i>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
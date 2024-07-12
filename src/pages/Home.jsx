import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

const Home = () => {
  return (
    <>
      <section className='flex'>
        <div className='bg-red-500 w-[450px]'>
          <Sidebar />
        </div>
        <div className=' w-full'>
          <div>
            <Header />
          </div>
          <div className='bg-yellow-500'>
            <p>hello</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
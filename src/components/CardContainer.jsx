// import { Card } from '@material-tailwind/react'
import React from 'react'
import Card from './Card'

const CardContainer = () => {
  return (
    <>
        <section className='bg-red-300/50 p-[64px] grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center'>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </section>
    </>
  )
}

export default CardContainer
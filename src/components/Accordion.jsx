import React, { useState } from 'react'

const Accordion = () => {

    const [currentAccordion, setCurrentAccordion] = useState();

    const accordionData = [
        {
            title: 'Tab 1',
            content: 'React is extremely popular'
        },
        {
            title: 'Tab 2',
            content: 'It makes building complex, interactive UIs a breeze'
        },
        {
            title: 'Tab 3',
            content: 'It has a very active and versatile ecosystem'
        }
    ]

    return (
        <>
            <div className='h-[100vh] bg-red-200 flex justify-center items-center flex-col'>
                <div className='w-1/3 bg-red-300 shadow rounded p-5'>
                    <div className='flex justify-evenly gap-2 flex-col'>
                        {
                            accordionData.map((item, index) => {
                                return (
                                    <div key={index} className='w-full'>
                                        <button className='w-full py-2.5 rounded bg-red-700 font-semibold text-white' onClick={() => { setCurrentAccordion(index) }}>{item.title}</button>
                                        <div className={currentAccordion === index ? 'bg-red-400 mt-4 h-48 p-5' : 'hidden'}>
                                            {item.content}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Accordion
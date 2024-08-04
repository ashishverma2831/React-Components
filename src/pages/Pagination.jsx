import React, { useState } from 'react'
import dataArray from './data'

const Pagination = () => {

    // console.log(dataArray);
    const [setstart, setsetstart] = useState(0);
    const [end, setEnd] = useState(16);
    let dataPerPage = 16;
    const [dataList, setDataList] = useState(dataArray);
    const [currentDatalist, setCurrentDatalist] = useState(dataList.slice(start, end));
    
    const handleNext = () => {
        console.log('Next');    
        start = end;
        end = start + dataPerPage;
        console.log(start, end);
        setCurrentDatalist(dataList.slice(start, end));
    }
    const handlePrevious = () => {
        console.log('Previous');
        end = start;
        console.log(start, end);
        start = end - dataPerPage;
        setCurrentDatalist(dataList.slice(start, end));
    }
    
    return (
        <>
            <section className='bg-red-600/50'>
                <h1 className='text-3xl text-center py-5'>Pagination</h1>
                <section className='bg-red-300/50 p-[32px] grid gap-6 grid-cols-3 md:grid-cols-4 xl:grid-cols-6 place-items-center'>
                    {
                        currentDatalist.map((data, index) => {
                            return <div key={index} className='bg-red-300 h-[100px] w-full flex justify-center items-center rounded'>
                                <p>#{data}</p>
                            </div>
                        })
                    }
                </section>
                <div className='bg-red-600/50 flex justify-center gap-4 text-center py-2'>
                    <button onClick={handlePrevious} className='px-4 py-2 bg-red-800 hover:bg-red-700 rounded'>Previous</button>
                    <button className='hover:bg-red-100/20 px-4 rounded-full'>1</button>
                    <button className='hover:bg-red-100/20 px-4 rounded-full'>2</button>
                    <button className='hover:bg-red-100/20 px-4 rounded-full'>3</button>
                    <button onClick={handleNext} className='px-4 py-2 bg-red-800 hover:bg-red-700 rounded'>Next</button>
                </div>
            </section>
        </>
    )
}

export default Pagination
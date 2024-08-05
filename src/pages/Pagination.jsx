import React, { useEffect, useReducer, useState } from 'react'
import dataArray from './data'


const itemsPerPage = 5;
const paginationReducer = (state,action) => {
    switch(action.type){
    case 'SET_TOTAL_ITEMS':
        return {
            ...state,
            totalItem:action.payload
        }
    case 'SET_CURRENT_PAGE':{
        return {
            ...state,
            currentPage:action.payload
        }
    }
    default:
        return state;
    }
}

const Pagination = () => {

    // console.log(dataArray);
    // const [start, setStart] = useState(0);
    // const [end, setEnd] = useState(16);
    // let dataPerPage = 16;
    // const [dataList, setDataList] = useState(dataArray);
    // const [currentDatalist, setCurrentDatalist] = useState(dataList.slice(start, end));
    
    // const handleNext = () => {
    //     console.log('Next');    
    //     start = end;
    //     end = start + dataPerPage;
    //     console.log(start, end);
    //     setCurrentDatalist(dataList.slice(start, end));
    // }
    // const handlePrevious = () => {
    //     console.log('Previous');
    //     end = start;
    //     console.log(start, end);
    //     start = end - dataPerPage;
    //     setCurrentDatalist(dataList.slice(start, end));
    // }

    const [paginationState,dispatch] = useReducer(paginationReducer,{
        currentPage:1,
        totalItem:0
    })
    const data = Array.from({length:25},(_,index)=>`Item ${index+1}`);
    console.log(data);

    useEffect(()=>{
        dispatch({type:'SET_TOTAL_ITEMS',payload:data.length})
    },[data])
    const startIndex = (paginationState.currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedItems = data.slice(startIndex,endIndex);
    
    const handlePageClick = (newPage) => {
        dispatch({type:'SET_CURRENT_PAGE',payload:newPage})
    }
    return (
        <>
            <section className='bg-red-600/50'>
                <h1 className='text-3xl text-center py-5'>Pagination</h1>
                <section className='bg-red-300/50 p-[32px] grid gap-6 grid-cols-3 md:grid-cols-4 xl:grid-cols-6 place-items-center'>
                    {
                        displayedItems.map((data, index) => {
                            return <div key={index} className='bg-red-300 h-[100px] w-full flex justify-center items-center rounded'>
                                <p>#{data}</p>
                            </div>
                        })
                    }
                </section>
                <div className='bg-red-600/50 flex justify-center gap-4 text-center py-2'>
                    <button onClick={()=>{handlePageClick(paginationState.currentPage-1)}} disabled={paginationState.currentPage === 1} className='px-4 py-2 bg-red-800 hover:bg-red-700 rounded'>Previous</button>
                    <button className='hover:bg-red-100/20 px-4 rounded-full'>1</button>
                    <button className='hover:bg-red-100/20 px-4 rounded-full'>2</button>
                    <button className='hover:bg-red-100/20 px-4 rounded-full'>3</button>
                    <button onClick={()=>{handlePageClick(paginationState.currentPage+1)}} disabled={endIndex >= data.length} className='px-4 py-2 bg-red-800 hover:bg-red-700 rounded'>Next</button>
                </div>
            </section>
        </>
    )
}

export default Pagination
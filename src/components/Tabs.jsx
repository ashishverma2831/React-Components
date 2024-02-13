import React, { useState } from 'react'
import '../App.css'

const Tabs = () => {

    const content = [
        [
          "React is extremely popular",
          "It makes building complex, interactive UIs a breeze",
          "It's powerful & flexible",
          "It has a very active and versatile ecosystem",
        ],
        [
          "Components, JSX & Props",
          "State",
          "Hooks (e.g., useEffect())",
          "Dynamic rendering",
        ],
        [
          "Official web page (react.dev)",
          "Next.js (Fullstack framework)",
          "React Native (build native mobile apps with React)",
        ],
      ];

      const [activeTab, setActiveTab] = useState(0);
  return (
    <div className='h-[100vh] bg-red-200 flex justify-center items-center flex-col'>
        <div className='w-1/3 bg-red-300 shadow rounded p-5'>
        <div className='flex justify-evenly gap-2'>
            {/* <button className={activeTab===0?'active-tab w-full py-2.5 rounded bg-red-700 font-semibold text-white ':'w-full py-2.5 rounded bg-red-700 font-semibold text-white '} onClick={()=>{setActiveTab(0)}}>Tab 1</button> */}
            {/* <button className={activeTab===1?'active-tab w-full py-2.5 rounded bg-red-700 font-semibold text-white ':'w-full py-2.5 rounded bg-red-700 font-semibold text-white '} onClick={()=>{setActiveTab(1)}}>Tab 2</button> */}
            {/* <button className={activeTab===2?'active-tab w-full py-2.5 rounded bg-red-700 font-semibold text-white ':'w-full py-2.5 rounded bg-red-700 font-semibold text-white '} onClick={()=>{setActiveTab(2)}}>Tab 3</button> */}
          {
            content.map((item, index)=>{
              return (
                <button key={index} className={activeTab===index?'active-tab w-full py-2.5 rounded bg-red-700 font-semibold text-white ':'w-full py-2.5 rounded bg-red-700 font-semibold text-white '} onClick={()=>{setActiveTab(index)}}>Tab {index+1}</button>
              )
            })
          }
        </div>
        <div className='bg-red-400 mt-4 h-48 p-5'>
            <ul className='list-disc px-5'>
            {
                content[activeTab].map((item)=>{
                    return (<li key={item} className='mb-2'>
                        {item}
                    </li>)
                })
            }
            </ul>
        </div>
        </div>
    </div>
  )
}

export default Tabs
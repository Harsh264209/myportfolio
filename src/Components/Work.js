import p1 from './p1.png'
import p2 from './p1.png'
import p3 from './p1.png'
import React from 'react'

const Work = () => {
  return (
    <div>
        <h1 className='text-6xl font-bold  md:ml-32 text-center bg-gradient-to-r from-purple-500 to-blue-300 text-transparent bg-clip-text '>Experience</h1>
        <div className="div my-32 md:flex flex  md:ml-0 flex-col md:flex-row items-center">
           <div className="bg-blue-100 mb-8 md:mb-0 mr-8 shadow-lg w-72 h-72 md:w-72 md:h-96 p-8 transition duration-300 hover:scale-110  rounded-lg md:" style={{backgroundColor:""}}>
            <h1 className='text-3xl font-bold'>Task 1</h1>
            <div className="div">
            <img src={p1} alt="" />
          </div>
           </div>
           <div className="bg-blue-100 mr-8 mb-8 md:mb-0 transition duration-300 hover:scale-110 shadow-lg w-72 h-72 md:w-72 md:h-96 p-8 rounded-lg" style={{backgroundColor:""}}>
           <h1 className='text-3xl font-bold' >Task 2</h1>
          <div className="div">
            <img src={p2} alt="" />
          </div>
          </div>
         <div className="bg-blue-100 mr-6 transition duration-300 hover:scale-110 shadow-lg w-72 h-72 md:w-72 md:h-96 p-8 rounded-lg" style={{backgroundColor:""}}>
 <h1 className='text-3xl font-bold'>Task 3</h1>
 <div className="div">
            <img src={p3} alt="" />
          </div>
         </div>
        </div>
    </div>
  )
}

export default Work
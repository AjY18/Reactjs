import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color,setColor] =useState('black')

  return (
    <>
     <div className='w-screen h-screen duration-200 '
      style={{backgroundColor:color}}>
     

     <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-6'>
      
      <div className=' flex flex-wrap justify-center gap-3 shadow-lg bg-gray-300  px-2 py-1 rounded-3xl' >
         <button  onClick={()=>setColor('red')}
         className='outline-none px-4 bg-red-600 rounded-full text-white shadow-lg'>red</button>
         <button  onClick={()=>setColor('green')}
         className='outline-none px-4 bg-green-600 rounded-full text-white shadow-lg'>green</button>
         <button  onClick={()=>setColor('blue')}
         className='outline-none px-4 bg-blue-600 rounded-full text-white shadow-lg'>blue</button>
         <button  onClick={()=>setColor('gray')}
         className='outline-none px-4 bg-gray-600 rounded-full text-white shadow-lg'>gray</button>
         <button  onClick={()=>setColor('yellow')}
         className='outline-none px-4 bg-yellow-600 rounded-full text-white shadow-lg'>yellow</button>
         <button  onClick={()=>setColor('skyblue')}
         className='outline-none px-4 bg-sky-600 rounded-full text-white shadow-lg'>skyblue</button>
         <button  onClick={()=>setColor('orange')}
         className='outline-none px-4 bg-orange-600 rounded-full text-white shadow-lg'>orange</button>
      </div>
      </div>
      </div>
    </>
  )
}

export default App

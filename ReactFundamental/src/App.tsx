import { useState } from 'react'

import  Toggle from './component/Toggle';

function App() {
  // const [count, setCount] = useState(0)
  // const handleIncrement= ()=>{
  //   setCount(count+1);
  // }
  // const handleDecremnt= ()=>{
  //   setCount(prev => Math.max(0, prev - 1));

  // }
   const [isOn, setIsOn] = useState(false);
  const toogleHandler= ()=>{
    setIsOn(!isOn);
  }
  return (
    <>
      <div className='flex items-center justify-center h-screen'>
      {/* //   <div className='flex   flex-col gap-3 bg-red-800 px-6 py-4 rounded-2xl  '>
      //   <h1 className='text-black font-bold  text-xl  text-center '>
      //     Count:{count}
      //   </h1>

      //   <button onClick={handleIncrement} className='bg-blue-600 hover:bg-blue-500 transition px-4 py-3 rounded -xl text-white  shadow'>
      //     Increment
      //   </button>
      //   <button
      //    className='bg-blue-600 hover:bg-blue-500 transition px-4 py-3 rounded -xl text-white  shadow'
      //    onClick={ handleDecremnt}>
      //     Decrement
      //   </button>
      // </div> */}
      
      <Toggle onToggle={() => toogleHandler()} isOn={isOn} />
      </div>
    </>
  )
}

export default App

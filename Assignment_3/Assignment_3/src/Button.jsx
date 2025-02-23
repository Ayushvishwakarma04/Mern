import React,{useState} from 'react'

function Button() {
  const[count,setCount]=useState(0);
  const handleClick=()=>{
    setCount(count+1);
    console.log("Button Clicked:",count+1);
  }
  return (
    <div className='flex flex-col items-center justify-center m-10'>
      <button onClick={handleClick} className='p-2 border rounded-lg bg-white-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500'>
        Click Me
      </button>
    </div>
  )
}

export default Button

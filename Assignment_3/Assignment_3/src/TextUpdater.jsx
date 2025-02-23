import { useState } from "react"
import React from 'react'

function TextUpdater() {
  const [text,setText]=useState('');
  const handleInputChange=(event)=>{
    setText(event.target.value);
  };
  return (
    <div className="flex flex-col items-center justify-center ">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">Text Updater</h2>
      <input type="text" value={text} onChange={handleInputChange} placeholder="Enter Your Name" className="border-2 border-gray-300 rounded-md p-2 mb-4 w-64 text-gray-700 focus:outline-none focus:border-blue-500"/>
      <p className="text-lg text-purple-600">Your Name:</p>
      <p className="text-lg text-black-600">{text}</p>
    </div>
  )
}

export default TextUpdater

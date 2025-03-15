import React from 'react'

function Navabr() {
  return (
    <nav className="bg-white shadow-sm fixed w-full top-0">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold text-gray-800">Assignment 4</h1>
        <div className="space-x-6 hidden sm:block">
          <a href="#" className="text-gray-600 hover:text-indigo-600">Home</a>
          <a href="#" className="text-gray-600 hover:text-indigo-600">Shop</a>
          <a href="#" className="text-gray-600 hover:text-indigo-600">Contact</a>
        </div>
      </div>
    </nav>
  )
}

export default Navabr

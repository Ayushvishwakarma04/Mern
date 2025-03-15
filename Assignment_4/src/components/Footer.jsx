import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col sm:flex-row justify-between items-center">
        <p className="mb-4 sm:mb-0">Ayush Vishwakarma</p>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-white">Twitter</a>
          <a href="#" className="hover:text-white">Instagram</a>
          <a href="#" className="hover:text-white">Facebook</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

import React from 'react'

export default function Navbar() {
  return (
    <div>
      <div className='bg-blue-400 py-4 flex justify-between'>
        <div className=" text-lg font-bold text-white">
         <h1>MyWebsite  |</h1>
        </div>
        <div className=" text-lg font-bold text-white">
         <h1>links</h1>
        </div>

      </div>
    <nav className="bg-blue-900 text-white shadow-md">
  <div className="flex items-center justify-between px-6 py-4">
    <div className="text-xl font-bold">
      <a href="/">MyWebsite</a>
    </div>
    <ul className="hidden md:flex space-x-6 text-blue-300  font-4xl">
      <li>
        <a href="/" className="hover:text-blue-400 transition duration-300 ease-in-out">Home</a>
      </li>
      <li>
        <a href="/about" className="hover:text-blue-400 transition duration-300 ease-in-out">About</a>
      </li>
      <li>
        <a href="/services" className="hover:text-blue-400 transition duration-300 ease-in-out">Services</a>
      </li>
      <li>
        <a href="/contact" className="hover:text-blue-400 transition duration-300 ease-in-out">Contact</a>
      </li>
    </ul>
    <div className="block md:hidden">
      <button>
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  </div>
</nav>
</div>
  )
}

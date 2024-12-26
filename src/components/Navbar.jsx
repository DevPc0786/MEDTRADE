import React from 'react'
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function Navbar() {
  return (
    <div>
      {/* <div className='bg-blue-400 py-4 flex justify-between'>
        <div className=" text-lg font-bold text-white">
         <h1 className='ml-4'>amityatul@gmail.com | +91 80766 03020</h1>
        </div>
        <div className=" text-lg font-bold text-white">
        <p className="text-white flex gap-3 mr-4 text-2xl">
              <FaInstagram />
              <FaFacebook />
            </p>
        </div>

      </div> */}
    <nav className="bg-blue-900 text-white shadow-md">
  
  <div className="flex items-center justify-between px-6 py-3">
    <div className="items-center gap-2 flex ">
      <img src="https://png.pngtree.com/png-vector/20240418/ourmid/pngtree-gaming-logo-modern-style-design-png-image_12295068.png" alt="Logo" className="h-12 w-12" />
      <a className="text-xl flex font-bold text-white" href="/">Medtrade System</a>
    </div>
     <div id='btn'>
       <button>Call Us</button>
     </div>
  
    <ul className="hidden md:flex space-x-6 text-blue-300  mr-4 font-4xl">
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

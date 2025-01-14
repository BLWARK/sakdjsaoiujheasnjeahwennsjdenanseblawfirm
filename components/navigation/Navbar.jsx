"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full fixed top-0 left-0 bg-emerald-700/20 backdrop-blur-md shadow-md z-50 text-white font-semibold">
      <div className=" mx-auto px-48 py-4 flex justify-between items-center ">
        {/* Logo */}
        <div className="flex items-center">
          <Image src="/Logo XYZ Law Firm.png" alt="Law Firm Logo" width={70} height={40} />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-12 ">
          <a href="/" className=" hover:text-main transition duration-300">Home</a>
          <a href="/about" className=" hover:text-main transition duration-300">About Us</a>
          <a href="/services" className=" hover:text-main transition duration-300">Services</a>
          <a href="/cases" className=" hover:text-main transition duration-300">Cases</a>
          <a href="/contact" className=" hover:text-main transition duration-300">Contact Us</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            {isOpen ? <HiOutlineX size={28} /> : <HiOutlineMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md py-4">
          <div className="flex flex-col items-center space-y-4">
            <a href="/" onClick={toggleMenu} className="text-gray-800 hover:text-main transition duration-300">Home</a>
            <a href="/about" onClick={toggleMenu} className="text-gray-800 hover:text-main transition duration-300">About Us</a>
            <a href="/services" onClick={toggleMenu} className="text-gray-800 hover:text-main transition duration-300">Services</a>
            <a href="/cases" onClick={toggleMenu} className="text-gray-800 hover:text-main transition duration-300">Cases</a>
            <a href="/contact" onClick={toggleMenu} className="text-gray-800 hover:text-main transition duration-300">Contact Us</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

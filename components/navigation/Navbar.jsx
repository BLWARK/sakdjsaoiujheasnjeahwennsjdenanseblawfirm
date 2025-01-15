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
      <div className=" mx-auto 2xl:px-48 xl:px-48 px-6 py-4 flex justify-between items-center ">
        {/* Logo */}
        <div className=" items-center 2xl:block xl:block md:block hidden">
          <Image src="/Logo XYZ Law Firm.png" alt="Law Firm Logo" width={70} height={40} />
        </div>

        <div className=" items-center 2xl:hidden xl:hidden md:hidden block">
          <Image src="/Logo XYZ Law Firm.png" alt="Law Firm Logo" width={50} height={50} />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-12 ">
          
          <a href="/about" className=" hover:text-main transition duration-300">Tentang Kami</a>
          <a href="/services" className=" hover:text-main transition duration-300">Area Praktik</a>
          <a href="/cases" className=" hover:text-main transition duration-300">Team</a>
          <a href="/cases" className=" hover:text-main transition duration-300">Case</a>
          <a href="/cases" className=" hover:text-main transition duration-300">layanan</a>
          <a href="/cases" className=" hover:text-main transition duration-300">Pembayaran</a>
          
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className=" focus:outline-none text-white">
            {isOpen ? <HiOutlineX size={28} /> : <HiOutlineMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden h-screen bg-emerald-950 shadow-md py-4">
          <div className="flex flex-col items-center space-y-10 mt-10">
            
            <a href="/about" onClick={toggleMenu} className="text-main hover:text-main transition duration-300">Tentang Kami</a>
            <a href="/services" onClick={toggleMenu} className="text-main hover:text-main transition duration-300">Area Praktik</a>
            <a href="/cases" onClick={toggleMenu} className="text-main hover:text-main transition duration-300">Team</a>
            <a href="/contact" onClick={toggleMenu} className="text-main hover:text-main transition duration-300">Case</a>
            <a href="/contact" onClick={toggleMenu} className="text-main hover:text-main transition duration-300">Layanan</a>
            <a href="/contact" onClick={toggleMenu} className="text-main hover:text-main transition duration-300">Pembayaran</a>
            <div className=" items-center 2xl:hidden xl:hidden md:hidden block">
          <Image src="/Logo XYZ Law Firm.png" alt="Law Firm Logo" width={70} height={70} />
        </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

'use client'
import { useState } from 'react';
import { DarkMode } from '@/custom-components/Theme-Mode';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <div>
      <header className="bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <nav className="relative flex items-center justify-between h-16 bg-white lg:rounded-md lg:shadow-lg lg:h-24 lg:px-8 lg:py-6">
            <div className="flex-shrink-0">
              <Link href="/" title="" className="flex">
                <Image className="w-[150px] h-16 lg:h-20 object-contain" src="/assets/png/logo-no-background.png" width={300} height={200} alt="" />
              </Link>
            </div>

            <div className="flex items-center w-full max-w-md mx-auto lg:max-w-none lg:w-auto lg:ml-10 lg:mr-auto">
              <input
                type="text"
                className="w-full h-10 px-4 py-2 text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                placeholder="Search..."
              />
            </div>

            <button
              type="button"
              className="inline-flex p-2 ml-5 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
              onClick={toggleMenu}
            >
              {menuOpen ? (
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>

            <div className="hidden ml-10 lg:flex lg:items-center lg:mr-auto gap-3">
              <Link href="/" title="" className="text-base font-medium text-black transition-all duration-200 hover:text-red-600 focus:text-red-600"> All Mobiles </Link>
              <Link href="/specification" title="" className="text-base font-medium text-black transition-all duration-200 hover:text-red-600 focus:text-red-600"> Specification
               </Link>
              <Link href="/blog" title="" className="text-base font-medium text-black transition-all duration-200 hover:text-red-600 focus:text-red-600">Blog </Link>
              <Link href="/blog/details" title="" className="text-base font-medium text-black transition-all duration-200 hover:text-red-600 focus:text-red-600"> Blog Details </Link>
            </div>

            <div className="hidden lg:flex lg:items-center gap-3 mr-3">
              <Link href="#" title="" className="text-base font-medium text-black transition-all duration-200 hover:text-red-600 focus:text-red-600"> Sign up </Link>
              <Link href="#" title="" className="text-base font-medium text-black transition-all duration-200 hover:text-red-600 focus:text-red-600"> Sign in </Link>
            </div>
            <DarkMode/>
          </nav>

          {menuOpen && (
            <nav className="flex flex-col py-4 space-y-2 lg:hidden">
              <Link href="#" title="" className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-red-600"> Features </Link>
              <Link href="#" title="" className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-red-600"> Solutions </Link>
              <Link href="#" title="" className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-red-600"> Resources </Link>
              <Link href="#" title="" className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-red-600"> Pricing </Link>
              <Link href="#" title="" className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-red-600"> Sign up </Link>
              <Link href="#" title="" className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-red-600"> Sign in </Link>
            </nav>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;

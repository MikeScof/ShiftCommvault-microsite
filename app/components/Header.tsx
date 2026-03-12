'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Overview', href: '#overview' },
    { name: 'Speakers', href: '#speakers' },
    // { name: 'Agenda', href: '#agenda' },
    // { name: 'Sponsors', href: '#sponsors' },
    { name: 'Register', href: 'https://event.kimcommunication.com/fcf94f65', external: true },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black shadow-lg border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/images/Commvault Logo.png"
              alt="Commvault Logo"
              width={180}
              height={40}
              className="h-13 w-auto brightness-0 invert"
              priority
            />
          </div>

          {/* Desktop Navigation */}
          {/* <nav className="hidden md:flex space-x-4 lg:space-x-8">
            {navItems.map((item) => (
              item.external ? (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-600 hover:to-indigo-600 px-2 lg:px-3 py-2 text-sm font-medium transition-all"
                >
                  {item.name}
                </a>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-600 hover:to-indigo-600 px-2 lg:px-3 py-2 text-sm font-medium transition-all"
                >
                  {item.name}
                </a>
              )
            ))}
          </nav> */}

          {/* Mobile menu button */}
          {/* <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              aria-label="Toggle menu"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div> */}
        </div>
      </div>

      {/* Mobile menu */}
      {/* {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black border-t border-gray-800">
            {navItems.map((item) => (
              item.external ? (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:bg-gradient-to-r hover:from-pink-900/30 hover:to-purple-900/30 hover:text-purple-400 block px-3 py-2 text-base font-medium rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:bg-gradient-to-r hover:from-pink-900/30 hover:to-purple-900/30 hover:text-purple-400 block px-3 py-2 text-base font-medium rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              )
            ))}
          </div>
        </div>
      )} */}
    </header>
  );
}

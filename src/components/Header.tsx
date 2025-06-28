'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
              Hinzki
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/institut" className="text-gray-700 hover:text-blue-600 font-medium transition-colors py-2">
              Institut
            </Link>
            <Link href="/agentur" className="text-gray-700 hover:text-blue-600 font-medium transition-colors py-2">
              Agentur
            </Link>
            <Link href="/akademie" className="text-gray-700 hover:text-blue-600 font-medium transition-colors py-2">
              Akademie
            </Link>
            <Link href="/ueber-uns" className="text-gray-700 hover:text-blue-600 font-medium transition-colors py-2">
              Über uns
            </Link>
            <Link href="/kontakt" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
              Kontakt
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path fillRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
                ) : (
                  <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
              <Link 
                href="/institut" 
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Institut
              </Link>
              <Link 
                href="/agentur" 
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Agentur
              </Link>
              <Link 
                href="/akademie" 
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Akademie
              </Link>
              <Link 
                href="/ueber-uns" 
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Über uns
              </Link>
              <Link 
                href="/kontakt" 
                className="block px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-colors text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Kontakt
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
} 
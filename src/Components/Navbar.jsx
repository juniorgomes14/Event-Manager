import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LucideLogIn } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Brand */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600">
              EventManager
            </Link>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <div className=" gap-4">
            
            <Link to="/login" className="px-4 py-2 text-gray-700  hover:text-blue-600 transition font-medium" >
              Login
            </Link>
            </div>
            <div>
            <Link to="/signup" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium">
              Sign Up
            </Link>
            </div>
            
          </div>
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-blue-600 hover:bg-gray-100 focus:outline-none transition"
              aria-label="Main menu"
            >
              {menuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4">
          <Link
            to="/login"
            className="block px-4 py-2 text-gray-700 hover:text-blue-600 transition font-medium"
            onClick={() => setMenuOpen(false)}
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="block px-4 py-2 mt-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
            onClick={() => setMenuOpen(false)}
          >
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
}


import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlobeIcon, BookOpenIcon, MenuIcon, XIcon } from 'lucide-react';
export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return <motion.header className="bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50 py-5 sticky top-0 z-50" initial={{
    opacity: 0,
    y: -20
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.5
  }}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-br from-blue-500 to-teal-500 p-2 rounded-lg">
            <GlobeIcon className="h-6 w-6 text-white" />
          </div>
          <span className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
            Global Education
          </span>
        </div>
        <nav className="hidden md:flex space-x-10">
          {['Home', 'About', 'Institutions', 'Admissions', 'Contact'].map((item, index) => <a key={index} href="#" className="text-gray-300 hover:text-white transition-colors relative group py-2">
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-teal-500 transition-all duration-300 group-hover:w-full"></span>
              </a>)}
        </nav>
        <button className="md:hidden text-gray-300 focus:outline-none" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="text-gray-300 hover:text-white transition-colors">
            Login
          </a>
          <button className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-teal-500 px-5 py-2.5 rounded-full text-white font-medium hover:shadow-lg hover:shadow-blue-500/20 transition-all transform hover:-translate-y-0.5">
            <BookOpenIcon className="h-4 w-4" />
            <span>Enroll Now</span>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && <motion.div className="md:hidden bg-slate-800 border-b border-slate-700" initial={{
        height: 0,
        opacity: 0
      }} animate={{
        height: 'auto',
        opacity: 1
      }} exit={{
        height: 0,
        opacity: 0
      }} transition={{
        duration: 0.3
      }}>
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {['Home', 'About', 'Institutions', 'Admissions', 'Contact'].map((item, index) => <a key={index} href="#" className="text-gray-300 hover:text-white transition-colors py-2 border-b border-slate-700/50">
                    {item}
                  </a>)}
              <div className="pt-4 flex flex-col space-y-3">
                <a href="#" className="text-gray-300 hover:text-white transition-colors py-2">
                  Login
                </a>
                <button className="flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-500 to-teal-500 px-5 py-3 rounded-full text-white font-medium">
                  <BookOpenIcon className="h-4 w-4" />
                  <span>Enroll Now</span>
                </button>
              </div>
            </div>
          </motion.div>}
      </AnimatePresence>
    </motion.header>;
}
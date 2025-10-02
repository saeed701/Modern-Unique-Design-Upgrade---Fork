import React from 'react';
import { GlobeIcon, PhoneIcon, MailIcon, MapPinIcon, FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from 'lucide-react';
export function Footer() {
  return <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-br from-blue-500 to-teal-500 p-2 rounded-lg">
                <GlobeIcon className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
                Global Education
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Empowering future generations through quality education,
              innovation, and excellence since 1995.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-blue-500 transition-colors">
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-blue-400 transition-colors">
                <TwitterIcon className="h-5 w-5" />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-pink-500 transition-colors">
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-blue-700 transition-colors">
                <LinkedinIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-6">Our Institutions</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Global Degree College
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Global School System
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Global Institute of Medical Sciences
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Admissions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Academic Calendar
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Scholarships
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPinIcon className="h-5 w-5 text-blue-400 mt-0.5" />
                <span className="text-gray-400">
                  123 Education Street, City Name, Country
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <PhoneIcon className="h-5 w-5 text-blue-400" />
                <span className="text-gray-400">+1 234 567 8900</span>
              </li>
              <li className="flex items-center space-x-3">
                <MailIcon className="h-5 w-5 text-blue-400" />
                <span className="text-gray-400">info@globaleducation.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Global Education. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>;
}
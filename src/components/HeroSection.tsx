import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCapIcon, BookOpenIcon, AwardIcon } from 'lucide-react';
export function HeroSection() {
  return <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div className="md:w-1/2 mb-10 md:mb-0" initial={{
          opacity: 0,
          x: -50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8
        }}>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Global Group of
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-teal-400 to-purple-400">
                Schools, Colleges & Institute
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-lg">
              Empowering future generations through quality education,
              innovation, and excellence.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/20 transition-all transform hover:-translate-y-1">
                Get Started
              </button>
              <button className="px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full font-medium hover:bg-white/20 transition-all">
                Learn More
              </button>
            </div>
          </motion.div>
          <motion.div className="md:w-1/2 relative" initial={{
          opacity: 0,
          scale: 0.8
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.8,
          delay: 0.3
        }}>
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
              {/* Floating Elements */}
              <motion.div className="absolute top-10 left-0 bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-2xl shadow-xl" animate={{
              y: [0, -15, 0]
            }} transition={{
              repeat: Infinity,
              duration: 3,
              ease: 'easeInOut'
            }}>
                <GraduationCapIcon size={32} />
              </motion.div>
              <motion.div className="absolute bottom-20 left-10 bg-gradient-to-br from-teal-500 to-teal-600 p-4 rounded-2xl shadow-xl" animate={{
              y: [0, 15, 0]
            }} transition={{
              repeat: Infinity,
              duration: 4,
              ease: 'easeInOut',
              delay: 0.5
            }}>
                <BookOpenIcon size={32} />
              </motion.div>
              <motion.div className="absolute top-1/3 right-0 bg-gradient-to-br from-purple-500 to-purple-600 p-4 rounded-2xl shadow-xl" animate={{
              y: [0, -20, 0]
            }} transition={{
              repeat: Infinity,
              duration: 5,
              ease: 'easeInOut',
              delay: 1
            }}>
                <AwardIcon size={32} />
              </motion.div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 bg-white rounded-full flex items-center justify-center p-3">
                <div className="w-full h-full rounded-full bg-contain bg-no-repeat bg-center" style={{
                backgroundImage: `url(https://uploadthingy.s3.us-west-1.amazonaws.com/jc37UFYyfGLGx4zmYjPM4q/Screenshot_2025-10-03_002522.png)`
              }} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Stats */}
      <div className="container mx-auto px-4 mt-16">
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-slate-800/40 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50" initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        delay: 0.8
      }}>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-blue-400 mb-2">3000+</h3>
            <p className="text-gray-300">Students Enrolled</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-teal-400 mb-2">150+</h3>
            <p className="text-gray-300">Expert Faculty</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-purple-400 mb-2">98%</h3>
            <p className="text-gray-300">Success Rate</p>
          </div>
        </motion.div>
      </div>
    </section>;
}
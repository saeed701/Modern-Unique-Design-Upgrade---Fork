import React from 'react';
import { motion } from 'framer-motion';
import { Header } from './components/Header';
import { InstitutionCard } from './components/InstitutionCard';
import { AnimatedBackground } from './components/AnimatedBackground';
import { HeroSection } from './components/HeroSection';
import { Footer } from './components/Footer';
export function App() {
  const institutions = [{
    name: 'Global Degree College',
    image: 'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    description: 'Providing quality higher education with advanced facilities and expert faculty.',
    color: 'from-blue-500 to-purple-600',
    icon: 'graduation-cap'
  }, {
    name: 'Global School System',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    description: 'Play group to matric education with a focus on holistic development and academic excellence.',
    color: 'from-green-500 to-teal-600',
    icon: 'school'
  }, {
    name: 'Global Institute of Medical Sciences',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    description: 'Excellence in medical education with state-of-the-art labs and clinical experience.',
    color: 'from-red-500 to-pink-600',
    icon: 'stethoscope'
  }];
  return <div className="relative min-h-screen w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <main className="container mx-auto px-4 py-16">
          <motion.div className="text-center mb-20" initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Educational Institutions
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Discover our premier educational institutions dedicated to
              nurturing the leaders of tomorrow through innovation, excellence,
              and personalized learning experiences.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {institutions.map((institution, index) => <InstitutionCard key={index} institution={institution} index={index} />)}
          </div>
          <motion.div className="mt-24 text-center bg-slate-800/40 backdrop-blur-sm rounded-2xl p-10 border border-slate-700/50" initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 1.2
        }}>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
              Shaping Tomorrow's Leaders Today
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto mb-8">
              Our educational institutions are committed to providing
              world-class education and fostering an environment of innovation,
              excellence, and continuous growth. Join us on this journey of
              transformation and discovery.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/20 transition-all transform hover:-translate-y-1">
              Discover More
            </button>
          </motion.div>
        </main>
        <Footer />
      </div>
    </div>;
}
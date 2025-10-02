import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon, GraduationCapIcon, SchoolIcon, StethoscopeIcon } from 'lucide-react';
interface InstitutionCardProps {
  institution: {
    name: string;
    image: string;
    description: string;
    color: string;
    icon: string;
  };
  index: number;
}
export function InstitutionCard({
  institution,
  index
}: InstitutionCardProps) {
  const getIcon = () => {
    switch (institution.icon) {
      case 'graduation-cap':
        return <GraduationCapIcon className="h-6 w-6" />;
      case 'school':
        return <SchoolIcon className="h-6 w-6" />;
      case 'stethoscope':
        return <StethoscopeIcon className="h-6 w-6" />;
      default:
        return <GraduationCapIcon className="h-6 w-6" />;
    }
  };
  return <motion.div className="bg-slate-800/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-blue-500/50 transition-all group hover:shadow-xl hover:shadow-blue-500/10" initial={{
    opacity: 0,
    y: 50
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.6,
    delay: index * 0.2
  }} whileHover={{
    y: -8,
    transition: {
      duration: 0.2
    }
  }}>
      <div className="relative h-56 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${institution.color} opacity-20`}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        <img src={institution.image} alt={institution.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md p-2 rounded-lg border border-white/20">
          {getIcon()}
        </div>
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-bold mb-3">{institution.name}</h3>
        <p className="text-gray-300 mb-6">{institution.description}</p>
        <div className="flex justify-between items-center">
          <button className={`text-transparent bg-clip-text bg-gradient-to-r ${institution.color} font-medium flex items-center space-x-2 group-hover:space-x-3 transition-all`}>
            <span>Learn more</span>
            <ArrowRightIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </motion.div>;
}
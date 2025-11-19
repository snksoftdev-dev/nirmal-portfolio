import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Download, Github, Linkedin } from 'lucide-react'

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.div
          variants={itemVariants}
          className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto mb-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl sm:text-4xl md:text-6xl font-bold shadow-2xl"
        >
          NK
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-gray-800 mb-4"
        >
          <span className="text-blue-600">Siliveru Nirmal</span> Kumar
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-gray-600 mb-8"
        >
          SOFTWARE DEVELOPER
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Frontend Developer with over 5 years of experience in building responsive, 
          scalable, and performant web applications using React.js, Next.js, and modern web technologies.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-12 text-gray-600"
        >
          <a 
            href="tel:6301092032" 
            className="flex items-center gap-2 hover:text-blue-600 transition-colors text-sm sm:text-base"
          >
            <Phone size={18} className="sm:w-5 sm:h-5" />
            <span>6301092032</span>
          </a>
          <a 
            href="mailto:snksoftdev@gmail.com" 
            className="flex items-center gap-2 hover:text-blue-600 transition-colors text-sm sm:text-base"
          >
            <Mail size={18} className="sm:w-5 sm:h-5" />
            <span>snksoftdev@gmail.com</span>
          </a>
          <div className="flex items-center gap-2 text-sm sm:text-base">
            <MapPin size={18} className="sm:w-5 sm:h-5" />
            <span>Hyderabad, Telangana</span>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4"
        >
          <button className="btn-primary">
            <Download size={20} />
            Download Resume
          </button>
          <button className="btn-outline">
            <Github size={20} />
            GitHub
          </button>
          <button className="btn-outline">
            <Linkedin size={20} />
            LinkedIn
          </button>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero

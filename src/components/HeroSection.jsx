import React from 'react'
import { motion } from 'framer-motion'
import profilePic from '../assets/profilePic.jpg'

const HeroSection = () => {
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

  const childVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  }

  return (
    <div className='pb-4 lg:mb-36'>
      <div className='flex flex-wrap lg:flex-row-reverse mt-20'>
        {/* Image Section */}
        <motion.div 
          className='w-full lg:w-1/2'
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 50, delay: 0.5 }}
        >
          <div className='flex justify-center lg:p-8'>
            <motion.img 
              src={profilePic} 
              alt="profileImage" 
              width={500} 
              className='border border-stone-800 rounded-3xl'
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring' }}
            />
          </div>
        </motion.div>

        {/* Text Content Section */}
        <motion.div 
          className='w-full lg:w-1/2'
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className='flex flex-col items-center lg:items-start mt-20'>
            <motion.h2 
              variants={childVariants}
              className='pb-2 text-4xl tracking-tighter lg:text-7xl ms-0 sm:ms-10'
            >
              Sebin Johnson
            </motion.h2>
            
            <motion.span 
              variants={childVariants}
              className='bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent ms-0 sm:ms-10'
            >
              FullStack Developer
            </motion.span>
            
            <motion.p 
              variants={childVariants}
              className='my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tight ms-0 sm:ms-10'
            >
              I'm a passionate web developer with a focus on building responsive, user-friendly applications using the MERN stack. I enjoy turning complex problems into clean, efficient solutions and am always eager to learn new technologies. My projects reflect a commitment to both functionality and design, showcasing my ability to deliver polished, real-world web applications.
            </motion.p>
            
            <motion.a 
              href="" 
              target='_blank' 
              className='bg-white rounded-xl p-4 text-sm text-stone-800 mb-10 ms-0 sm:ms-10'
              variants={childVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              rel='noopener noreferrer'
            >
              Download Resume
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default HeroSection
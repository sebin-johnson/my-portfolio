import React from 'react'
import { motion } from 'framer-motion'
import { RiReactjsLine } from 'react-icons/ri'
import { SiCss3, SiHtml5, SiJavascript, SiMongodb, SiNodedotjs, SiTailwindcss } from 'react-icons/si'

const Technologies = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  }

  const iconHover = {
    scale: 1.1,
    transition: { type: 'spring', stiffness: 300 }
  }

  return (
    <div className='pb-24'>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className='my-20 md:my-20 text-3xl md:text-4xl font-semibold text-center text-gray-800 dark:text-white tracking-tight'
      >
        Technologies
      </motion.h2>
      
      <motion.div 
        className='flex flex-wrap items-center justify-center gap-4'
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={itemVariants}>
          <SiHtml5 className='text-7xl text-orange-600' />
        </motion.div>
        
        <motion.div 
          variants={itemVariants} 
          className='p-4' 
          whileHover={iconHover}
        >
          <SiCss3 className='text-7xl text-blue-600' />
        </motion.div>
        
        {/* Other technology icons with same pattern */}
        <motion.div variants={itemVariants} className='p-4' whileHover={iconHover}>
          <RiReactjsLine className='text-7xl text-cyan-400' />
        </motion.div>
        
        <motion.div variants={itemVariants} className='p-4' whileHover={iconHover}>
          <SiJavascript className='text-7xl text-yellow-400 rounded' />
        </motion.div>
        
        <motion.div variants={itemVariants} className='p-4' whileHover={iconHover}>
          <SiNodedotjs className='text-7xl text-green-700' />
        </motion.div>
        
        <motion.div variants={itemVariants} className='p-4' whileHover={iconHover}>
          <SiMongodb className='text-7xl text-green-600' />
        </motion.div>
        
        <motion.div variants={itemVariants} className='p-4' whileHover={iconHover}>
          <SiBootstrap className='text-7xl text-purple-600' />
        </motion.div>
        
        <motion.div variants={itemVariants} className='p-4' whileHover={iconHover}>
          <SiTailwindcss className='text-7xl text-sky-400' />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Technologies
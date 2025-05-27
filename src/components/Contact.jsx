import React from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
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

  const buttonHover = {
    scale: 1.02,
    transition: { type: 'spring', stiffness: 300 }
  }

  return (
    <div className='border-t border-stone-900 pb-20'>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className='my-8 md:my-12 text-3xl md:text-4xl font-semibold text-center text-gray-800 dark:text-white tracking-tight'
      >
        Get in Touch
      </motion.h2>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className='max-w-prose mx-auto text-center text-lg text-gray-600 dark:text-gray-300 leading-relaxed mt-6 px-4'
      >
        Whether it's a project, collaboration, or just a hello —<br className='hidden md:block' />
        I'm just a message away.
      </motion.p>

      <motion.form 
        className="max-w-2xl mx-auto p-6 rounded-lg"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.div className="mb-6" variants={itemVariants}>
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
            Your Name
          </label>
          <input 
            type="text"
            className="w-full px-4 py-2 border border-gray-200 dark:border-gray-600/30 rounded-lg 
              bg-transparent focus:ring-2 focus:ring-gray-400 focus:border-gray-400
              dark:bg-gray-700/10 dark:text-white dark:focus:ring-gray-300 dark:focus:border-gray-300"
            placeholder="Your Name" 
          />
        </motion.div>

        <motion.div className="mb-6" variants={itemVariants}>
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
            Email Address
          </label>
          <input 
            type="email"
            className="w-full px-4 py-2 border border-gray-200 dark:border-gray-600/30 rounded-lg 
              bg-transparent focus:ring-2 focus:ring-gray-400 focus:border-gray-400
              dark:bg-gray-700/10 dark:text-white dark:focus:ring-gray-300 dark:focus:border-gray-300"
            placeholder="youremail@example.com" 
          />
        </motion.div>

        <motion.div className="mb-6" variants={itemVariants}>
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
            Your Message
          </label>
          <textarea
            className="w-full px-4 py-2 border border-gray-200 dark:border-gray-600/30 rounded-lg 
              bg-transparent focus:ring-2 focus:ring-gray-400 focus:border-gray-400 h-32 resize-none
              dark:bg-gray-700/10 dark:text-white dark:focus:ring-gray-300 dark:focus:border-gray-300"
            placeholder="Drop a message and let's connect!"
          ></textarea>
        </motion.div>

        <motion.div variants={itemVariants}>
          <motion.button 
            type="button"
            className="w-full bg-gray-800 hover:bg-gray-900 text-white font-medium py-2 px-4 
              rounded-lg transition-colors duration-200 dark:bg-gray-600 dark:hover:bg-gray-700"
            whileHover={buttonHover}
            whileTap={{ scale: 0.98 }}
          >
            Send Message
          </motion.button>
        </motion.div>
      </motion.form>
    </div>
  )
}

export default Contact
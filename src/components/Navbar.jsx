import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-scroll'

const Navbar = () => {
  const navVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: -10, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  }

  const iconVariants = {
    hover: { scale: 1.1, rotate: 5 },
    tap: { scale: 0.9 }
  }

  return (
    <motion.nav 
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className="absolute w-full top-0 backdrop-blur-xl border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Visible on all screens */}
          <motion.a 
            href="/" 
            className="text-2xl font-bold bg-gradient-to-r from-blue-300 to-indigo-400 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Sebin Johnson
          </motion.a>

          {/* Navigation Links - Hidden on mobile, visible on md screens and up */}
          <div className="flex-1 hidden md:flex justify-center space-x-8">
            {["skills", "projects", "contact"].map((link) => (
              <motion.div 
                key={link}
                variants={itemVariants}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Link 
                  to={link} 
                  smooth={true} 
                  duration={500} 
                  className="text-gray-300 hover:text-white transition-colors duration-300 font-medium cursor-pointer"
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Social Icons - Visible on all screens */}
          <motion.div 
            className="flex space-x-6"
            variants={navVariants}
            initial="hidden"
            animate="visible"
          >
            {[
              {
                icon: FaLinkedin,
                href: "www.linkedin.com/in/sebinjohnson-tech",
                color: "text-indigo-300"
              },
              {
                icon: FaGithub,
                href: "https://github.com/sebin-johnson",
                color: "text-blue-300"
              }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded hover:bg-white/10 transition-all duration-300 group ${social.color}`}
                aria-label={`${social.icon === FaLinkedin ? 'LinkedIn' : 'GitHub'} Profile`}
                variants={itemVariants}
                whileHover="hover"
                whileTap="tap"
                transition={{ type: "spring", stiffness: 300 }}
              >
                <social.icon 
                  className="w-6 h-6 group-hover:text-indigo-100 transition-colors"
                  variants={iconVariants}
                />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
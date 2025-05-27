import React, { useEffect, useRef } from 'react'
import { PROJECTS } from "../constants"
import './Projects.css'

const Projects = () => {
  const headingRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '-100px 0px'
    }

    const headingObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show')
        }
      })
    }, { ...observerOptions, rootMargin: '-100px' })

    const containerObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show')
        }
      })
    }, { ...observerOptions, rootMargin: '-50px' })

    if (headingRef.current) headingObserver.observe(headingRef.current)
    if (containerRef.current) containerObserver.observe(containerRef.current)

    return () => {
      headingObserver.disconnect()
      containerObserver.disconnect()
    }
  }, [])

  return (
    <div className='pb-4'>
      <h2 
        ref={headingRef}
        className="project-heading my-20 text-3xl md:text-4xl font-semibold text-center text-gray-800 dark:text-white tracking-tight"
      >
        Projects
      </h2>

      <div ref={containerRef} className="projects-container">
        {PROJECTS.map((item, index) => (
          <div
            key={index}
            className="project-item flex flex-col lg:flex-row flex-wrap lg:justify-center mb-8 p-4 rounded-xl transition-all"
            style={{ '--delay': `${index * 0.2}s` }}
          >
            <div className='w-full lg:w-1/4 relative group'>
              <div className="image-container relative overflow-hidden rounded">
                <img 
                  src={item.image}
                  alt={item.title}
                  width={350}
                  height={350}
                  className='project-image rounded transition-shadow' 
                />
                <div className="button-overlay">
                  <a
                    href={item.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-button github-button cursor-pointer"
                  >
                    <i className="fab fa-github mr-2"></i>
                    <span>Github</span>
                  </a>
                  <a
                    href={item.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-button live-button cursor-pointer"
                  >
                    <i className="fas fa-external-link-alt mr-2"></i>
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>

            <div className='w-full max-w-xl lg:w-3/4'>
              <h3 className='mb-2 font-semibold text-2xl'>{item.title}</h3>
              <p className='mb-2 text-stone-400'>{item.description}</p>
              <div className='flex flex-wrap gap-2'>
                {item.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className='tech-tag rounded bg-stone-900 text-sm p-2 font-medium text-stone-300 cursor-pointer'
                    style={{ '--tag-delay': `${techIndex * 0.1}s` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects

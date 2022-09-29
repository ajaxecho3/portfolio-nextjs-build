import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Project } from '../typings'
import { urlFor } from '../sanity';
type Props = {
  projectLists: Project[];
}

function Projects({ projectLists }: Props) {
  const [width, setWidth] = useState(0)
  const carouselRef: any = useRef();

  useEffect(() => {
    setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
  }, [])
  return (
    <motion.div
      initial={{
        opacity: 0
      }}
      whileInView={{
        opacity: 1
      }}
      transition={{
        duration: 1.5
      }}
      className='h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Projects
      </h3>
      <motion.div ref={carouselRef} className='cursor-grab overflow-hidden '>
        <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} whileTap={{ cursor: "grabbing" }} className='flex space-x-5 p-10'>
          {
            projectLists.map((project, i) => (
              <motion.div key={project._id} className='flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44'>
                <motion.img
                  initial={{
                    y: -300,
                    opacity: 0
                  }}
                  transition={{ duration: 1.2 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className='w-[200px] h-[200px] object-cover object-center'
                  src={urlFor(project.image).url()} alt="project" />
                <div className=' space-y-10 px-0 md:px-10 max-w-6xl'>
                  <h4 className='text-4xl font-semibold text-center'>
                    Case Study {i + 1} of {projectLists.length}: {project.title}
                  </h4>
                  <div className='flex space-x-2 my-2'>
                    {
                      project.technologies.map((tech) => (
                        <img key={tech._id} className='h-10 w-10 rounded-full object-cover' src={urlFor(tech.image).url()} alt="Tech" />
                      ))
                    }
                  </div>
                  <p className='text-lg text-center md:text-left'>
                    {project.summary}
                  </p>
                </div>
              </motion.div>
            ))
          }
        </motion.div>
      </motion.div>
      {/* <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 '>
        {
          projectLists.map((project, i) => (
            <motion.div key={project._id} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
              <motion.img
                initial={{
                  y: -300,
                  opacity: 0
                }}
                transition={{duration: 1.2}}
                whileInView={{opacity: 1, y:0}}
                viewport={{once:true}}
                className='w-[200px] h-[200px] object-cover object-center'
                src={urlFor(project.image).url()} alt="project" />
              <div className=' space-y-10 px-0 md:px-10 max-w-6xl'>
                <h4 className='text-4xl font-semibold text-center'>
                  Case Study {i + 1} of {projectLists.length}: {project.title}
                </h4>
                <div className='flex space-x-2 my-2'>
                  {
                    project.technologies.map((tech) => (
                      <img key={tech._id} className='h-10 w-10 rounded-full object-cover' src={urlFor(tech.image).url()} alt="Tech" />
                    ))
                  }
                </div>
                <p className='text-lg text-center md:text-left'>
                  {project.summary}
                </p>
              </div>
            </motion.div>
          ))
        }
      </div> */}
      <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12' />

    </motion.div>
  )
}

export default Projects
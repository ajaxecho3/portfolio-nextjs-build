import React, { useEffect, useRef, useState } from 'react'
import {motion} from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import { Experience } from '../typings'
type Props = {
  experiences: Experience[]
}

export default function WorkExperience({experiences}: Props) {
  const [width, setWidth] = useState(0)
  const carouselRef:any = useRef();

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
    className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Experience
      </h3>
      <motion.div ref={carouselRef} className='cursor-grab overflow-hidden '>
        <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} whileTap={{ cursor: "grabbing" }} className='flex space-x-5 p-10'>
          {
            experiences?.map((experience) => (
              <ExperienceCard key={experience._id} experience={experience} />
            ))
          }
        </motion.div>
      </motion.div>
      {/* <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory'>
        {
          experiences?.map((experience) => (
            <ExperienceCard key={experience._id} experience={experience} />
          ))
        }
        
      </div> */}
    </motion.div>
  )
}
import React from 'react'
import { SocialIcon  } from 'react-social-icons'
import { motion } from 'framer-motion'
import { Social } from '../typings'
type Props = {
  socials: Social[]
}

function Header({socials}: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}

        transition={{
          duration: 1.5,
        }}

        className='flex flex-row items-center'>
        {
          socials.map((social) => (

            <SocialIcon key={social._id} url={social.url} fgColor='gray' bgColor='transparent' />
          ))
        }
        
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}

        transition={{
          duration: 1.5,
        }}
        className='flex flex-row items-center'>
        <SocialIcon network='cv' url='ajaxecho3@gmail.com' fgColor='gray' bgColor='transparent' />
        <p className='uppercase hidden md:inline-flex text-sm to-gray-400'>Download CV</p>
      </motion.div>
    </header>
  )
}

export default Header
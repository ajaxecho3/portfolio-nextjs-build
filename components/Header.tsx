import React from 'react'
import { SocialIcon  } from 'react-social-icons'
import { motion } from 'framer-motion'
import {  IcV, Social } from '../typings'
import Link from 'next/link'
type Props = {
  socials: Social[]
  exportCv: IcV
}

function Header({ socials, exportCv }: Props) {
  
  console.log(exportCv)
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
        <Link href={`${exportCv}`} target="_blank" rel="noreferrer">
          <span className='rounded-full border  font-bold cursor-pointer p-2 border-[#F7AB0A] uppercase hidden md:inline-flex text-sm text-[#F7AB0A] animate-pulse'>
            Curriculum vitae
          </span>
        </Link>
      </motion.div>
    </header>
  )
}

export default Header
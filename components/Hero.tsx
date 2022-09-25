import Link from 'next/link'
import React from 'react'
import { urlFor } from '../sanity'
import { PageInfo } from '../typings'
import BackGroundCircles from './BackGroundCircles'
type Props = {
  pageInfo: PageInfo
}

function Hero({ pageInfo }: Props) {
  console.log(pageInfo)
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackGroundCircles />
      <img className='relative rounded-full h-32 w-32 mx-auto object-cover' src={urlFor(pageInfo?.heroImage).url()} alt='Logo' />
      <div className='z-10'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>{pageInfo.role}</h2>
        <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
          {pageInfo.name}
        </h1>
        <div className='pt-5'>
          <Link href="#about">
            <button className='heroButton'>About</button>
          </Link>
          <Link href="#experience">
            <button className='heroButton'>Experience</button>
          </Link>
          <Link href="#skills">
            <button className='heroButton'>Skills</button>
          </Link>
          <Link href="#projects">
            <button className='heroButton'>Projects</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
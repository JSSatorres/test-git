import React from 'react'
import { motion } from 'framer-motion'
import technologiesLogos from './technologiesLogos'

const Technologies = () => (
  <section id='technologies' className='pt-32 pb-16'>
    {/* HEADING */}

    <p className='font-playfair font-semibold text-4xl mb-5 text-red'>
      TECHNOLOGIES
    </p>
    <p className='my-10'>
      These are the technologies I have worked with and the projects
      where you can find how I have applied them.
    </p>

    <div />
    <div className='flex flex-wrap justify-center'>
      {technologiesLogos.map((logo) => (
        <div
          key={logo.name}
          className='h-12 w-12 mx-2 my-3 bg-white'
          style={{ color: logo.color }}
        >
          <img
            src={logo.url}
            alt={logo.name}
          />
        </div>
      ))}
    </div>
  </section>
)

export default Technologies

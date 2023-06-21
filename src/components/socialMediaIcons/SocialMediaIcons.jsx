import React from 'react'
import linkedin from '../../assets/icons/linkedin.png'
import gitHub from '../../assets/icons/gitHub.png'

const SocialMediaIcons = () => (
  <div className='flex justify-center md:justify-start my-5 gap-7'>
    <a
      className='hover:opacity-50 transition duration-500'
      href='https://www.linkedin.com/in/juan-s%C3%A1nchez-satorres/'
      target='_blank'
      rel='noreferrer'
    >
      <img alt='linkedin-link' src={linkedin} />
    </a>
    <a
      className='hover:opacity-50 transition duration-500'
      href='https://github.com/JSSatorres'
      target='_blank'
      rel='noreferrer'
    >
      <img alt='twitter-link' src={gitHub} />
    </a>
  </div>
)

export default SocialMediaIcons

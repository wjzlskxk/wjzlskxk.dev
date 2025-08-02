import React from 'react'
import Divider from '../Divider'
import './style.scss'

const Header = () => {
  const HEADER_CONTENTS = ['ABOUT ME', 'PROJECTS', 'SKILLS', 'CONTACT']
  return (
    <div className='header-wrap'>
      <div className='header-container'>
        {HEADER_CONTENTS.map((item, idx) => (
          <span key={idx}>{item}</span>
        ))}
      </div>
      <Divider />
    </div>
  )
}

export default Header

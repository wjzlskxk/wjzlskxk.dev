import React from 'react'
import { Divider } from '../Divider'
import './style.scss'

const Header = () => {
  const HEADER_CONTENTS = [
    { label: 'ABOUT ME', target: 'about' },
    { label: 'PROJECTS', target: 'project' },
    { label: 'SKILLS', target: 'skills' },
    { label: 'CONTACT', target: 'contact' },
  ]
  return (
    <div className='header-wrap'>
      <div className='header-container'>
        {HEADER_CONTENTS.map((item, idx) => (
          <a key={idx} href={`#${item.target}`}>
            {item.label}
          </a>
        ))}
      </div>
      <Divider />
    </div>
  )
}

export default Header

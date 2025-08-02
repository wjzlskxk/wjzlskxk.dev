import React from 'react'
import './style/global.scss'
import './style/page.scss'
import Header from './components/common/Header'
import AboutMe from './components/AboutMe'

function App() {
  return (
    <div className='App'>
      <Header />
      <AboutMe />
    </div>
  )
}

export default App

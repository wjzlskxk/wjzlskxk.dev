import React from 'react'
import ProjectCard from './ProjectCard'
import './style.scss'

const Projects = () => {
  const projects = [
    {
      emoji: '🏫',
      role: 'Frontend Developer',
      introduce: '스마트스쿨 플랫폼',
      title: '도담도담',
      technologies: ['TS', 'React', 'React-Query', 'Recoil', 'Storybook'],
    },
    {
      emoji: '📚',
      role: 'Frontend Developer, PM',
      introduce: 'React TS + customAxios BoilerPlate',
      title: 'B1ND-React-App',
      technologies: ['JS', 'NPM', 'chalk', 'fs'],
    },
    {
      emoji: '🕸️',
      role: 'Frontend Developer',
      introduce: '대학교수와 10대학생들을 위한 소통 플랫폼',
      title: 'DEAR.',
      technologies: ['TS', 'Next.js', 'React-Query', 'zustand'],
    },
  ]
  return (
    <div className='project-wrap'>
      {projects.map((item, idx) => (
        <ProjectCard
          emoji={item.emoji}
          role={item.role}
          introduce={item.introduce}
          title={item.title}
          technologies={item.technologies}
        />
      ))}
    </div>
  )
}

export default Projects

import React from 'react'
import { Heart, Sparkles } from 'lucide-react'
import './style.scss'

interface ProjectCardProps {
  emoji?: string
  role: string
  introduce: string
  title: string
  technologies: string[]
}

const ProjectCard = ({
  emoji,
  role,
  introduce,
  title,
  technologies,
}: ProjectCardProps) => {
  return (
    <div className='project-card-wrapper'>
      <div className='project-card-glow' />
      <div className='project-card'>
        <div className='sparkle'>
          <Sparkles className='icon' />
        </div>

        <div className='emoji-container'>
          <div className='emoji-circle'>
            <span className='emoji'>{emoji}</span>
          </div>
          <div className='heart-icon'>
            <Heart className='icon-heart' />
          </div>
        </div>

        <div className='text-content'>
          <p className='role'>{role}</p>
          <p className='introduce'>{introduce}</p>
          <h2 className='title'>{title}</h2>
          <div className='divider' />
        </div>

        <div className='technologies'>
          {technologies.map((tech, index) => (
            <div
              key={tech}
              className='tech-badge'
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {tech}
            </div>
          ))}
        </div>

        <div className='bottom-decoration' />
      </div>
    </div>
  )
}

export default ProjectCard

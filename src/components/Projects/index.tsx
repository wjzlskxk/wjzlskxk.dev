import React from 'react'
import { Calendar } from 'lucide-react'
import { projects } from '../../constants/Projects/projects.constants'
import './style.scss'
import { Divider } from '../common/Divider'

const Projects = () => {
  return (
    <section id='project' className='project-view'>
      <div className='project-title-wrap'>
        <h1 className='project-title'>PROJECTS</h1>
        <Divider isColored />
      </div>
      <div className='experience-section'>
        <div className='experience-grid'>
          {projects.map((proj) => (
            <div key={proj.id} className='experience-card-wrapper'>
              <div className='experience-card-glow'></div>
              <div className='experience-card'>
                <div className='card-header'>
                  <div className='card-meta'>
                    <div className='emoji-box'>{proj.emoji}</div>
                    <div className='meta-text'>
                      <h3>{proj.role}</h3>
                      <p>{proj.title}</p>
                    </div>
                  </div>
                </div>

                <div className='card-details'>
                  <div className='detail'>
                    <Calendar className='icon' />
                    <span>{proj.duration}</span>
                  </div>
                </div>

                <div className='card-achievements'>
                  <h4>Key Achievements</h4>
                  <ul>
                    {proj.achievements.map((achievement, idx) => (
                      <li key={idx}>
                        <div className='dot'></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className='card-technologies'>
                  <h4>Technologies</h4>
                  <div className='tech-list'>
                    {proj.technologies.map((tech) => (
                      <span key={tech} className='tech-badge'>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className='nav-link-wrap'>
                  <h4>Nav Links</h4>
                  <button onClick={() => window.open(proj.links.github)}>
                    Gitub 바로가기
                  </button>
                  {proj.links.npm && (
                    <button onClick={() => window.open(proj.links.npm)}>
                      NPM 바로가기
                    </button>
                  )}
                  {proj.links.service && (
                    <button onClick={() => window.open(proj.links.service)}>
                      서비스 바로가기
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

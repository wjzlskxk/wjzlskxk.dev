import React from 'react'
import { Code, Palette, Server, Globe } from 'lucide-react'
import './style.scss'
import { Divider } from '../common/Divider'

interface Skill {
  name: string
  level: number
  category: string
  icon?: React.ReactNode
  color: string
}

interface SkillCategory {
  title: string
  icon: React.ReactNode
  skills: Skill[]
  color: string
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Frontend Development',
      icon: <Code className='icon' />,
      color: 'pink-to-rose',
      skills: [
        { name: 'React', level: 90, category: 'Frontend', color: '#61DAFB' },
        {
          name: 'TypeScript',
          level: 90,
          category: 'Frontend',
          color: '#3178C6',
        },
        { name: 'Next.js', level: 70, category: 'Frontend', color: '#000000' },
        {
          name: 'SCSS',
          level: 50,
          category: 'Frontend',
          color: '#CF649B',
        },
        {
          name: 'JavaScript',
          level: 94,
          category: 'Frontend',
          color: '#F7DF1E',
        },
        {
          name: 'Storybook',
          level: 50,
          category: 'Frontend',
          color: '#EC5785',
        },
      ],
    },
    {
      title: 'Backend Development',
      icon: <Server className='icon' />,
      color: 'blue-to-indigo',
      skills: [
        { name: 'Node.js', level: 88, category: 'Backend', color: '#339933' },
        { name: 'NestJs', level: 50, category: 'Backend', color: '#E0224E' },
        { name: 'Java', level: 60, category: 'Backend', color: '#E11F21' },
        { name: 'Kotlin', level: 30, category: 'Backend', color: '#563DAC' },
        {
          name: 'SpringBoot',
          level: 50,
          category: 'Backend',
          color: '#6CB33E',
        },
      ],
    },
    {
      title: 'Design & UI/UX',
      icon: <Palette className='icon' />,
      color: 'purple-to-pink',
      skills: [
        { name: 'Figma', level: 90, category: 'Design', color: '#F24E1E' },
        {
          name: 'Blender',
          level: 80,
          category: '3D Modeling',
          color: '#EA7600',
        },
      ],
    },
    {
      title: 'DevOps & Cloud',
      icon: <Globe className='icon' />,
      color: 'orange-to-yellow',
      skills: [
        { name: 'AWS', level: 30, category: 'Cloud', color: '#FF9900' },
        { name: 'Vercel', level: 40, category: 'Cloud', color: '#000000' },
        {
          name: 'GitHub Actions',
          level: 45,
          category: 'DevOps',
          color: '#2088FF',
        },
      ],
    },
  ]

  const getSkillLevelText = (level: number) => {
    if (level >= 90) return 'Expert'
    if (level >= 80) return 'Advanced'
    if (level >= 70) return 'Intermediate'
    return 'Beginner'
  }

  const getSkillLevelColor = (level: number) => {
    if (level >= 90) return 'green-to-emerald'
    if (level >= 80) return 'blue-to-indigo'
    if (level >= 70) return 'orange-to-yellow'
    return 'gray-to-gray'
  }

  return (
    <div className='skills-view'>
      <div className='categories-section'>
        <h2>Skill Categories</h2>
        <Divider isColored />

        <div className='category-list'>
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className='category-block'
              style={{ animationDelay: `${categoryIndex * 200}ms` }}
            >
              <div className={`category-header ${category.color}`}>
                {category.icon}
                <div>
                  <h3>{category.title}</h3>
                  <p>{category.skills.length} skills</p>
                </div>
              </div>

              <div className='skills-grid'>
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className='skill-card'
                    style={{ animationDelay: `${skillIndex * 100}ms` }}
                  >
                    <div className='glow' />
                    <div className='card-content'>
                      <div className='card-header'>
                        <div
                          className='skill-icon'
                          style={{ backgroundColor: skill.color }}
                        >
                          {skill.name.charAt(0)}
                        </div>
                        <div className='skill-info'>
                          <h4>{skill.name}</h4>
                          <p>{getSkillLevelText(skill.level)}</p>
                        </div>
                        <div className='skill-percent'>{skill.level}%</div>
                      </div>

                      <div className='progress-bar'>
                        <div
                          className={`progress-fill ${getSkillLevelColor(
                            skill.level
                          )}`}
                          style={{
                            width: `${skill.level}%`,
                            borderRadius: 0,
                          }}
                        />
                        <div
                          className='progress-indicator'
                          style={{ left: `${skill.level}%` }}
                        />
                      </div>

                      <div className='skill-badge'>
                        <span
                          className={`badge ${getSkillLevelColor(skill.level)}`}
                        >
                          {getSkillLevelText(skill.level)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills

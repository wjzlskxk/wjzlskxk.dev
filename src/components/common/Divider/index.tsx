import React from 'react'
import './style.scss'

interface DividerProps {
  isColored?: boolean
}

export const Divider = ({ isColored = false }: DividerProps) => {
  return <div className={`divider ${isColored && 'colored'}`} />
}

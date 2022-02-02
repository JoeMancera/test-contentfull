import React from 'react'
import { Project } from '../Project'

export const ProjectList = ({ projects }) => {
  if (!projects) return null
  if (!Array.isArray(projects)) return null

  return (
    <>
      {projects.map((project) => {
        return <Project key={project.id} project={project} />
      })}
    </>
  )
}

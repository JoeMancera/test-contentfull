import React from 'react'
import { Project } from '../Project'
import { ListOfItems } from './styles'

export const ProjectList = ({ projects }) => {
  if (!projects) return null
  if (!Array.isArray(projects)) return null

  return (
    <ListOfItems>
      {projects.map((project) => {
        return <Project key={project.id} project={project} />
      })}
    </ListOfItems>
  )
}

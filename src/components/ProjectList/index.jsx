import React from 'react'
import { Search } from '../Search'
import { Project } from '../Project'
import { ContainerItems } from './styles'

export const ProjectList = ({ projects }) => {
  if (!projects) return null
  if (!Array.isArray(projects)) return null

  return (
    <>
      <Search />
      <ContainerItems>
        {projects.map((project) => {
          return <Project key={project.id} project={project} />
        })}
      </ContainerItems>
    </>
  )
}

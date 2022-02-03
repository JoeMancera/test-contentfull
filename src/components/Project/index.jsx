import React from 'react'
import { ProjectItem, Image, ProjectDescription } from './styles'

export const Project = ({ project }) => {
  return (
    <ProjectItem key={project.id}>
      <Image image={project.image.gatsbyImageData} alt={project?.title} />
      <h2>{project.title}</h2>
      <ProjectDescription raw={project.description.raw} />
      <a href={project.url}>{project.url}</a>
    </ProjectItem>
  )
}

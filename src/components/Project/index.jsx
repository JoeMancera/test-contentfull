import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { RichText } from '../RichText'

export const Project = ({ project }) => {
  return (
    <div key={project.id}>
      <GatsbyImage image={project.image.gatsbyImageData} alt={project?.title} />
      <h2>{project.title}</h2>
      <RichText raw={project.description.raw} />
      <a href={project.url}>{project.url}</a>
    </div>
  )
}

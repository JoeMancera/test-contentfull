import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import Hero from '../components/hero'
import { ProjectList } from '../components/ProjectList'

class ProyectIndex extends React.Component {
  render() {
    const hero = get(this, 'props.data.allContentfulHero.nodes[0]')
    const projects = get(this, 'props.data.allContentfulProject.nodes')


    return (
      <Layout location={this.props.location}>
        <Hero
          image={hero.heroImage.gatsbyImageData}
          alt={hero.heroTitle}
          content={hero.heroTitle}
        />
        <ProjectList projects={projects} />
      </Layout>
    )
  }
}

export default ProyectIndex

export const pageQuery = graphql`
  query SomeQuery {
    allContentfulHero {
      nodes {
        heroTitle
        heroImage {
          file {
            contentType
            url
            fileName
          }
        }
        heroImage {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: BLURRED
            width: 1024
          )
        }
        sys {
          type
          revision
        }
      }
    }
    allContentfulProject {
      nodes {
        id
        title
        description {
          raw
        }
        url
        image {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: BLURRED
            width: 424
            height: 212
          )
        }
      }
    }
  }
`

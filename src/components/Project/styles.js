import styled from "styled-components";
import { GatsbyImage } from 'gatsby-plugin-image'
import { RichText } from '../RichText'

export const ProjectItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 12px;
  margin: 0;

`

export const Image = styled(GatsbyImage)`
  width: 300px;
  border-radius: 16px;
`

export const ProjectDescription = styled(RichText)`
  width: 100px;
`
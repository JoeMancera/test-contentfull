import React from 'react'
import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { RichTextContainer, Bold, Paragraph } from './styles'

const richTextOptions = {
  renderMark: {
    [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Paragraph>{children}</Paragraph>,
  },
  renderText: (text) => text.replace('!', '?'),
}

export const RichText = ({ raw }) => {
  return (
    <RichTextContainer>
      {documentToReactComponents(JSON.parse(raw), richTextOptions)}
    </RichTextContainer>
  )
}

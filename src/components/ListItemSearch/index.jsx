import React from 'react'
import { ListItem, Image, Title } from './styles'

export const ListItemSearch = ({ item }) => {
  return (
    <ListItem>
      <Image src={item.image.url} alt={item.image.title} />
      <div>
        <Title href={item.url}>{item.title}</Title>
      </div>
    </ListItem>
  )
}

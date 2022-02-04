import React from 'react'
import { ListItem, Image } from './styles'

export const ListItemSearch = ({ item }) => {
  return (
    <ListItem>
      <Image src={item.image.url} alt={item.image.title} />
      <p>{item.title}</p>
    </ListItem>
  )
}

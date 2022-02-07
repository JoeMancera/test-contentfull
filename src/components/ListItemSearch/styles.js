import styled from "styled-components"

export const ListItem = styled.li`
  display: flex;
  padding: 0;
  margin: 5px 0;
  list-style: none;
`
export const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`

export const Title = styled.p`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: orange;
  }
`
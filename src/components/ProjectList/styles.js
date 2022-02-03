import styled from 'styled-components';

export const ListOfItems = styled.ul`
  max-width: var(--size-max-width);
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 10px;
  list-style: none;
  padding: var(--space-2xl) var(--size-gutter);;
  margin: 0 auto;
`
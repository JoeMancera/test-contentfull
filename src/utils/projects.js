const filterItems = (response, query) => {
  
  const { items } = response.projectCollection;
  return items.filter(item => {
    const { title } = item;
    return title.toLowerCase().includes(query.toLowerCase());
  })
}

const queryGraphQL = `
query {
  projectCollection(limit: 10) {
    items {
      title
      description {
        json
      }
      image {
        url
        title
      }
    }
  }
}
`

export function getProjects({limit = 10, query = ''} = {}){
  
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
      method: 'POST',
      body: JSON.stringify({ query: queryGraphQL }),
    }
  )
    .then((response) => response.json())
    .then(({ data }) => {
      return filterItems(data, query)
    })
    .catch((error) => console.log(error))
}
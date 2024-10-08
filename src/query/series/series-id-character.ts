const seriesIdCharacter = `
query ($id: Int!, $type: MediaType, $page: Int = 1) {
    Media(id: $id, type: $type) {
      id
      characters(page: $page, sort: [ROLE]) {
        pageInfo {
          total
          perPage
          hasNextPage
          currentPage
          lastPage
        }
        edges {
          node {
            id
            name {
              first
              last
            }
            image {
              medium
              large
            }
          }
          role
          voiceActors {
            id
            name {
              first
              last
              native
            }
            image {
              medium
              large
            }
            language
          }
        }
      }
    }
  }
`

export default seriesIdCharacter
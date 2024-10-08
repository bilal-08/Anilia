const StudioSearchID = `query ($id: Int!) {
    Studio(id: $id) {
      id
      name
      isFavourite
      media {
        edges {
          isMainStudio
          node {
            id
            title {
              romaji
              english
            }
          }
        }
      }
    }
  }`

export default StudioSearchID
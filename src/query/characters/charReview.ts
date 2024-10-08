const characterReview = `query ($id: Int!) {
    Character (id: $id) {
      id
      name {
        first
        last
        native
        alternative
      }
      description
      isFavourite
      image {
        medium
        large
      }
      media {
        edges {
          characterRole
          voiceActors {
            id
            name {
              first
              last
            }
            language
          }
          node {
            id
            title {
              romaji
              english
            }
            # ...
          }
        }
      }
    }
  }`

  export default characterReview
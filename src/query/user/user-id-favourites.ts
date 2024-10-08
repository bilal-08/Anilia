const userfav = `query ($id: Int!) {
    User (id: $id) {
      favourites {
        anime {
          edges {
            favouriteOrder
            node {
              id
              title {
                userPreferred
              }
              coverImage {
                large
              }
            }
          }
        }
        manga {
          edges {
            favouriteOrder
            node {
              id
              title {
                userPreferred
              }
              coverImage {
                large
              }
            }
          }
        }
        characters {
          edges {
            favouriteOrder
            node {
              id
              name {
                first
                last
              }
              image {
                large
              }
            }
          }
        }
        staff {
          edges {
            favouriteOrder
            node {
              id
              name {
                first
                last
              }
              image {
                large
              }
            }
          }
        }
        studios {
          edges {
            favouriteOrder
            node {
              id
              name
            }
          }
        }
      }
    }
  }`

export default userfav
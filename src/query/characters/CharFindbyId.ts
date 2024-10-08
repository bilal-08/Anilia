export const charfindbyid = `
query ($id: Int!) {
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
    }
  }`
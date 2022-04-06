export const findchar = `
query ($query: String) {
    Page {
      characters(search: $query) {
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
    }
  }`
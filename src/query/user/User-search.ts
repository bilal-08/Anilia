
const usersearch = `
query ($query: String) {
    Page {
      users(search: $query) {
        id
        name
        avatar {
          medium
          large
        }
      }
    }
  }
  `
export default usersearch
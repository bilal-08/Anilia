const userFollowers = `query ($id: Int!) {
    Page {
      followers(userId: $id) {
        id
        name
        avatar {
          large
        }
      }
    }
  }`;
export default userFollowers
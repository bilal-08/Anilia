


const userserieslist = `
query ($id: Int!) {
  User (id: $id) {
    id
    name
    about # (asHtml: true)
    donatorTier
    isFollowing
    avatar {
      large
      medium
    }
    bannerImage
    unreadNotificationCount
    options {
      titleLanguage
      displayAdultContent
    }
    mediaListOptions {
     	scoreFormat
    }
    options {
      titleLanguage
    }
    updatedAt
  }
}
`
export default userserieslist
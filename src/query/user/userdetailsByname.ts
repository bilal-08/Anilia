const userdetailsByname = `
query ( $name: String) {
    User ( name: $name) {
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

export default userdetailsByname;
const useractivityID = `query ($id: Int!) {
    Activity(id: $id) {
      ... on TextActivity {
        id
        userId
        type
        replyCount
        text
        createdAt
        user {
          id
          name
          avatar {
            large
          }
        }
        likes {
          id
          name
          avatar {
            large
          }
        }
        replies {
          id
          text
          createdAt
          user {
            id
            name
            avatar {
              large
            }
          }
          likes {
            id
            name
            avatar {
              large
            }
          }
        }
      }
      ... on ListActivity {
        id
        userId
        type
        status
        progress
        replyCount
        createdAt
        user {
          id
          name
          avatar {
            large
          }
        }
        media {
          id
          title {
            userPreferred
          }
        }
        likes {
          id
          name
          avatar {
            large
          }
        }
        replies {
          id
          text
          createdAt
          user {
            id
            name
            avatar {
              large
            }
          }
          likes {
            id
            name
            avatar {
              large
            }
          }
        }
      }
      ... on MessageActivity {
        id
        type
        replyCount
        createdAt
        messenger {
          id
          name
          avatar {
            large
          }
        }
        likes {
          id
          name
          avatar {
            large
          }
        }
        replies {
          id
          text
          createdAt
          user {
            id
            name
            avatar {
              large
            }
          }
          likes {
            id
            name
            avatar {
              large
            }
          }
        }
      }
    }
  }`

export default useractivityID
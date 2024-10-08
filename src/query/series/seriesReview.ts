const seriesReview = `
query ($id: Int!) {
    Page {
      reviews (mediaId: $id){
        id
        summary
        rating
        ratingAmount
        createdAt
        updatedAt
        user {
          id
          name
          avatar {
            large
          }
        }
      }
    }
  }
`

export default seriesReview;
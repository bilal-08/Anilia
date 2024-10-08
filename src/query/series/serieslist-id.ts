const serieslist = `
query ($id: Int!) {
    MediaList(id: $id) {
      id
      score
      scoreRaw: score(format: POINT_100)
      progress
      progressVolumes
      repeat
      private
      priority
      notes
      hiddenFromStatusLists
      startedAt {
        year
        month
        day
      }
      completedAt {
        year
        month
        day
      }
      updatedAt
      createdAt
      media {
        id
        title {
          userPreferred
        }
      }
    }
  }
`

export default serieslist;
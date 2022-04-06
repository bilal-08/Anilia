 const AiringSchedule = `
 query ($mediaId: Int!) {
    AiringSchedule(mediaId: $mediaId) {
      id
      airingAt
      timeUntilAiring
      episode
      media {
        id
       
      }
    }
  }  
 `
export default AiringSchedule;
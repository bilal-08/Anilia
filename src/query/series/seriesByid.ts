const seriesId = `
query ($id: Int!, $type: MediaType) {
    Media(id: $id, type: $type) {
      id
      title {
        romaji
        english
        native
        userPreferred
      }
      startDate {
        year
        month
        day
      }
      endDate {
        year
        month
        day
      }
      coverImage {
        large
        medium
      }
      bannerImage
      format
      type
      status
      episodes
      chapters
      volumes
      season
      description
      averageScore
      meanScore
      genres
      synonyms
      hashtag
      source
      isAdult
      isFavourite
      nextAiringEpisode {
        airingAt
        timeUntilAiring
        episode
      }
      characters (perPage: 18, sort: [ROLE]) {
        edges {
          node {
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
          role
          voiceActors (language: JAPANESE) {
            id
            name {
              first
              last
              native
            }
            image {
              medium
              large
            }
            language
          }
        }
      }
      staff (perPage: 10) {
        edges {
          role
          node {
            id
            name {
              first
              last
              native
            }
            image {
              medium
              large
            }
          }
        }
      }
      relations {
        edges {
          relationType
          node {
            id
            title {
              romaji
              english
              native
              # ...
            }
          }
        }
      }
      trailer {
        id
        site
      }
      tags {
        id
        name
        description
        category
        rank
        isGeneralSpoiler
        isMediaSpoiler
        isAdult
      }
      reviews (perPage: 2) {
        nodes {
          id
          userId
          summary
          rating
          ratingAmount
        }
      }
      externalLinks {
        id
        url
        site
      }
      rankings {
        id
        rank
        type
        format
        year
        season
        allTime
        context
      }
      stats {
        airingProgression {
          episode
          score
          watching
        }
        statusDistribution {
          status
          amount
        }
        scoreDistribution {
          score
          amount
        }
      }
    }
  }
`
export default seriesId;
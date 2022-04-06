export const AnimeSearch = `
query ($query: String) {
    AnimeSearch: Page {
      media(search: $query, type: ANIME) {
        id
        title {
          userPreferred
        }
        coverImage {
          large
        }
      }
    }
  }`

export const Mangasearch = `
query ($query: String) {
  MangaSearch: Page {
    media(search: $query, type: MANGA) {
      id
      title {
        userPreferred
      }
      coverImage {
        large
      }
    }
  }
  }`

export const CharacterSearch = `
query ($query: String) {
  CharacterSearch: Page {
    characters(search: $query) {
      id
      name {
        first
        last
      }
      image {
        large
      }
    }
  }
}
`


export const StaffSearch = `
query ($query: String) {
  StaffSearch: Page {
    staff(search: $query) {
      id
      name {
        first
        last
      }
      image {
        large
      }
    }
  }
  }
`
export const StudioSearch = `
query ($query: String) {
  StudioSearch: Page {
    studios(search: $query) {
      id
      name
    }
  }
  }
`
export const ForumSearch = `
query ($query: String) {
  ForumSearch: Page {
    threads (search: $query) {
      id
      title
    }
  }
}
`

// export default AnimeSearch
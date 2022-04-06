interface Igetuserdetails {
  User: {
    id: number
    name: string
    about: null | string
    donatorTier: number
    isFollowing: boolean
    avatar: IAvatar
    bannerImage: string;
    unreadNotificationCount: null | number;
    options: { titleLanguage: string, displayAdultContent: boolean };
    mediaListOptions: { scoreFormat: string };
    updatedAt: number;
  }
}
interface Igetuser {
    users:
    {
      id: number,
      name: string,
      avatar: {
        medium: string
        large: string
      }
    }[]
}
interface IAvatar {
  large: string;
  medium: string;
}
interface IUserFollowing {
  Page: { following: object[] }
}
interface IsearchAnime {
  AnimeSearch: {
    media: {
      id: number,
      title: { userPreferred: string },
      coverImage: {
        large: string
      }
    }[]
  }
}
interface IsearchManga {
  MangaSearch: {
    media: {
      id: number,
      title: { userPreferred: string },
      coverImage: {
        large: string
      }
    }[]
  }
}
interface ICharacterSearch {
  CharacterSearch: {
    characters:
    {
      id: number,
      name: { first: string, last: string },
      image: {
        large: string
      }
    }[]
  }
}
interface IStaffSearch {
  StaffSearch: {
    staff:
    {
      id: number,
      name: { first: string, last: string },
      image: {
        large: string
      }
    }[]
  }
}
interface IStudioSearch {
  StudioSearch: {
    studios:
    { id: number, name: string }[]
  }
}
interface IForumSearch {
  ForumSearch: {
    threads: { id: number, title: string }[]
  }
}
interface IGenreCollection {
  GenreCollection: string[]
}
interface IFindcharacter {
  characters: {
    id: number,
    name: { first: string, last: string },
    image: {
      medium: string
      large: string
    }
  }[]
}
interface ICharacterInfo {
  Character: {
    id: number
    name: {
      first: string
      last: string
      native: string
      alternative: string[]
    }
    description: string
    isFavourite: boolean
    image: {
      medium: string
      large: string
    }
    media: {
      edges: {
        characterRole: string
        voiceActors: {
          id: number,
          name: { first: string, last: string },
          language: string
        }[]
        node: {
          id: number
          title: { romaji: string, english: null | string }
        }
      }[]
    }
  }
}
interface IseriesIDactivity {
  activities:
  {
    id: number
    user: { id: number; name: 'string' }
    media: { id: number }
  }[]
}
interface IvoiceActor {
  id: number,
  name: { first: string, last: string },
  language: string
}
interface ICharcterInfo {
  character: {
    id: number,
    name: {
      first: string,
      last: string,
      native: string,
      alternative: [string[]]
    },
    description: string
    isFavourite: boolean,
    image: {
      medium: string
      large: string
    },
    media: {
      edges: Array<
        {
          characterRole: string,
          voiceActors: Array<{ id: number; name: { first: string; last: string }; lanuage: string }>
          node: {
            id: 28,
            title: { romaji: string, english: null | number }
          }
        }>
    }
  }
}

interface IgetUserActivityByID {
  Activity: {
    id: string,
    userId: number,
    type: string,
    status: string,
    progress: null | number,
    replyCount: number,
    createdAt: number,
    user: {
      id: number,
      name: string,
      avatar: {
        large: string
      }
    },
    media: { id: number, title: { userPreferred: string } },
    likes: [],
    replies: []
  }

}

interface IgetUserFavByID {
  User: {
    favourites: {
      anime: { edges: {
        favouriteOrder: number,
        node: {
          id: number,
          title: { userPreferred: string },
          coverImage: {
            large: string
          }
        }
      }[] },
      manga: { edges: {
        favouriteOrder: number,
        node: {
          id: number,
          title: { userPreferred: string },
          coverImage: {
            large: string
          }
        }
      }[] },
      characters: { edges: {
        favouriteOrder: number,
        node: {
          id: number,
          title: { userPreferred: string },
          coverImage: {
            large: string
          }
        }
      }[] },
      staff: {
        edges:
        {
          favouriteOrder: number,
          node: {
            id: number,
            name: { first: string, last: string },
            image: {
              large: string
            }
          }
        }[]
      },
      studios: { edges: {
        favouriteOrder: number,
        node: {
          id: number,
          title: { userPreferred: string },
          coverImage: {
            large: string
          }
        }
      }[] }
    }
  }
}

interface IgetUserFollowersByID {
  Page: {
    followers: {
      id: number;
      name: string;
      avatar: {
        large: string;
      };
    }[];
  };
}

interface IgetUserSeriesRAWbyID {
  Page: {
    mediaList: {
      id: number,
      score: number,
      scoreRaw: number,
      progress: number,
      progressVolumes: null | number,
      repeat: number,
      private: boolean,
      priority: number,
      notes: null | number,
      hiddenFromStatusLists: boolean,
      startedAt: { year: null | number, month: null | number, day: null | number },
      completedAt: { year: null | number, month: null | number, day: null | number },
      updatedAt: number,
      createdAt: number,
      media: { id: number, title: { userPreferred: string } }
    }[]
  }
}

interface IfindSeries {
  Page :{
    media : {
  id: number,
  title: {
    romaji: string,
    english: string,
    native: string
  },
  coverImage: {
    medium: string
    large: string
  },
  format: string,
  type: string,
  averageScore: number,
  popularity: number,
  episodes: number,
  season: string,
  hashtag: null | number,
  isAdult: boolean,
  startDate: { year: number, month: number, day: number },
  endDate: { year: number, month: number, day: number }
}[]
}}

interface IsearchSeriesList {
  MediaList: {
    id: number,
    score: number,
    scoreRaw: number,
    progress: number,
    progressVolumes: null | number,
    repeat: number,
    private: boolean,
    priority: number,
    notes: null | number,
    hiddenFromStatusLists: boolean,
    startedAt: { year: null | number, month: null | number, day: null | number },
    completedAt: { year: null | number, month: null | number, day: null | number },
    updatedAt: number,
    createdAt: number,
    media: { id: number, title: { userPreferred: string } }
  }
}
interface IgetAiringTime {
  AiringSchedule: {
    id: number,
    airingAt: number,
    timeUntilAiring: number,
    episode: number,
    media: { id: number }
  }
}

interface IuserActivityOnseries {
  Page:{
    activities : {
      id : number
      user : { id :number, name : string}
      media : {id : number}
    }[];
  }
}

interface IgetUserIdSeriesList {
  User: {
    id: number,
    name: string,
    about: string,
    donatorTier: number,
    isFollowing: boolean,
    avatar: {
      large: string
      medium: string
    },
    bannerImage: string
    unreadNotificationCount: null | number,
    options: { titleLanguage: string, displayAdultContent: boolean },
    mediaListOptions: { scoreFormat: string },
    updatedAt: number
  }
}
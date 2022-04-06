import "./typings/index"
import userfollowing from "./query/user/user-following";
import usersearch from "./query/user/User-search";
import Request from "./util/request"
import userdetails from "./query/user/UserDetails";
import * as search from "./query/All-search";
import characterReview from "./query/characters/charReview";
import { findchar } from "./query/characters/CharFind";
import seriesId from "./query/series/series-id";
import useractivityID from "./query/user/user-activity-id";
import userfav from "./query/user/user-id-favourites";
import userFollowers from "./query/user/user-id-followers";
import userserieslistRAW from "./query/user/user-id-serieslist-raw";
import searchseries from "./query/series/searchSeries";
import serieslist from "./query/series/serieslist-id";
import AiringSchedule from "./query/series/series-id-airing";
import userActivityOnSeries from "./query/series/series-id-activity";
import userserieslist from "./query/user/user-id-serieslist";
import userdetailsByname from "./query/user/userdetailsByname";

export class Anilist {


  private util: Request
  constructor() {
    this.util = new Request();
  }
  /**
   * 
   * @param {string} UserName - username of the user
   * @returns {Promise<Igetuser>} - returns User's id,name,avatar
   */
  async getuser(UserName: string): Promise<Igetuser> {
    return (await this.util.postbyquery(usersearch, UserName)).Page
  }
  /**
   * 
   * @param {string} name - name of the user
   * @returns {Promise<Igetuserdetails>} - get user details
   */
  async getUserdetailsByname(name: string): Promise<Igetuserdetails> {
    return this.util.post(userdetailsByname, {
      "name": name,
    })
  }
  /**
   * 
   * @param {number} id - ID of the user (getID by using getuser())
   * @param {string} name - name of the user
   * @returns {Promise<Igetuserdetails>} - get User Details 
   */
  async getuserdetails(id: number): Promise<Igetuserdetails> {
    return this.util.post(userdetails, {
      "id": id,
    })
  }
  /**
   * 
   * @param {number} id - id of user
   * @returns {<IgetUserIdSeriesList>} - gives basic info of the user
   */
  async getUserIdSeriesList(id: number): Promise<IgetUserIdSeriesList> {
    return this.util.postbyid(userserieslist, id)
  }
  /**
   * 
   * @param {number} id -  User ID of the user
   * @returns {Promise<IUserFollowing>} - get User Following
   */
  async getUserFollowings(id: number): Promise<IUserFollowing> {
    return this.util.postbyid(userfollowing, id)
  }
  /**
   * 
   * @param {string} query - Name of the Anime 
   * @returns {Promise<IsearchAnime>} - get Anime id,coverImage
   */
  async searchAnime(query: string): Promise<IsearchAnime> {
    return this.util.postbyquery(search.AnimeSearch, query)
  }
  /**
   * 
   * @param {string} query - Name of the Manga
   * @returns {Promise<IsearchManga>} - get Manga id,coverImage
   */
  async searchManga(query: string): Promise<IsearchManga> {
    return this.util.postbyquery(search.Mangasearch, query)
  }
  /**
   * 
   * @param {string} query - Name of the Character 
   * @returns {Promise<ICharacterSearch>} - get Character id, first name, last name , image
   */
  async searchCharacter(query: string): Promise<ICharacterSearch> {
    return this.util.postbyquery(search.CharacterSearch, query)
  }
  /**
   * 
   * @param {string} query - Name of the staff,for example: Voice Actors
   * @returns {Promise<IStaffSearch>} - get staff details
   */
  async searchStaff(query: string): Promise<IStaffSearch> {
    return this.util.postbyquery(search.StaffSearch, query)
  }
  /**
   * 
   * @param {string} query - Name of the studios
   * @returns {Promise<IStudioSearch>} - get studio details
   */
  async searchStudio(query: string): Promise<IStudioSearch> {
    return this.util.postbyquery(search.StudioSearch, query)
  }
  /**
   * 
   * @param {string} query - title of the forum-post from anilist
   * @returns {Promise<IForumSearch>}
   */
  async forumSearch(query: string): Promise<IForumSearch> {
    return this.util.postbyquery(search.ForumSearch, query)
  }
  /**
   * 
   * @returns {Promise<IGenreCollection>} - List of Anime/Manga genres
   */
  async getGenrecollection(): Promise<IGenreCollection> {
    return this.util.post(`{
                GenreCollection
              }`, '')
  }
  /**
   * 
   * @param {string} query - name of the character
   * @returns {Promise<IFindcharacter>} - get character ID, Image 
   */
  async findCharacter(query: string): Promise<IFindcharacter> {
    return (await this.util.postbyquery(findchar, query)).Page
  }
  /**
   * 
   * @param {number} id - ID of the character (use FindCharacter() to get id)
   * @returns {Promise<ICharacterInfo>} - Details of Character
   */
  async getCharacterInfo(id: number): Promise<ICharacterInfo> {
    return this.util.postbyid(characterReview, id)
  }
  /**
   * 
   * @param {number} id - id of the series
   * @returns {Promise<IseriesIDactivity>} - get info of series
   */
  async getseriesactivityByID(id: number): Promise<IseriesIDactivity> {
    return (await this.util.post(seriesId, {
      "mediaId": id
    })).Page
  }
  /**
   * 
   * @param {number} id - User's id
   * @returns {Promise<IgetUserActivityByID>} - get user activities
   */
  async getUserActivityByID(id: number): Promise<IgetUserActivityByID> {
    return this.util.postbyid(useractivityID, id)
  }
  /**
     * 
     * @param {number} id - User's ID
     * @returns {Promise<IgetUserFavByID>} - get user favourites
     */
  async getUserFavByID(id: number): Promise<IgetUserFavByID> {
    return this.util.postbyid(userfav, id)
  }
  /**
   * 
   * @param {number} id - User's ID
   * @returns {Promise<IgetUserFollowersByID>} - get user followers
   */
  async getUserFollowersByID(id: number): Promise<IgetUserFollowersByID> {
    return this.util.postbyid(userFollowers, id)
  }
  /**
   * 
   * @param {number} id - User's ID
   * @returns {Promise<IgetUserSeriesRAWbyID>}
   */
  async getUserSeriesRAWbyID(id: number): Promise<IgetUserSeriesRAWbyID> {
    return this.util.postbyid(userserieslistRAW, id)
  }
  /**
   * 
   * @param {string} query - find series by it's name
   * @param {string} type - types: ANIME or MANGA, ANIME is default 
   * @returns {Promise<IfindSeries>} - get data about a series
   */
  async searchSeries(query: string, type: string = "ANIME"): Promise<IfindSeries> {
    return this.util.post(searchseries, {
      "query": query,
      "type": type.toUpperCase()
    });
  }
  /**
   * 
   * @param {number} id - id of a series ex:6272
   * @returns {Promise<IsearchSeriesList>} - get series list data
   */
  async searchSeriesList(id: number): Promise<IsearchSeriesList> {
    return this.util.postbyid(serieslist, id);
  }
  /**
   * 
   * @param {number} id - Id of the series, Anime/Manga
   * @returns {Promise<IgetAiringTime>} - get airing time details
   */
  async getAiringTime(id: number): Promise<IgetAiringTime> {
    return this.util.post(AiringSchedule, {
      "mediaId": id
    });
  }
  /**
   * 
   * @param {number} id - Id of the series, Anime/Manga
   * @returns 
   */
  async getUserActivityOnseries(id: number): Promise<IuserActivityOnseries> {
    return this.util.post(userActivityOnSeries, {
      "mediaId": id
    })
  }
}
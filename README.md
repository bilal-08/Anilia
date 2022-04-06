# ANILIA

## Anilist GraphQL Client
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/) ![NodeJs](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)

### Installation
```
npm install anilia
```

## ⬇  Import in your Project
```js
// commonjs Method
const { AnilistClient } = require('anilia');
//es6 or later
import { AnilistClient } from 'anilia';

const Anilia = new AnilistClient();

```
### 👤 Get a user
```js
(async()=>{
    const { id } = await Anilia.getuser("kewlbee");
    /* { users: [ { id: 5209602, name: 'kewlbee', avatar: [Object] } ] } */
    console.log(id) //id of the user
    const userData = await Anilia.getuserdetails(id)
// returns user data
// alternatively can use getUserdetailsByname using the username
})();
```
### 💫 Get Anime
```js
await Anilia.searchAnime("jojo") // returns searched anime related data
```
### 🔆 Get Manga
```js
await Anilia.searchManga("jojo") // returns searched anime related data
```
### 🧡 Get Character 
```js
await Anilia.findCharacter("subaru")
```
### ⏳ Get AiringTime
```js
// provide anime id
await Anilia.getAiringTime(108556)
// airing time for spyXfamily
```
> Note : Pass number whenever ID is mentioned
## 🔗 Useful links

### [Anilist Api docs](https://anilist.gitbook.io/anilist-apiv2-docs/overview/graphql)
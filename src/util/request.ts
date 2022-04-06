import axios from 'axios';

const BASE_URL = 'https://graphql.anilist.co/'

export default class request {

    post = async (query: string, variables: any) => {

        return (await axios.post(BASE_URL, {
            query, variables, header: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })).data.data
    }
    postbyid = async (query: string, param: number) => {

        return (await axios.post(BASE_URL, {
            query, variables: {
                "id": param
            }, header: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })).data.data
    }
    postbyquery = async (query: string, param: string) => {

        return (await axios.post(BASE_URL, {
            query, variables: {
                "query": param
            }, header: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })).data.data
    }
    getBuffer = async (url: string): Promise<Buffer> => {
        return (await axios.get(url, { responseType: 'arraybuffer' })).data
    }
}


// export  async function ( query: string, variables: param | Sparam): Promise<any> {
//     const BASE_URL = 'https://graphql.anilist.co/'

   
//     try {
//         const response = (await axios.post(BASE_URL, {
//             query, variables, header: {
//                 'Content-Type': 'application/json',
//                 'Accept': 'application/json',
//             }
//         })).data;

//         return response;
//     } catch (error: any) {
//         console.error(error.data);
//     }




// }

// export default post

// post('https://graphql.anilist.co/',`
// query ($query: String) {
//     Page {
//       users(search: $query) {
//         id
//         name
//         avatar {
//           medium
//           large
//         }
//       }
//     }
//   }
// `,{
//     "id" : "kewlbee"
// })

const userfollowing: string = `
query ($id: Int!) {
  Page {
    following(userId: $id) {
      id
      name
      avatar {
        large
      }
    }
  }
}
`

interface Ifollowing {
    userfollowers: following[]
}

interface following {
    id : number
    name : string
    avatar :{
        large :string
    }
}

export default userfollowing
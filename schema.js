import { buildSchema } from 'graphql'

export default buildSchema(`

  input FriendInput {
    id: ID
    firstName: String
    lastName: String
    gender: String
    language: String
    email: String
  }

  "Description du type friend"
  type Friend {
    id: ID
    "description du firstname"
    firstName: String
    lastName: String
    gender: String
    language: String
    email: String
  }

  type Query {
    getFriend(id: ID!): Friend
  }

  type Mutation {
    createFriend(input: FriendInput): Friend
    updateFriend(id: ID!, input: FriendInput): Friend

  }
`)

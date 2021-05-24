const {gql} = require('apollo-server-express');

const typeDefs = gql`
    type Query {
    me: User
        users: [User]
        user(username: String!): User
        thoughts(username: String): [Thought]
        thought(_id: ID!): Thought
  }
`
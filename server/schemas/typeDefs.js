const {gql} = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    _id: ID
    authors: String
    description: String
    bookId: String
    image: String
    link: String
    title: String
  }
  type Query {
    me: User
    users: [User]
    user(username: String!): User
    books: [Book]
    book(bookId: String!): Book
  }

  type Auth {
    token: ID!
    user: User
  }
  
  input login {
    email: String!
    password: String!
  }

  input book {
    authors: String!
    bookId: String!
    description: String!
    image: String!
    link: String!
    title: String!
  }
  type Mutation {
    login(input: login): Auth
    addUser(username: String!, input: login): Auth
    saveBook(input: book): User
    removeBook(bookId: String!): User
  }
`

module.exports = typeDefs;
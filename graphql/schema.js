const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    name: String!
    surname: String!
    country: String!
    id: String!
  }

  type Query {
    getUser(id: ID!): User
  }

  type Mutation {
    createUser(input: UserInput): User
  }

  input UserInput {
    username: String!
    name: String!
    surname: String!
    country: String!
    id: String!
  }
`;

module.exports = typeDefs;

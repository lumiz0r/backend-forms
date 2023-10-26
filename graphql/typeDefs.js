import gql from 'graphql-tag';

const typeDefs = gql`
  type Query {
    hello: String
    getUsers: [User]
  }

  type User {
    username: String
    name: String
    surname: String
    country: String
    id: String
  }

  type Mutation {
    createUser(username: String, name: String, surname: String, country: String, id: String) : User
    deleteUser(id: String) : User
    editUser(username: String, name: String, surname: String, country: String, id: String) : User
  }
`;

export default typeDefs;

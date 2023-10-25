import { connect } from 'mongoose';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import typeDefs from './graphql/schema.js';
import resolvers from './graphql/resolvers.js';


// const db = connect('mongodb://localhost/backend_forms', {

// });

// Set up GraphQL server
const server = new ApolloServer({ typeDefs, resolvers });

// Make sure to await server.start() before applying middleware
async function startServer() {
  const { url } = await startStandaloneServer(server, {
    listen: {port: 4000},
  });
  console.info(`🚀 Server ready at ${url}`);
}

startServer();


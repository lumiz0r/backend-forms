import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import typeDefs from './graphql/typeDefs.js';
import resolvers from './graphql/resolvers.js';
import mongoose from 'mongoose';

const server = new ApolloServer({ typeDefs, resolvers });

async function startServer() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/backend_forms', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.info('Connected to MongoDB');
    
    const { url } = await startStandaloneServer(server, {
      listen: { port: 4000 },
    });
    console.info(`🚀 Server ready at ${url}`);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}


startServer();


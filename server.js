const express = require('express');
const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./graphql/schema'); // Define your GraphQL schema
const resolvers = require('./graphql/resolvers'); // Define your GraphQL resolvers

const app = express();

// Connect to your MongoDB database
mongoose.connect('mongodb://localhost/backend_forms', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Set up GraphQL server
const server = new ApolloServer({ typeDefs, resolvers });

// Make sure to await server.start() before applying middleware
async function startApolloServer() {
  await server.start();
  server.applyMiddleware({ app });
}

startApolloServer().then(() => {
  // Start your Express app on a port of your choice
  const port = process.env.PORT || 4000;
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
});

const routes = require('./routes');

app.use('/', routes);


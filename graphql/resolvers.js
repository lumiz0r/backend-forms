const { User } = require('./models');

const resolvers = {
  Query: {
    getUser: async (_, { id }) => {
      return await User.findById(id);
    },
  },
  Mutation: {
    createUser: async (_, { input }) => {
      const user = new User(input);
      await user.save();
      return user;
    },
  },
};

module.exports = resolvers;

import { User } from "./models.js";

const resolvers = {
  Query: {
    hello: () => "Hello world!",
    getUsers: async () => await User.find({}),
  },
  Mutation: {
    createUser: async (_, args) => {
      const existingUser = await User.findOne({ id: args.id });

      if (existingUser) {
        throw new Error("User with this ID already exists.");
      }

      const user = new User(args);

      await user.save();

      return user;
    },
  },
};

export default resolvers;

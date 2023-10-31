import { User } from "./models.js";

const resolvers = {
  Query: {
    hello: () => "Hello world!",
    getUsers: async () => await User.find({}),
    loginUser: async (_, args) => {
       const user = await User.findOne({ id: args.id })
       return user;
    }
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
    deleteUser: async (_, {id}) => {
      const result = await User.deleteOne({ id: id });
      if (result.acknowledged && result.deletedCount === 1) {
        return id;
      } 
      console.log(result);  
      return null;

    },
    editUser: async (_, args) => {
      const result = await User.updateOne(
        { id: args.id },
         {
            $set: {
              username: args.username,
              name: args.name,
              surname: args.surname,
              country: args.country,
              id: args.id,
            },
         }
         );
      if (result.acknowledged && result.modifiedCount === 1) {
        return await User.findOne({ id: args.id });
      } 
      console.log(result);  
      return null;
    }
  },
};

export default resolvers;

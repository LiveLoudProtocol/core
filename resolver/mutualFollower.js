// Import any necessary modules for database access or external APIs
// const { exampleDatabaseFunction } = require('./exampleDatabaseModule');

const { mutualFollowers } = require('./templates');

const resolvers = {
  Query: {
    mutualFollowers: async (parent, args, context, info) => {
      const { request } = args;

      try {
       
        const mutualFollowersData = await mutualFollowers(request);

        return mutualFollowersData;
      } catch (error) {
       
        throw new Error(`Error fetching mutual followers: ${error.message}`);
      }
    }
  }
};

module.exports = resolvers;

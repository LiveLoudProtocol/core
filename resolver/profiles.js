// resolver.js

const { getProfiles } = require('./data-source'); // Assuming you have a data source module

const resolvers = {
  Query: {
    profiles: async (parent, args, context, info) => {
      const { request } = args;
      try {
        const profiles = await getProfiles(request);
        return profiles;
      } catch (error) {
        throw new Error(`Error fetching profiles: ${error.message}`);
      }
    },
  },
};

module.exports = resolvers;

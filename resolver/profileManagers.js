// resolver.js

const { getProfileManagers } = require('./data-source'); // Assuming you have a data source module

const resolvers = {
  Query: {
    profileManagers: async (parent, args, context, info) => {
      const { request } = args;
      try {
        const managers = await getProfileManagers(request);
        return managers;
      } catch (error) {
        throw new Error(`Error fetching profile managers: ${error.message}`);
      }
    },
  },
};

module.exports = resolvers;

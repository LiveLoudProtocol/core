// resolver.js

const { publications } = require('./data-source'); // Assuming you have a data source module

const resolvers = {
  Query: {
    profilesManaged: async (parent, args, context, info) => {
      const { request } = args;
      try {
        const managedProfiles = await getProfilesManaged(request);
        return managedProfiles;
      } catch (error) {
        throw new Error(`Error fetching managed profiles: ${error.message}`);
      }
    },
  },
};

module.exports = resolvers;

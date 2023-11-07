// resolver.js

const { getProfileActionHistory } = require('./data-source'); // Assuming you have a data source module

const resolvers = {
  Query: {
    profileActionHistory: async (parent, args, context, info) => {
      const { request } = args;
      try {
        const actionHistory = await getProfileActionHistory(request);
        return actionHistory;
      } catch (error) {
        throw new Error(`Error fetching profile action history: ${error.message}`);
      }
    },
  },
};

module.exports = resolvers;

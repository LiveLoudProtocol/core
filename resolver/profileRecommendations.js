// resolver.js

const { getProfileRecommendations } = require('./data-source'); // Assuming you have a data source module

const resolvers = {
  Query: {
    profileRecommendations: async (parent, args, context, info) => {
      const { request } = args;
      try {
        const recommendations = await getProfileRecommendations(request);
        return recommendations;
      } catch (error) {
        throw new Error(`Error fetching profile recommendations: ${error.message}`);
      }
    },
  },
};

module.exports = resolvers;

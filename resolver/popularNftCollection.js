const { getPopularNftCollectionsData } = require('./someModule'); // Import a function to fetch popular NFT collections data

const resolvers = {
  Query: {
    popularNftCollections: async (parent, args, context, info) => {
      try {
        // Assuming there is a function getPopularNftCollectionsData that fetches the data
        const popularNftCollectionsData = await getPopularNftCollectionsData(args.request);

        return popularNftCollectionsData;
      } catch (error) {
        throw new Error(`Error fetching popular NFT collections: ${error.message}`);
      }
    },
  },
};

module.exports = resolvers;

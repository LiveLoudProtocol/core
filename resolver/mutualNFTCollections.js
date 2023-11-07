
const { mutualNftCollections } = require('./templates');

const resolvers = {
  Query: {
    mutualNftCollections: async (parent, args, context, info) => {
      const { request } = args;

      try {
       
        const mutualNftCollectionsData = await mutualNftCollections(request);

        return mutualNftCollectionsData;
      } catch (error) {
       
        throw new Error(`Error fetching mutual NFT collections: ${error.message}`);
      }
    }
  }
};

module.exports = resolvers;

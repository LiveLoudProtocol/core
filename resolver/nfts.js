const { getNftsData } = require('./someModule'); // Import a function to fetch the NFTs data

const resolvers = {
  Query: {
    nfts: async (parent, args, context, info) => {
      try {
        // Assuming there is a function getNftsData that fetches the data
        const nftsData = await getNftsData(args.request);

        return nftsData;
      } catch (error) {
        throw new Error(`Error fetching NFTs: ${error.message}`);
      }
    },
  },
};

module.exports = resolvers;

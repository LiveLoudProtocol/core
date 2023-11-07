const { getNftGalleriesData } = require('./someModule'); // Import a function to fetch the NFT galleries data

const resolvers = {
  Query: {
    nftGalleries: async (parent, args, context, info) => {
      try {
        // Assuming there is a function getNftGalleriesData that fetches the data
        const nftGalleriesData = await getNftGalleriesData(args.request);

        return nftGalleriesData;
      } catch (error) {
        throw new Error(`Error fetching NFT galleries: ${error.message}`);
      }
    },
  },
};

module.exports = resolvers;

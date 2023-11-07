const { getOwnedHandlesData } = require('./someModule'); // Import a function to fetch owned handles data

const resolvers = {
  Query: {
    ownedHandles: async (parent, args, context, info) => {
      try {
        // Assuming there is a function getOwnedHandlesData that fetches the data
        const ownedHandlesData = await getOwnedHandlesData(args.request);

        return ownedHandlesData;
      } catch (error) {
        throw new Error(`Error fetching owned handles: ${error.message}`);
      }
    },
  },
};

module.exports = resolvers;

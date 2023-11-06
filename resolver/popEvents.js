const { getPoapEventData } = require('./someModule'); // Import a function to fetch POAP event data

const resolvers = {
  Query: {
    poapEvent: async (parent, args, context, info) => {
      try {
        // Assuming there is a function getPoapEventData that fetches the data
        const poapEventData = await getPoapEventData(args.request);

        return poapEventData;
      } catch (error) {
        throw new Error(`Error fetching POAP event: ${error.message}`);
      }
    },
  },
};

module.exports = resolvers;

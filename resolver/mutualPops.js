const resolvers = {
  Query: {
    mutualPoaps: async (parent, args, context, info) => {
      const { request } = args;

      try {
        const mutualPoapsData = await mutualPoaps(request);

        return mutualPoapsData;
      } catch (error) {
        // Handle any potential errors
        throw new Error(`Error fetching mutual Poaps: ${error.message}`);
      }
    }
  }
};

module.exports = resolvers;

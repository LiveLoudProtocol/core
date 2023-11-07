const resolvers = {
    Query: {
      publicationBookmarks: async (_, { request }, context) => {
        // Assuming you have a function named publicationBookmarks in your data source
        const result = await publicationBookmarks(request);
        return result;
      },
    },
  };
  
  module.exports = resolvers;
  
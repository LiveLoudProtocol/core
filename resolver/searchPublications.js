const resolvers = {
    Query: {
      searchPublications: async (_, { request }, context) => {
        // Implement logic to fetch publications data here
        // You can use the 'request' variable to access any parameters passed in the query
  
        // Example:
        const items = await fetchPublicationsData(request);
  
        return {
          items: items,
          pageInfo: {
            prev: null, // Implement pagination logic if needed
            next: null, // Implement pagination logic if needed
          },
        };
      },
    },
    Post: {
      id: (post) => post.id,
      publishedOn: (post) => {
        return {
          id: post.publishedOn.id,
        };
      },
      // Implement other fields for the Post type here
      // For example: isHidden, momoka, txHash, createdAt, etc.
    },
    // Implement resolvers for Comment and Quote types similarly
  };
  
  module.exports = resolvers;
  
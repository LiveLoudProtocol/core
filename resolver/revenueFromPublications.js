const resolvers = {
    Query: {
      revenueFromPublications: async (_, { request }, context) => {
        // Implement the logic to fetch revenue data here
        // You can use the 'request' variable to access any parameters passed in the query
  
        // Example:
        const items = await fetchRevenueData(request);
  
        return {
          items: items,
          pageInfo: {
            prev: null, // Implement pagination logic if needed
            next: null, // Implement pagination logic if needed
          },
        };
      },
    },
  };
  
  module.exports = resolvers;
  
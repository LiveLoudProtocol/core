const resolvers = {
    Query: {
      whoActedOnPublication: (_, { request }, context) => {
        try {
          const actedData = fetchWhoActedData(request);
          return actedData;
        } catch (error) {
          throw new Error('Error fetching who acted on publication');
        }
      },
    },
  };
  
  function fetchWhoActedData(request) {
    // Implement your logic to fetch data here
    // Example: Use request to query your database or API
  
    // Dummy data for illustration purposes
    const actedData = {
      items: [
        {
          id: '1',
          ownedBy: {
            address: '0x1234567890abcdef',
            chainId: 1,
          },
          // Add other properties based on your data model
        },
        // Add more items as needed
      ],
      pageInfo: {
        prev: null,
        next: null,
      },
    };
  
    return actedData;
  }
  
  module.exports = resolvers;
  
const resolvers = {
    Query: {
      whoReactedPublication: async (_, { request }, context) => {
        try {
          const reactedData = await fetchReactedData(request);
          return reactedData;
        } catch (error) {
          throw new Error('Error fetching users who reacted to publication');
        }
      },
    },
  };
  
  // This function simulates fetching reacted users based on the request
  async function fetchReactedData(request) {
    // Implement your logic to fetch data here
    // Example: Use request to query your database or API
  
    // Dummy data for illustration purposes
    const reactedData = {
      items: [
        {
          profile: {
            id: '1',
            ownedBy: {
              address: '0x1234567890abcdef',
              chainId: 1,
            },
            // Add other properties based on your data model
          },
          reactions: [
            {
              reaction: 'LIKE',
              reactionAt: '2023-11-07T12:34:56Z',
            },
            // Add more reactions as needed
          ],
        },
        // Add more items as needed
      ],
      pageInfo: {
        prev: null,
        next: null,
      },
    };
  
    return reactedData;
  }
  
  module.exports = resolvers;
  
const resolvers = {
    Query: {
      userSigNonces: async (_, __, context) => {
        try {
          const sigNonces = await fetchSigNoncesFromDataSource();
          return sigNonces;
        } catch (error) {
          // Handle any errors that may occur during the fetch
          throw new Error('Unable to retrieve signature nonces');
        }
      },
    },
  };
  
  // Hypothetical function for fetching signature nonces
  async function fetchSigNoncesFromDataSource() {
    // This is where you would perform the actual fetch from your data source
    // Example: const sigNonces = await someDataSourceFunction();
    
    // For this example, let's assume we're returning dummy signature nonces
    const sigNonces = {
      lensHubOnchainSigNonce: 123456,
      lensTokenHandleRegistryOnchainSigNonce: 789012,
      lensPublicActProxyOnchainSigNonce: 345678
    };
    return sigNonces;
  }
  
  module.exports = resolvers;
  
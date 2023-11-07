const resolvers = {
    Query: {
      supportedOpenActionModules: async (_, { request }, context) => {
        // Implement logic to fetch supported open action modules data here
        // You can use the 'request' variable to access any parameters passed in the query
  
        // Example:
        // const modules = await fetchSupportedOpenActionModules(request);
  
        // Replace the above line with your actual implementation
  
        return {
          items: [], // Replace with the actual list of supported modules
          pageInfo: {
            prev: null, // Implement pagination logic if needed
            next: null, // Implement pagination logic if needed
          },
        };
      },
    },
    KnownSupportedModule: {
      moduleName: (module) => module.moduleName,
      contract: (module) => module.contract,
      moduleInput: (module) => module.moduleInput,
      redeemInput: (module) => module.redeemInput,
      returnDataInput: (module) => module.returnDataInput,
    },
    UnknownSupportedModule: {
      moduleName: (module) => module.moduleName,
      contract: (module) => module.contract,
    },
  };
  
  module.exports = resolvers;
  
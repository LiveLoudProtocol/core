const resolvers = {
    Query: {
      approvedModuleAllowanceAmount: (_, { request }) => {
        
      },
    },
    ApprovedModuleAllowanceAmount: {
      moduleName: (parent) => {
        
      },
      moduleContract: (parent) => {
        
      },
      allowance: (parent) => {
      
      },
    },
    ModuleContract: {
      address: (parent) => {
        // Implement the resolver logic for 'address' here
        // This resolver should return the 'address' for the parent object.
      },
      chainId: (parent) => {
        // Implement the resolver logic for 'chainId' here
        // This resolver should return the 'chainId' for the parent object.
      },
    },
    Allowance: {
      asset: (parent) => {
       
      },
      value: (parent) => {
       
      },
      rate: (parent) => {
        
      },
    },
    Erc20: {
      name: (parent) => {
       
      },
      symbol: (parent) => {
        
      },
      decimals: (parent) => {
       
      },
      contract: (parent) => {
       
      },
    },
  };
  
  module.exports = resolvers;
  
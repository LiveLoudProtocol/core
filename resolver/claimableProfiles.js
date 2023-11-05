const resolvers = {
    Query: {
      claimableProfiles: () => {
        
      },
    },
    ClaimableProfiles: {
      reserved: (parent) => {
        
      },
      canMintProfileWithFreeTextHandle: (parent) => {
      
      },
    },
    ReservedProfile: {
      id: (parent) => {
       
      },
      withHandle: (parent) => {
        
      },
      source: (parent) => {
       
      },
      expiry: (parent) => {
        
      },
    },
  };
  
  module.exports = resolvers;
  
const resolvers = {
    Query: {
      exploreProfiles: (_, { request }) => {
        
      },
    },
    ExploreProfilesResult: {
      items: (parent) => {
       
      },
      pageInfo: (parent) => {
       
      },
    },
    Profile: {
      id: (parent) => {
        
      },
      ownedBy: (parent) => {
       
      },
     
    },
    OwnedBy: {
      address: (parent) => {
       
      },
      chainId: (parent) => {
       
      },
    },
    Stats: {
      id: (parent) => {
       
      },
      followers: (parent) => {
        
      },
      
    },
   
  };
  
  module.exports = resolvers;
  
const resolvers = {
    Query: {
      currentSession: () => {
       
      },
    },
    CurrentSession: {
      authorizationId: (parent) => {
        
      },
      browser: (parent) => {
       
      },
      device: (parent) => {
      
      },
      os: (parent) => {
        
      },
      origin: (parent) => {
      
      },
      expiresAt: (parent) => {
       
      },
      createdAt: (parent) => {
       
      },
      updatedAt: (parent) => {
        
      },
    },
  };
  
  module.exports = resolvers;
  
// resolver.js

const resolver = {
    Query: {
      internalClaimStatus: (parent, args) => {
        
        const { request } = args;
  
        const result = getInternalClaimStatus(request);
  
        return result;
      },
    },
  };
  
  
  function getInternalClaimStatus(request) {
   
    const claimStatus = {
      claimId: request.claimId, 
      status: 'approved', 
    };
  
    return claimStatus;
  }
  
  module.exports = resolver;
  
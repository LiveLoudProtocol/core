const resolver = {
    Query: {
      internalAllowedDomains: (parent, args) => {
       
        const { request } = args;
  
        const result = getInternalAllowedDomains(request);
  
        return result;
      },
    },
  };
  
 
  function getInternalAllowedDomains(request) {
    
    const allowedDomains = [
      'example.com',
      'openai.com',
      'test.com',
    ];
  
    return allowedDomains;
  }
  
  module.exports = resolver;
  
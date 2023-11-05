
const resolver = {
    Query: {
      internalCuratedHandles: (parent, args) => {
        
        const { request } = args;
  
        
        const result = getInternalCuratedHandles(request);
  
        return result;
      },
    },
  };
  
 
  function getInternalCuratedHandles(request) {

    const curatedHandles = [
      { handle: 'handle1' },
      { handle: 'handle2' },
      { handle: 'handle3' },
     
    ];
  
    return curatedHandles;
  }
  
  module.exports = resolver;
  
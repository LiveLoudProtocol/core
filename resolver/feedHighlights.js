// resolver.js

const resolver = {
    Query: {
      feedHighlights: (parent, args) => {
        
        const fakeFeedData = []; 
        
        return {
          items: fakeFeedData,
          pageInfo: {
            prev: null, 
            next: null, 
          },
        };
      },
    },
    
  };
  
  module.exports = resolver;
  
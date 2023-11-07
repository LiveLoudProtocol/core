const resolvers = {
    Query: {
      explorePublications: (_, { request }) => {
       
      },
    },
    ExplorePublicationResult: {
      items: (parent) => {
       
      },
      pageInfo: (parent) => {
       
      },
    },
    Post: {
      id: (parent) => {
       
      },
      
    },
    Quote: {
      id: (parent) => {
       
      },
     
    },
    Comment: {
      id: (parent) => {
        
      },
      
    },
   
  };
  
  module.exports = resolvers;
  
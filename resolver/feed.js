const feedResolver = async (parent, args, context) => {
    
    const items = await fetchFeedDataFromDatabase(args.request);
  
    return {
      items,
      pageInfo: {
        prev: null, 
        next: null,
      },
    };
  };
  
  const fetchFeedDataFromDatabase = async (request) => {

    return fetchedItems;
  };
  
  module.exports = {
    Query: {
      feed: feedResolver,
    },
  };
  
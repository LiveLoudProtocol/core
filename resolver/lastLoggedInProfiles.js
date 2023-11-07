const resolver = {
    Query: {
      lastLoggedInProfile: (parent, args) => {
        const { request } = args;
        const result = getLastLoggedInProfile(request);
        return result;
      },
    },
  };
  
  function getLastLoggedInProfile(request) {

    const lastLoggedInProfile = {

    };
  
    return lastLoggedInProfile;
  }
  
  module.exports = resolver;
  
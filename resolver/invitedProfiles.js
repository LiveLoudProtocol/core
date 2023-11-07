
const resolver = {
    Query: {
      invitedProfiles: (parent, args) => {
        
        const { request } = args;
  
      
        const result = getInvitedProfiles(request);
  
        return result;
      },
    },
  };
  
  
  function getInvitedProfiles(request) {
   
    const invitedProfiles = [

    ];
  
    return invitedProfiles;
  }
  
  module.exports = resolver;
  
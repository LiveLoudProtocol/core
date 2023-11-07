// resolver.js

const resolver = {
    Query: {
      following: (parent, args) => {
       
        const fakeFollowing = [
          {
            id: "following1",
            ownedBy: {
              address: "0x123abc",
              chainId: 1,
            },
           
          },
          {
            id: "following2",
            ownedBy: {
              address: "0x456def",
              chainId: 1,
            },
           
          },
         
        ];
        
        return {
          following: fakeFollowing,
        };
      },
    },
  };
  
  module.exports = resolver;
  

const resolver = {
    Query: {
      followers: (parent, args) => {
        const fakeFollowers = [
          {
            id: "follower1",
            ownedBy: {
              address: "0x123abc",
              chainId: 1,
            },
           
          },
          {
            id: "follower2",
            ownedBy: {
              address: "0x456def",
              chainId: 1,
            },
           
          },
         
        ];
        
        return {
          followers: fakeFollowers,
        };
      },
    },
  };
  
  module.exports = resolver;
  
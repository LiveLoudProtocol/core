const resolvers = {
    Query: {
      searchProfiles: async (_, { request }, context) => {
        // Implement the logic to fetch profile data here
        // You can use the 'request' variable to access any parameters passed in the query
  
        // Example:
        const items = await fetchProfileData(request);
  
        return {
          items: items,
          pageInfo: {
            prev: null, // Implement pagination logic if needed
            next: null, // Implement pagination logic if needed
          },
        };
      },
    },
    Profile: {
      ownedBy: async (profile, _, context) => {
        // Implement logic to fetch owner data for a profile
        return {
          address: profile.ownedBy.address,
          chainId: profile.ownedBy.chainId,
        };
      },
      // Implement other fields for the Profile type here
      // For example: txHash, createdAt, stats, operations, interests, etc.
    },
    ProfileGuardian: {
      // Implement resolver functions for the ProfileGuardian type here
    },
    OnchainIdentity: {
      // Implement resolver functions for the OnchainIdentity type here
    },
    FollowNftAddress: {
      // Implement resolver functions for the FollowNftAddress type here
    },
    Metadata: {
      // Implement resolver functions for the Metadata type here
    },
    FollowModuleSettings: {
      // Implement resolver functions for the FollowModuleSettings type here
    },
    HandleInfo: {
      // Implement resolver functions for the HandleInfo type here
    },
    SuggestedFormatted}
module.exports=resolver;  
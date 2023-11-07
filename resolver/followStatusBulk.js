const resolver = {
    Query: {
      followStatusBulk: (parent, args) => {
       
        const fakeFollowStatuses = [
          {
            follower: "follower1",
            profileId: "profileId1",
            status: {
              value: "Following",
              isFinalisedOnchain: true,
            },
          },
          {
            follower: "follower2",
            profileId: "profileId2",
            status: {
              value: "NotFollowing",
              isFinalisedOnchain: false,
            },
          },
          // Add more follow status objects if needed
        ];
        
        return {
          followStatusBulk: fakeFollowStatuses,
        };
      },
    },
  };
  
  module.exports = resolver;
  
const { apolloClient } = require('../apollo-client');
const {
  ExploreProfilesDocument,
  ProfileSortCriteria,
} = require('../graphql/generated');

// sort out types by generating them!
const exploreProfiles = async (request) => {
  const result = await apolloClient.query({
    query: ExploreProfilesDocument,
    variables: {
      request,
    },
  });

  return result.data.exploreProfiles;
};

const explore = async () => {
  const result = await exploreProfiles({
    sortCriteria: ProfileSortCriteria.MostFollowers,
  });

  console.log('explore: result', result);

  return result;
};

(async () => {
  await explore();
})();

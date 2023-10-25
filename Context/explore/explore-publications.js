const { apolloClient } = require('../apollo-client');
const {
  ExplorePublicationsDocument,
  PublicationSortCriteria,
} = require('../graphql/generated');

const explorePublications = (request) => {
  return apolloClient.query({
    query: ExplorePublicationsDocument,
    variables: {
      request,
    },
  });
};

const explore = async () => {
  const result = await explorePublications({
    sortCriteria: PublicationSortCriteria.Latest,
  });

  console.log('explore: result', result.data);

  return result.data;
};

(async () => {
  await explore();
})();

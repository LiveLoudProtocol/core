const { apolloClient } = require('../apollo-client');
const { login } = require('../authentication/login');
const { PROFILE_ID } = require('../config');
const { getAddressFromSigner } = require('../ethers.service');
const { FeedRequest, ProfileFeedDocument } = require('../graphql/generated');

const getProfileFeedRequest = async (request) => {
  const result = await apolloClient.query({
    query: ProfileFeedDocument,
    variables: {
      request,
    },
  });

  return result.data.feed;
};

const profileFeed = async () => {
  const profileId = PROFILE_ID;
  if (!profileId) {
    throw new Error('Must define PROFILE_ID in the .env to run this');
  }

  const address = getAddressFromSigner();
  console.log('profile feed: address', address);

  await login(address);

  const result = await getProfileFeedRequest({ profileId, limit: 50 });
  console.log('profile feed: result', result);

  return result;
};

(async () => {
  await profileFeed();
})();

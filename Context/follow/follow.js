const { apolloClient } = require('../apollo-client');
const { login } = require('../authentication/login');
const { explicitStart } = require('../config');
const { getAddressFromSigner, signedTypeData, splitSignature } = require('../ethers.service');
const { CreateFollowTypedDataDocument } = require('../graphql/generated');
const { lensHub } = require('../lens-hub');

const createFollowTypedData = async (request) => {
  const result = await apolloClient.mutate({
    mutation: CreateFollowTypedDataDocument,
    variables: {
      request,
    },
  });

  return result.data.createFollowTypedData;
};

const follow = async (profileId = '0x11') => {
  const address = getAddressFromSigner();
  console.log('follow: address', address);

  await login(address);

  const result = await createFollowTypedData({
    follow: [
      {
        profile: profileId,
      },
    ],
  });
  console.log('follow: result', result);

  const typedData = result.typedData;
  console.log('follow: typedData', typedData);

  const signature = await signedTypeData(typedData.domain, typedData.types, typedData.value);
  console.log('follow: signature', signature);

  const { v, r, s } = splitSignature(signature);

  const tx = await lensHub.followWithSig({
    follower: getAddressFromSigner(),
    profileIds: typedData.value.profileIds,
    datas: typedData.value.datas,
    sig: {
      v,
      r,
      s,
      deadline: typedData.value.deadline,
    },
  });
  console.log('follow: tx hash', tx.hash);
  return tx.hash;
};

(async () => {
  if (explicitStart(__filename)) {
    await follow();
  }
})();

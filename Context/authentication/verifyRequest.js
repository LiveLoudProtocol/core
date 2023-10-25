const { apolloClient } = require('./apollo-client');
const { getAddressFromSigner } = require('./ethers.service');
const { VerifyDocument } = require('./graphql/generated');
const { login } = require('./login');

const verify = async (request) => {
  const result = await apolloClient.query({
    query: VerifyDocument,
    variables: {
      request,
    },
  });

  return result.data.verify;
};

const verifyRequest = async () => {
  const address = getAddressFromSigner();
  console.log('verify: address', address);

  const authenticationResult = await login(address);

  const result = await verify({ accessToken: authenticationResult.accessToken });
  console.log('verify: result', result);

  return result;
};

module.exports = { verifyRequest };
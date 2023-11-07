// resolver.js

const { checkIfProfileAlreadyInvited } = require('./data-source'); // Assuming you have a data source module

const resolvers = {
  Query: {
    profileAlreadyInvited: async (parent, args, context, info) => {
      const { request } = args;
      try {
        const isAlreadyInvited = await checkIfProfileAlreadyInvited(request);
        return isAlreadyInvited;
      } catch (error) {
        throw new Error(`Error checking if profile is already invited: ${error.message}`);
      }
    },
  },
};

module.exports = resolvers;

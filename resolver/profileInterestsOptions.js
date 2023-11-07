// resolver.js

const resolvers = {
    Query: {
      profileInterestsOptions: (parent, args, context, info) => {
        try {
          // Assuming interestsOptions is a predefined list of interests
          const interestsOptions = ['Interest 1', 'Interest 2', 'Interest 3'];
          return interestsOptions;
        } catch (error) {
          throw new Error(`Error fetching profile interests options: ${error.message}`);
        }
      },
    },
  };
  
  module.exports = resolvers;
  
const resolvers = {
    Query: {
        approvedAuthentications: async (_, { request }) => {
            try {

                const items = await DataSource.getApprovedAuthentications(request);


                return {
                    items,
                    pageInfo: {
                        prev: null,
                        next: null,
                    },
                };
            } catch (error) {

                throw new Error('Error retrieving approved authentications');
            }
        },
    },
};

module.exports = resolvers;

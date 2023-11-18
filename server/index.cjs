const { ApolloServer, gql } = require('apollo-server');
const typeDefs = require('./typeDefs.cjs');
const resolvers = require('./resolvers.cjs');



const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});

import { ApolloServer } from 'apollo-server-express';
import depthLimit from 'graphql-depth-limit';
import {
  ApolloServerPluginLandingPageGraphQLPlayground
} from 'apollo-server-core';
import { createSchema } from './schema';

async function createGraphqlServer () {
  // deepcode ignore LimitGraphqlDepth: <please specify a reason of ignoring this>
  const server = new ApolloServer({
    schema: await createSchema(),
    validationRules: [depthLimit(10)],
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
    context: ({ req, res }) => ({ req, res })
  });

  return server;
}

export default createGraphqlServer;

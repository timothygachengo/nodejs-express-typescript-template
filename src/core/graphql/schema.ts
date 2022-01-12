import { buildSchema } from 'type-graphql';
import { UserResolver } from '../../api/grapql/resolvers/user.resolver';

export const createSchema = () => {
  return buildSchema({
    resolvers: [UserResolver],
    emitSchemaFile: true,
    validate: false
  });
};

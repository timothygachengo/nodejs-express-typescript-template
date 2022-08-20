// Update with your config settings.
import config from './node.config';

const TABLE_NAME = 'knex_migrations';
const MIGRATION_DIRECTORY = './src/database/postgres/migrations';
const SEED_DIRECTORY = './src/database/postgres/seeds';

const defaultConnection = {
  host: config.db.mysql.host,
  user: config.db.mysql.user,
  password: config.db.mysql.password,
  database: config.db.mysql.database,
  port: config.db.mysql.port,
};

export default {
  development: {
    client: 'pg',
    connection: {
      ...defaultConnection,
      charset: 'utf8'
    },
    pool: {
      min: 500,
      max: 200000
    },
    migrations: {
      directory: MIGRATION_DIRECTORY,
      tableName: TABLE_NAME
    },
    seeds: {
      directory: SEED_DIRECTORY
    },
    acquireConnectionTimeout: 10000,
    debug: true

  },

  staging: {
    client: 'pg',
    connection: {
      ...defaultConnection,
    },
    pool: {
      min: 5,
      max: 20
    },
    migrations: {
      directory: MIGRATION_DIRECTORY,
      tableName: TABLE_NAME
    },
    seeds: {
      directory: SEED_DIRECTORY
    }
  },

  production: {
    client: 'pg',
    connection: {
      ...defaultConnection
    },
    pool: {
      min: 5,
      max: 20
    },
    migrations: {
      directory: MIGRATION_DIRECTORY,
      tableName: TABLE_NAME
    },
    seeds: {
      directory: SEED_DIRECTORY
    }
  }
};

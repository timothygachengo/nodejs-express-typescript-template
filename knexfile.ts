
// Update with your config settings.
import config from './node.config';

/**
 * Declare the type of database you are using
 * Options : mysql, mysql2, pg
 * mysql and mysql2 supports both mysql and maria DB
 * For more infromation refer to the folowing : https://knexjs.org
 */
const client = 'mysql2';

export default {

  development: {
    client,
    connection: {
      host: config.db.mysql.host,
      user: config.db.mysql.user,
      password: config.db.mysql.password,
      database: config.db.mysql.database,
      port: config.db.mysql.port,
      charset: 'utf8'
    },
    pool: {
      min: 500,
      max: 200000
    },
    migrations: {
      directory: './src/database/mysql/migrations',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './src/database/mysql/seeds'
    },
    acquireConnectionTimeout: 10000,
    debug: true

  },

  staging: {
    client,
    connection: {
      host: config.db.mysql.host,
      user: config.db.mysql.user,
      password: config.db.mysql.password,
      database: config.db.mysql.database,
      port: config.db.mysql.port
    },
    pool: {
      min: 5,
      max: 20
    },
    migrations: {
      directory: './src/database/mysql/migrations',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './src/database/mysql/seeds'
    }
  },

  production: {
    client,
    connection: {
      host: config.db.mysql.host,
      user: config.db.mysql.user,
      password: config.db.mysql.password,
      database: config.db.mysql.database,
      port: config.db.mysql.port
    },
    pool: {
      min: 5,
      max: 20
    },
    migrations: {
      directory: './src/database/mysql/migrations',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './src/database/mysql/seeds'
    }
  }

};

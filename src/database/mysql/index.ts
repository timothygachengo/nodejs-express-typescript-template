import knex from 'knex';
import configuration from '../../../knexfile';

const config = process.env.NODE_ENV === 'production' ? configuration.production : configuration.development;

const conn = knex(config);

export { conn };
export default conn;

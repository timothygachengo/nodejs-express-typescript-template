import { Knex } from 'knex';
import conn from './index';

interface ISqlQuery {
    conn: Knex<any, unknown[]>,
    table : string;
}

class SqlQuery implements ISqlQuery {
  conn: Knex<any, unknown[]>;
  table: string;

  constructor (table:string) {
    this.conn = conn;
    this.table = table;
  }
}

export default SqlQuery;

import config from '../../node.config';

const {
    app, api, db, uuid, google, email, env, port, host, logs, cache
} = config;

const mysqlConfig = db.mysql;
const mongoConfig = db.mongodb;

export {
    mysqlConfig,
    mongoConfig,
    app as appConfig,
    api as apiConfig,
    db as dbConfig,
    uuid as uuidConfig,
    google as googleConfig,
    email as emailConfig,
    env as environment,
    port as portConfig,
    host as hostConfig,
    logs as logsConfig,
    cache as cacheConfig
};

export default config;

import dotenv from 'dotenv';

dotenv.config();

const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 4300,
    host: process.env.HOST || 'localhost',
    app: {
        name: process.env.APP_NAME || 'topup-mama',
        secret: process.env.APP_SECRET || 'secret'
    },
    api: {
        version: process.env.API_PREFIX || '/api/v1'
    },
    db: {
        mysql: {
            client: 'mysql',
            host: <string>process.env.MYSQL_HOST || '127.0.0.1',
            database: process.env.MYSQL_DATABASE || 'topup-mama',
            user: process.env.MYSQL_USERNAME || 'root',
            password: process.env.MYSQL_PASSWORD || '',
            port: parseInt(<string>process.env.MYSQL_PORT) || 3306
        },
        postgres: {
            client: 'pg',
            host: process.env.DB_HOST || 'localhost',
            database: process.env.POSTGRES_DATABASE || 'topup-mama',
            user: process.env.POSTGRES_USERNAME || 'topup-mama',
            password: process.env.POSTGRES_PASSWORD || '',
            port: parseInt(<string>process.env.POSTGRES_PORT) || 5432

        },
        sqlite: {
            client: 'sqlite3',
            connection: {
                filename: process.env.SQLITE_DATABASE || './topup-mama.db'
            }
        },
        mongodb: {
            client: 'mongodb',
            url: process.env.MONGODB_CONNECTION_URL || 'mongodb://localhost:27017/topup-mama',
            host: process.env.MONGO_HOST || 'localhost',
            port: parseInt(<string>process.env.MONGO_PORT) || 27017,
            user: process.env.MONGO_USERNAME || 'topup-mama',
            password: process.env.MONGO_PASSWORD || '',
            database: process.env.MONGO_DATABASE || 'topup-mama',
            useNewUrlParser: true,
            useUnifiedTopology: true

        }

    },
    uuid: {
        VERSION: <string>process.env.UUID_VERSION || 'v4',
        NAMESPACE: <string>process.env.UUID_NAMESPACE || 'f4c5d568-f48c-4382-9ce2-df03351ce082'
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'secret',
        expiresIn: process.env.JWT_EXPIRES_IN || '1d'
    },
    email: {
        host: process.env.EMAIL_HOST || 'smtp.gmail.com',
        port: parseInt(<string>process.env.EMAIL_PORT) || 465,
        secure: process.env.EMAIL_SECURE || true,
        auth: {
            user: process.env.EMAIL_USERNAME || '',
            pass: process.env.EMAIL_PASSWORD || ''
        }
    },
    aws: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
        region: process.env.AWS_REGION || 'us-east-1',
        bucket: process.env.AWS_BUCKET || '',
        s3: {
            endpoint: process.env.AWS_S3_ENDPOINT || '',
            apiVersion: process.env.AWS_S3_API_VERSION || '2006-03-01'
        }
    },
    google: {
        clientId: process.env.GOOGLE_CLIENT_ID || '',
        clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
        redirectUri: process.env.GOOGLE_REDIRECT_URI || '',
        scope: process.env.GOOGLE_SCOPE || 'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email'
    },
    firebase: {
        type: process.env.FIREBASE_TYPE || 'service_account',
        projectId: process.env.FIREBASE_PROJECT_ID || '',
        adminConnectionUrl: process.env.FIREBASE_ADMIN_CONNECTION_URL || '',
        adminDatabaseUrl: process.env.FIREBASE_ADMIN_DATABASE_URL || '',
        adminStorageUrl: process.env.FIREBASE_ADMIN_STORAGE_URL || ''
    },
    logs: {
        level: process.env.LOG_LEVEL || 'debug',
        file: process.env.LOG_FILE || './logs/app.log'
    },
    cache: {
        driver: process.env.CACHE_DRIVER || 'redis',
        redis: {
            host: process.env.REDIS_HOST || '127.0.0.1',
            port: parseInt(<string>process.env.REDIS_PORT) || 6379,
            password: process.env.REDIS_PASSWORD || ''
        },
        memcache: {
            host: process.env.MEMCACHE_HOST || '127.0.0.1'
        }
    }
};
export default config;

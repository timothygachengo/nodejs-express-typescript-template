import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import morganLoggerMiddleware from '@node-template/core/logger/loggerMiddleware';
import ApiV1 from '@node-template/api/v1';

class AppPlugins {
    private app: express.Application;

    constructor(application: express.Application) {
        this.app = application;
    }

    public init = () => {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));

        this.app.disable('x-powered-by');

        /**
           * TODO:
           * In production please specify the cross origin to prevent any host from accessing the API of type Array<string>
           */
        const whiteList = [
            // development urls
            'http://localhost',
            'localhost',
            '127.0.0.1',
            'http://localhost:3000',
            'localhost:3000',
            'http://127.0.0.1:3000',
            '127.0.0.1:3000',
            /\.ngrok\.io$/
            // production urls
        ];

        const corsOptions: cors.CorsOptions = {
            origin: whiteList,
            credentials: true,
            optionsSuccessStatus: 200,
            methods: 'GET,HEAD,PUT,OPTIONS,PATCH,POST,DELETE',
            preflightContinue: true,
            allowedHeaders: [
                'Origin',
                'Access-Control-Allow-Origin',
                'Access-Control-Allow-Headers',
                'Accept-Version',
                'Authorization',
                'Credentials',
                'X-Requested-With',
                'Content-Type'
            ]
        };

        this.app.use(cors(corsOptions));

        this.app.options('*', cors(corsOptions), (req:Request, res:Response) => res.sendStatus(200));

        this.app.options('/*', (req:Request, res:Response) => res.sendStatus(200));

        this.app.enable('trust proxy');
        this.app.set('trust proxy', 1);
        if (process.env.NODE_ENV === 'production') {
            this.app.use(helmet());
        }

        const shouldCompress = (req: Request, res: Response) => (req.headers['x-no-compression'] ? false : compression.filter(req, res));
        this.app.use(compression({ filter: shouldCompress }));

        // morgan logger
        this.app.use(morganLoggerMiddleware);

        // Documentation
        if (process.env.NODE_ENV !== 'production') {
            // eslint-disable-next-line global-require, @typescript-eslint/no-var-requires
            // const { swaggerOptions2 } = require('../core/swagger');
            //   expressJsDocSwagger(this.app)(swaggerOptions2);
        }

        // Default endpoint for eb health check
        this.app.get('/', (req:Request, res:Response) => res.status(200).send('Welcome to node template'));

        /**
          * GET /test
          * @summary This is a test endpoint
          * @return {object} 200 - A successful response
          *
          */
        this.app.get('/test', (req: Request, res: Response) => {
            res.status(200).send({ msg: 'This is working' });
        });

        /**
           * API Routes
           * Add more versions of the api below
           */

        this.app.use('/api/v1', new ApiV1().init());

        // Redirect errors to specific pages
        /**
           * This is a 404 redirect error
           */
        this.app.use((req:Request, res: Response, next: NextFunction) => {
            res.status(404).format({
                json: () => {
                    res.send({ err: 'Not Found' });
                },
                text: () => {
                    res.send('Not found');
                },
                default: () => {
                    res.status(406).send('Not Acceptable');
                }
            });

            next();
        });

        return this.app;
    };
}

export default AppPlugins;

import express, { Application, Request, Response, NextFunction } from 'express';
import compression from 'compression';
import helmet from 'helmet';
import cors from 'cors';
import createGraphqlServer from '../core/graphql';
import apiV1 from '../api/v1';
import expressJsDocSwaager from 'express-jsdoc-swagger';
import morganLoggerMiddleware from '..//core/logger/loggerMiddleware';

export default async ({ app }: { app: Application }) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));


  // app.use(cookieParser('secret'));

  app.disable('x-powered-by');

  /**
     * TODO:
     * In production please specify the cross origin to prevent any host from accessing the API of type Array<string>
     */
  const whiteList = [
    '*',
    // development urls
    'http://localhost',
    'http://localhost:3000',
    /\.ngrok\.io$/
    // production urls
  ];

  const corsOptions = {
    origin: whiteList,
    credentials: true,
    optionsSuccessStatus: 206,
    preflightContinue: true,
    allowedHeaders: [
      'Accept-Version',
      'Authorization',
      'Credentials',
      'Content-Type'
    ]
  };

  app.use(cors(corsOptions));

  app.enable('trust proxy');
  app.set('trust proxy', 1);
  if (process.env.NODE_ENV === 'production') {
    app.use(helmet());
  }

  const shouldCompress = (req: Request, res: Response) =>
    req.headers['x-no-compression'] ? false : compression.filter(req, res);
  app.use(compression({ filter: shouldCompress }));

  // morgan logger
  app.use(morganLoggerMiddleware);

  // Documentation
  if (process.env.NODE_ENV !== 'production') {
    const { swaggerOptions2 } = require('../core/swagger');
    expressJsDocSwaager(app)(swaggerOptions2);
  }

  /**
    * GET /test
    * @summary This is a test endpoint
    * @return {object} 200 - A successful response
    *
    */
  app.get('/test', (req: Request, res: Response) => {
    res.status(200).send({ msg: 'This is working' });
  });

  /**
     * GRAPHQL
     */
  const graphqlServer = await createGraphqlServer();
  await graphqlServer.start();
  graphqlServer.applyMiddleware({ app, path: '/graphql', cors: false });

  /**
     * API Routes
     * Add more versions of the api below
     */

  app.use('/api/v1', apiV1());

  // Redirect errors to specific pages
  /**
     * This is a 404 redirect error
     */
  app.use((req: Request, res: Response, next: NextFunction) => {
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
};

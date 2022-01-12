import 'module-alias/register';
import 'reflect-metadata';
import express, { Application } from 'express';
import expressLoader from './loaders';

const app : Application = express();

expressLoader({ expressApp: app });

export default app;

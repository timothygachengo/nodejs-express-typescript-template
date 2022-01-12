import express from 'express';
import expressLoader from './express';
import chalk from 'chalk';
import Logger from '../core/logger';

export default async ({ expressApp }: {expressApp : express.Application}) => {
  process.on('unhandledRejection', (reason: Error, promise: Promise<any>) => {
    Logger.handleAppErrors('---Unhandled Rejection--->', false, reason);
  });

  process.on('uncaughtException', (error: Error) => {
    Logger.handleAppErrors('---Uncaught Exception--->', true, error);
  });

  process.on('uncaughtExceptionMonitor', (error: Error) => {
    Logger.handleAppErrors('---Uncaught Exception Monitor--->', false, error);
  });
  expressLoader({ app: expressApp });
  console.log(chalk.yellowBright('Express loaded'));
};

import morgan, { StreamOptions } from 'morgan';
import Logger from './class';

const logger = new Logger();

const stream: StreamOptions = {
  write: (message) => logger.apiLog(message)
};

const morganLoggerMiddleware = morgan(
  'combined', { stream }
);

export default morganLoggerMiddleware;

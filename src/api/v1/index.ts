import { Router } from 'express';
import auth from './auth';

/**
 * @api /api/v1
 */
export default () => {
  const app: Router = Router();
  auth(app);
  return app;
};

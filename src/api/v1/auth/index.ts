import { Router } from 'express';
import exampleRoutes from './example.routes';
const router = Router();

export default (app: Router) => {
  app.use('/auth', router);
  exampleRoutes(router);
};

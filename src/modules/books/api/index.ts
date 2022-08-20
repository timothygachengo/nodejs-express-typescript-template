import { Router } from 'express';
import fetchRoutes from './fetch.routes';

const booksRouter = Router();

export default (app: Router) => {
    app.use('/books', booksRouter);
    fetchRoutes(booksRouter);
};

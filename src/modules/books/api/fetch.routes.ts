import { Router, Request, Response } from 'express';
import BooksController from '../books.controller';

const router = Router();

export default (app: Router) => {
    app.use('/', router);

    router.get('/', (req:Request, res:Response) => new BooksController(req, res).fetchAll(req));

    router.get('/:id', (req:Request, res:Response) => new BooksController(req, res).fetchById(req));
};

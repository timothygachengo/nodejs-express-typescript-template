import Controller from '@node-template/core/express/controller';
import { Request } from 'express';
import { IBookFilter } from '@node-template/types';
import BooksService from './books.service';

class BooksController extends Controller {
    public fetchAll = async (req: Request) => {
        const booksService = new BooksService();
        try {
            const books = await booksService.getAllBooks(req.query as IBookFilter);

            if (books.status === 'error') {
                return this.badRequestWithDataResponse(books.data);
            }

            return this.successWithDataResponse(books.data);
        } catch (e) {
            return this.serverError();
        }
    };

    public fetchById = async (req: Request) => {
        const booksService = new BooksService();
        try {
            const book = await booksService.getBookById(req.params.id);

            if (book.status === 'error') {
                return this.notFoundWithDataResponse(book.data);
            }

            return this.successWithDataResponse(book.data);
        } catch (e) {
            return this.serverError();
        }
    };
}

export default BooksController;

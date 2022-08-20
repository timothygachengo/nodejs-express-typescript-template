import IceAndFireApi from '@node-template/services/IceAndFireApi';
import axios from '@node-template/utils/axios';
import { ErrorUseCase, IBookFilter, UseCaseStatusCode } from '@node-template/types';

class BooksService {
    private readonly _iceAndFireApi: IceAndFireApi;

    constructor() {
        this._iceAndFireApi = new IceAndFireApi(axios);
    }

    public getAllBooks = async (filter?: IBookFilter) => {
        const books = await this._iceAndFireApi.getBooks(filter);

        if (!books) {
            return ErrorUseCase;
        }

        return {
            status: UseCaseStatusCode.SUCCESS,
            data: books
        };
    };

    public getBookById = async (id: string) => {
        const book = await this._iceAndFireApi.getBookById(id);

        if (!book) return ErrorUseCase;

        return {
            status: UseCaseStatusCode.SUCCESS,
            data: book
        };
    };
}

export default BooksService;

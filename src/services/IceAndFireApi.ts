import { AxiosInstance } from 'axios';
import { ICharacterFilter } from '@node-template/types';

// interface IIceAndFireApi {
//     getAllBooks(): Promise<any>;
//     getBook(id: string): Promise<any>;
//     getAllCharacters(): Promise<any>;
//     getCharacter(id: string): Promise<any>;
// }

interface IResources {
    books: string;
    characters: string;
    houses: string;
}

interface IBook {
    url: string;
    name: string;
    isbn: string;
    authors: string[];
    numberOfPages: number;
    publisher: string;
    country: string;
    mediaType: string;
    released: string;
    characters: string[];
    povCharacters: string[];
}

interface ICharacter {
    url: string;
    name: string;
    culture: string;
    born: string;
    died: string;
    titles: string[];
    aliases: string[];
    father: string;
    mother: string;
    spouse: string;
    allegiances: string[];
    books: string[];
    povBooks: string[];
    tvSeries: string[];
    playedBy: string[];
}

class IceAndFireApi {
    private readonly axios: AxiosInstance;

    constructor(axios: AxiosInstance) {
        this.axios = axios;
    }

    public getResources = async () => {
        const url = '/';

        return new Promise((resolve: (value: IResources) => void, reject: any) => {
            this.axios.get(url).then((response) => {
                resolve(response.data);
            }).catch((error) => {
                reject(error);
            });
        });
    };

    public getBooks = async (filter?: { name?: string, fromReleaseDate?: string, toReleaseDate?: string }) => {
        const url = '/books';

        return new Promise((resolve: (value: IBook[]) => void, reject: any) => {
            this.axios.get(url, { params: filter }).then((response) => {
                resolve(response.data);
            }).catch((error) => {
                reject(error);
            });
        });
    };

    public getBookById = async (id: string) => {
        const url = `/books/${id}`;

        return new Promise((resolve: (value: IBook) => void, reject: any) => {
            this.axios.get(url).then((response) => {
                resolve(response.data);
            }).catch((error) => {
                reject(error);
            });
        });
    };

    public getCharacters = async (filter?: ICharacterFilter) => {
        const url = '/characters';

        return new Promise((resolve: (value: ICharacter[]) => void, reject: any) => {
            this.axios.get(url, { params: filter }).then((response) => {
                resolve(response.data);
            }).catch((error) => {
                reject(error);
            });
        });
    };

    public getCharacterById = async (id: string) => {
        const url = `/characters/${id}`;

        return new Promise((resolve: (value: ICharacter) => void, reject: any) => {
            this.axios.get(url).then((response) => {
                resolve(response.data);
            }).catch((error) => {
                reject(error);
            });
        });
    };
}

export default IceAndFireApi;

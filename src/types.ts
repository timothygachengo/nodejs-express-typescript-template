export interface IBookFilter {
    name?: string;
    fromReleaseDate?: string;
    toReleaseDate?: string;
}

export interface ICharacterFilter {
    name?: string;
    gender?: 'male' | 'female';
    culture?: string;
    born?: string;
    died?: string;
    isAlive?: boolean;
}

export enum UseCaseStatusCode {
    FAILURE = 'error',
    WARNING = 'warn',
    SUCCESS = 'success'
}

export interface UseCaseStatus {
    status: UseCaseStatusCode,
    message?: string
    data ?: any
}

export const ErrorUseCase:UseCaseStatus = {
    status: UseCaseStatusCode.FAILURE,
    data: {
        messsage: 'An error has occurred'
    }
};

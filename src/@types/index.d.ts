/* eslint-disable no-unused-vars */
import * as express from 'express';

declare global {
    namespace Express {
        export interface Request {
            hotel : any
            userId?: string,
            payload? : any,
        }
    }
}
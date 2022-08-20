import { Request, Response } from 'express';
import {
    CreatedMsgResponse,
    CreatedResponse,
    SuccessMsgResponse,
    SuccessResponse,
    UnauthorizedMsgResponse,
    UnauthorizedResponse,
    ServerErrorResponse,
    NotFoundResponse,
    NotFoundMsgResponse,
    BadRequestResponse,
    BadRequestMsgResponse
} from '../api/api-response';

class Controller {
    protected req: Request;
    protected res: Response;

    constructor(req: Request, res: Response) {
        this.req = req;
        this.res = res;
    }

    protected createdResponse = () => new CreatedMsgResponse().send(this.res);

    protected createdWithDataResponse = (data: any) => new CreatedResponse('Created', data).send(this.res);

    protected successResponse = () => new SuccessMsgResponse('Success').send(this.res);

    protected successWithDataResponse = (data: any) => new SuccessResponse('Success', data).send(this.res);

    protected badRequestResponse = () => new BadRequestResponse('Bad Request').send(this.res);

    protected badRequestWithDataResponse = (data: any) => new BadRequestMsgResponse('Bad Request', data).send(this.res);

    protected notFoundResponse = () => new NotFoundResponse('Not Found').send(this.res);

    protected notFoundWithDataResponse = (data:any) => new NotFoundMsgResponse('Not Found', data).send(this.res);

    protected serverError = () => new ServerErrorResponse().send(this.res);

    protected unAuthorizedResponse = () => new UnauthorizedResponse().send(this.res);

    protected unAuthorizedWithDataResponse = (data: any) => new UnauthorizedMsgResponse('Unauthorized', data).send(this.res);
}

export default Controller;

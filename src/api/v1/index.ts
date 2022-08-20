import { Router } from 'express';

class ApiV1 {
    public router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    public init(): Router {
        // List all your routers for individual here
        return this.router;
    }
}

export default ApiV1;

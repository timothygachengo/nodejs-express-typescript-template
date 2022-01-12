import { Request, Response, Router } from "express";

const router = Router();

export default(app: Router) => {
    app.use('/example', router);
    
    //This is a swagger doc
    /**
   * GET /api/v1/auth/example
   * @summary This is an example endpoint
   * @return {object} 200 - A successful credential match hence login
   */
  router.get('/', (req: Request, res: Response)=>{
      return res.status(200).send({ msg : 'This is an example route'});
  });
}
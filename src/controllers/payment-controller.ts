import * as express from 'express';
import { request, response, httpGet, controller, BaseHttpController } from 'inversify-express-utils'
import { inject } from 'inversify';

@controller('/pay')
export class TicketController extends BaseHttpController {
   constructor() {
      super();
   }

   @httpGet('')
   public helloWorld(@request() req: express.Request, @response() res: express.Response) {
      res.json({message: 'Hello World'})
   }
}
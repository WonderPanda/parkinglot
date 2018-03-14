import * as express from 'express';
import { request, response, httpGet, controller, BaseHttpController } from 'inversify-express-utils'

@controller('/tickets')
export class TicketController {
   @httpGet('')
   public helloWorld(@request() req: express.Request, @response() res: express.Response) {
      res.json({message: 'Hello World'})
   }
}
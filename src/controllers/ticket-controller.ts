import * as express from 'express';
import { request, response, httpGet, controller, BaseHttpController, httpPost, requestParam } from 'inversify-express-utils'
import { inject } from 'inversify';
import { ITicketService } from '../services/ticket-service';
import { TYPES } from '../constants/symbols';
import { TicketResponseType } from '../domain/tickets-domain';

@controller('/tickets')
export class TicketController {
    constructor(@inject(TYPES.TicketService) private ticketService: ITicketService) { }

    @httpGet('/:id')
    public getTicketCost(@requestParam('id') id: string, @response() res: express.Response) {
        res.json({ message: 'Hello World' })
    }

    @httpPost('')
    public async generateTicket(@response() res: express.Response) {
        const ticketResponse = await this.ticketService.tryGetTicket();
        res.json(ticketResponse);
    }
}
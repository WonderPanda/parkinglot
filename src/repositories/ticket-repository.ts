import { TYPES } from '../constants/symbols';
import { provide } from '../ioc/ioc';

export interface ITicketRepository {
   createTicket(): Promise<string>
}

@provide(TYPES.TicketRepository)
export class TicketRepository implements ITicketRepository {
   async createTicket(): Promise<string> {
      return "123";
   }
}
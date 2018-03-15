import { provide } from '../ioc/ioc';
import { TYPES } from '../constants/symbols';
import { TicketResponse, GarageFull, TicketResponseType } from '../domain/tickets-domain';
import { inject } from 'inversify';
import { IGarageService } from './garage-service';
import { ITicketRepository } from '../repositories/ticket-repository';

export interface ITicketService {
   tryGetTicket(): Promise<TicketResponse>
}

@provide(TYPES.TicketService)
export class TicketService implements ITicketService {
   constructor(
      @inject(TYPES.GarageService) private garageService: IGarageService,
      @inject(TYPES.TicketRepository) private ticketRepo: ITicketRepository
   ) {}

   public async tryGetTicket(): Promise<TicketResponse> {
      const availableSpots = await this.garageService.checkCapacity();
      
      if (availableSpots === 0) return { 
         message: 'Sorry, the garage is full. Check back later',
         response: TicketResponseType.GarageFull
      };

      const ticketNumber = await this.ticketRepo.createTicket();
      return { 
         response: TicketResponseType.TicketGenerated,
         dateIssued: new Date(),
         ticketNumber
      };
   }
}
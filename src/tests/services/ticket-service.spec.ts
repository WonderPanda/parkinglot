import "reflect-metadata";
import { expect } from 'chai';
import 'mocha';
import { TicketService } from '../../services/ticket-service';
import { IGarageService, GarageService } from '../../services/garage-service';
import * as moq from 'typemoq';
import { TicketRepository, ITicketRepository } from '../../repositories/ticket-repository';
import { TicketResponseType, Ticket } from '../../domain/tickets-domain';

describe('TicketService', () => {
    it('should not generate a ticket if the garage is full', async () => {
        const garageServiceMock = moq.Mock.ofType<IGarageService>(GarageService);
        garageServiceMock
            .setup(x => x.checkCapacity())
            .returns(() => Promise.resolve(0));

        const ticketRepoMock = moq.Mock.ofType<ITicketRepository>(TicketRepository,
            moq.MockBehavior.Strict);

        const sut = new TicketService(garageServiceMock.object, ticketRepoMock.object);
        let ticketResponse = await sut.tryGetTicket();
        expect(ticketResponse.response).to.eql(TicketResponseType.GarageFull);
        ticketResponse = <Ticket>ticketResponse;
    }),

    it('should return a ticket if the garage is not empty', async () => {
        const garageServiceMock = moq.Mock.ofType<IGarageService>(GarageService);
        garageServiceMock.setup(x => x.checkCapacity())
            .returns(() => Promise.resolve(3))
            .verifiable(moq.Times.once());

        const ticketRepoMock = moq.Mock.ofType<ITicketRepository>(TicketRepository);
        ticketRepoMock.setup(x => x.createTicket())
            .returns(() => Promise.resolve('123'))
            .verifiable(moq.Times.once());

        const sut = new TicketService(garageServiceMock.object, ticketRepoMock.object);
        let ticketResponse = await sut.tryGetTicket();
        expect(ticketResponse.response).to.eql(TicketResponseType.TicketGenerated);

        ticketResponse = <Ticket>ticketResponse;
        expect(ticketResponse.ticketNumber).to.eql('123');

        garageServiceMock.verifyAll();
        ticketRepoMock.verifyAll();
    })
});
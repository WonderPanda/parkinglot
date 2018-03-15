export enum TicketResponseType {
   TicketGenerated = "TicketGenerated",
   GarageFull = "GarageFull"
}

export type Ticket = {
   ticketNumber: string,
   dateIssued: Date,
   response: TicketResponseType.TicketGenerated
}

export type GarageFull = {
   message: string,
   response: TicketResponseType.GarageFull
}

export type TicketResponse = Ticket | GarageFull
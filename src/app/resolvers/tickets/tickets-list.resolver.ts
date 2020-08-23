import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { Observable } from "rxjs";

import { Ticket } from "../../models/tickets/ticket.interface";
import { TicketsService } from "../../services/tickets/tickets.service";

@Injectable({ providedIn: "root" })
export class TicketsListResolver implements Resolve<Ticket[]> {
  constructor(private ticketsService: TicketsService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Ticket[]> {
    return this.ticketsService.getMany();
  }
}

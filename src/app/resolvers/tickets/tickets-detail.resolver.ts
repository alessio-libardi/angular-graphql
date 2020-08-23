import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { Observable } from "rxjs";

import { TicketsService } from "../../services/tickets/tickets.service";
import { Ticket } from "../../models/tickets/ticket.interface";

@Injectable({ providedIn: "root" })
export class TicketsDetailResolver implements Resolve<Ticket> {
  constructor(private ticketsService: TicketsService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Ticket> {
    return this.ticketsService.getOne(route.paramMap.get("id"));
  }
}

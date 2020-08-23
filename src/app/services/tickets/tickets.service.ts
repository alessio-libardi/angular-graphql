import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";

import { Ticket } from "../../models/tickets/ticket.interface";

@Injectable({ providedIn: "root" })
export class TicketsService {
  private url: string = "https://jsonplaceholder.typicode.com/posts";

  constructor(private httpClient: HttpClient) {}

  getMany(): Observable<Ticket[]> {
    return this.httpClient.get<Ticket[]>(this.url);
  }

  getOne(id: string): Observable<Ticket> {
    return this.httpClient.get<Ticket>(`${this.url}/${id}`);
  }

  create(ticket: Partial<Ticket>): Observable<Ticket> {
    return this.httpClient.post<Ticket>(this.url, ticket);
  }

  update(ticket: Ticket): Observable<Ticket> {
    return this.httpClient.put<Ticket>(this.url, ticket);
  }

  delete(id: string): Observable<Ticket> {
    return this.httpClient.delete<Ticket>(`${this.url}/${id}`);
  }
}

import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { tap, catchError } from "rxjs/operators";
import { of } from "rxjs";

import { Ticket } from "../../../models/tickets/ticket.interface";
import { TicketsService } from "../../../services/tickets/tickets.service";
import { TicketsDialogComponent } from "../../../components/tickets/dialog/tickets-dialog.component";

@Component({
  selector: "app-tickets-list",
  templateUrl: "tickets-list.component.html",
  styleUrls: ["tickets-list.component.css"],
})
export class TicketsListComponent implements OnInit {
  tickets: Ticket[];
  loading: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private matDialog: MatDialog,
    private matSnackBar: MatSnackBar,
    private router: Router,
    private ticketsService: TicketsService
  ) {}

  ngOnInit() {
    this.tickets = this.activatedRoute.snapshot.data.tickets;
  }

  create() {
    const dialogRef = this.matDialog.open(TicketsDialogComponent);

    dialogRef.afterClosed().subscribe((result: Ticket) => {
      this.loading = true;

      this.ticketsService.create(result).subscribe(
        (ticket) => {
          this.router.navigate([ticket.id], {
            relativeTo: this.activatedRoute,
          });

          this.loading = false;
        },
        () => {
          this.matSnackBar.open(
            "Errore durante la creazione del ticket.",
            null,
            {
              duration: 3500,
            }
          );

          this.loading = false;
        }
      );
    });
  }

  edit(ticket: Ticket) {
    this.router.navigate([ticket.id], {
      relativeTo: this.activatedRoute,
    });
  }

  delete(ticket: Ticket) {
    this.loading = true;

    this.ticketsService
      .delete(ticket.id)
      .pipe(
        tap(() => {
          this.matSnackBar.open(
            "Il ticket è stato eliminato con successo!",
            null,
            {
              duration: 3500,
            }
          );

          this.loading = false;
        }),
        catchError((err) => {
          this.matSnackBar.open(
            "Errore durante l'eliminazione del ticket.",
            null,
            {
              duration: 3500,
            }
          );

          this.loading = false;

          return of(err);
        })
      )
      .subscribe();
  }
}

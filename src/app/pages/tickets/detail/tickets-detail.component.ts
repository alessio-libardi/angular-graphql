import { Component, OnInit } from "@angular/core";
import { Ticket } from "src/app/models/tickets/ticket.interface";
import { ActivatedRoute } from "@angular/router";
import { TicketsService } from "src/app/services/tickets/tickets.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-tickets-detail",
  templateUrl: "tickets-detail.component.html",
  styleUrls: ["tickets-detail.component.css"],
})
export class TicketsDetailComponent implements OnInit {
  ticket: Ticket;
  loading: boolean;
  form: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private matSnackBar: MatSnackBar,
    private ticketsService: TicketsService
  ) {}

  ngOnInit() {
    this.ticket = this.activatedRoute.snapshot.data.ticket;

    this.form = new FormGroup({
      title: new FormControl(this.ticket.title, Validators.required),
      body: new FormControl(this.ticket.body, Validators.required),
    });
  }

  reset(form: FormGroup) {
    this.form.reset();
  }

  save(form: FormGroup) {
    if (form.valid) {
      this.loading = true;

      this.ticketsService.update(form.value as Ticket).subscribe(
        (ticket) => {
          this.ticket = ticket;

          this.loading = false;
        },
        (err) => {
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
    }
  }
}

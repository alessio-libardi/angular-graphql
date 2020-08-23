import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-tickets-dialog",
  templateUrl: "tickets-dialog.component.html",
  styleUrls: ["tickets-dialog.component.css"],
})
export class TicketsDialogComponent implements OnInit {
  form: FormGroup;

  constructor(private matDialogRef: MatDialogRef<TicketsDialogComponent>) {}

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(null, Validators.required),
      body: new FormControl(null, Validators.required),
    });
  }

  save(form: FormGroup) {
    if (form.valid) {
      this.matDialogRef.close(form.value);
    }
  }
}

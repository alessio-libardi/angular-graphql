import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-tickets-form",
  templateUrl: "tickets-form.component.html",
  styleUrls: ["tickets-form.component.css"],
})
export class TicketsFormComponent {
  @Input()
  form: FormGroup;
  @Output()
  formChange: EventEmitter<FormGroup> = new EventEmitter();

  submit(form: FormGroup) {
    this.formChange.emit(form);
  }
}

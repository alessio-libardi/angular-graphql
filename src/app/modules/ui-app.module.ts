import { NgModule } from "@angular/core";

import { LayoutHeaderComponent } from "../components/layout/header/layout-header.component";
import { LayoutContainerComponent } from "../components/layout/container/layout-container.component";
import { TicketsFormComponent } from "../components/tickets/form/tickets-form.component";
import { TicketsDialogComponent } from "../components/tickets/dialog/tickets-dialog.component";
import { UiMaterialModule } from "./ui-material.module";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    LayoutHeaderComponent,
    LayoutContainerComponent,
    TicketsFormComponent,
    TicketsDialogComponent,
  ],
  imports: [CommonModule, RouterModule, ReactiveFormsModule, UiMaterialModule],
  exports: [
    LayoutHeaderComponent,
    LayoutContainerComponent,
    TicketsFormComponent,
  ],
  entryComponents: [TicketsDialogComponent],
})
export class UiAppModule {}

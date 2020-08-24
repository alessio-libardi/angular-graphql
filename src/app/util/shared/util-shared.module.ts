import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { UiModule } from "../../ui/ui.module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,

    UiModule,
  ],
  exports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,

    UiModule,
  ],
})
export class UtilSharedModule {}

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { UiAppModule } from "./ui-app.module";
import { UiMaterialModule } from "./ui-material.module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    UiAppModule,
    UiMaterialModule,
  ],
  exports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    UiAppModule,
    UiMaterialModule,
  ],
})
export class SharedModule {}

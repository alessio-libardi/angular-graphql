import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { FlexLayoutModule } from '@angular/flex-layout';

import { LayoutHeaderComponent } from "./layout/header/layout-header.component";
import { LayoutContainerComponent } from "./layout/container/layout-container.component";
import { UiMaterialModule } from "./ui-material.module";

const components = [
  LayoutHeaderComponent,
  LayoutContainerComponent
]

const modules = [
  CommonModule, RouterModule, ReactiveFormsModule, FlexLayoutModule, UiMaterialModule
] 

@NgModule({
  declarations: [...components],
  imports: [...modules],
  exports: [...components, ...modules]
})
export class UiModule {}

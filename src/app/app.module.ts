import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./view/app.component";

import { CoreModule } from "./modules/core.module";
import { SharedModule } from "./modules/shared.module";
import { UiAppModule } from "./modules/ui-app.module";
import { UiMaterialModule } from "./modules/ui-material.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    CoreModule,
    SharedModule,
    UiAppModule,
    UiMaterialModule,

    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

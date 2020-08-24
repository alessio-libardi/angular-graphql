import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./view/app.component";

import { UtilCoreModule } from "./util/core/util-core.module";
import { UtilSharedModule } from "./util/shared/util-shared.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    UtilCoreModule,
    UtilSharedModule,

    AppRoutingModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

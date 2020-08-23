import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { TicketsDetailComponent } from "./pages/tickets/detail/tickets-detail.component";
import { TicketsListComponent } from "./pages/tickets/list/tickets-list.component";
import { SharedModule } from "./modules/shared.module";
import { HomeComponent } from "./pages/home/home.component";
import { TicketsDetailResolver } from "./resolvers/tickets/tickets-detail.resolver";
import { TicketsListResolver } from "./resolvers/tickets/tickets-list.resolver";

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "tickets",
    component: TicketsListComponent,
    resolve: {
      tickets: TicketsListResolver,
    },
  },
  {
    path: "tickets/:id",
    component: TicketsDetailComponent,
    resolve: {
      ticket: TicketsDetailResolver,
    },
  },
  {
    path: "**",
    redirectTo: "home",
  },
];

@NgModule({
  declarations: [HomeComponent, TicketsDetailComponent, TicketsListComponent],
  imports: [SharedModule, RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}

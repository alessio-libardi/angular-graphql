import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { UtilSharedModule } from './util/shared/util-shared.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./feature/shell/feature-shell.module').then(
        (m) => m.FeatureShellModule,
      ),
  },
];

@NgModule({
  imports: [UtilSharedModule, RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}

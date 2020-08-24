import { NgModule } from '@angular/core';

import { UtilSharedModule } from '../../util/shared/util-shared.module';

import { FeatureShellRoutingModule } from './feature-shell-routing.module';

@NgModule({
  imports: [UtilSharedModule, FeatureShellRoutingModule],
})
export class FeatureShellModule { }

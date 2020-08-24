import { NgModule } from '@angular/core';

import { UtilSharedModule } from '../../util/shared/util-shared.module';

import { FeatureHomeRoutingModule } from './feature-home-routing.module';

@NgModule({
  imports: [UtilSharedModule, FeatureHomeRoutingModule],
})
export class FeatureHomeModule { }

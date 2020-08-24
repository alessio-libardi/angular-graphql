import { NgModule } from '@angular/core';

import { FeatureUsersRoutingModule } from './feature-users-routing.module';
import { UtilSharedModule } from '../../util/shared/util-shared.module';

@NgModule({
  imports: [UtilSharedModule, FeatureUsersRoutingModule],
})
export class FeatureUsersModule { }

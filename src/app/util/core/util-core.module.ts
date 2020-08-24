import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { UtilGraphQLModule } from './utill-graphql.module';

@NgModule({
  imports: [HttpClientModule, UtilGraphQLModule],
  exports: [],
  providers: [],
})
export class UtilCoreModule {}

import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { GraphQLModule } from './graphql.module';

@NgModule({
  imports: [HttpClientModule, GraphQLModule],
  exports: [],
  providers: [],
})
export class CoreModule {}

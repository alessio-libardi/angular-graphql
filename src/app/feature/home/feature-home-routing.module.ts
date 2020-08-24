import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { UtilSharedModule } from "../../util/shared/util-shared.module";

import { WrapperComponent } from "./wrapper/wrapper.component";

const pages = [WrapperComponent];

const routes: Routes = [
    {
        path: '',
        component: WrapperComponent,
    }
]

@NgModule({
    declarations: [...pages],
    imports: [UtilSharedModule, RouterModule.forChild(routes)],
})
export class FeatureHomeRoutingModule { }
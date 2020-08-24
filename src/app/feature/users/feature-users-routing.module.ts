import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { UtilSharedModule } from "../../util/shared/util-shared.module";

import { WrapperComponent } from "./wrapper/wrapper.component";
import { ListComponent } from "./pages/list/list.component";
import { DetailComponent } from "./pages/detail/detail.component";

import { DialogComponent } from "./components/dialog/dialog.component";
import { FormComponent } from "./components/form/form.component";

const pages = [WrapperComponent, ListComponent, DetailComponent];
const components = [
    DialogComponent,
    FormComponent,
];

const routes: Routes = [
    {
        path: '',
        component: WrapperComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: ListComponent,
            },
            {
                path: ':id',
                pathMatch: 'full',
                component: DetailComponent,
            },
        ]
    }
]

@NgModule({
    declarations: [...pages, ...components],
    imports: [UtilSharedModule, RouterModule.forChild(routes)],
})
export class FeatureUsersRoutingModule { }
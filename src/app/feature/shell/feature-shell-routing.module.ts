import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { UtilSharedModule } from "../../util/shared/util-shared.module";

import { WrapperComponent } from "./wrapper/wrapper.component";

const pages = [WrapperComponent];

const routes: Routes = [
    {
        path: '',
        component: WrapperComponent,
        children: [
            {
                path: '',
                loadChildren: () =>
                    import('./../home/feature-home.module').then(
                        (m) => m.FeatureHomeModule,
                    ),
            },
            {
                path: 'users',
                loadChildren: () =>
                    import('./../users/feature-users.module').then(
                        (m) => m.FeatureUsersModule,
                    ),
            },
            {
                path: '**',
                redirectTo: ''
            }
        ]
    }
]

@NgModule({
    declarations: [...pages],
    imports: [UtilSharedModule, RouterModule.forChild(routes)],
})
export class FeatureShellRoutingModule { }
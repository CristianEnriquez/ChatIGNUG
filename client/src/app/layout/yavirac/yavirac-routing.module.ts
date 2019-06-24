import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YaviracComponent } from './yavirac.component';

const routes: Routes = [
    { path: '', component: YaviracComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class YaviracRoutingModule { }

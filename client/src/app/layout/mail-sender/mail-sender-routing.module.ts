import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MailSenderComponent } from './mail-sender.component';

const routes: Routes = [
    { path: '', component: MailSenderComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MailSenderRoutingModule { }

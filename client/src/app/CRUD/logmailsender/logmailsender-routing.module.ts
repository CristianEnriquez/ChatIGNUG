import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogMailSenderComponent } from './logmailsender.component';

const routes: Routes = [
   { path: '', component: LogMailSenderComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class LogMailSenderRoutingModule { }

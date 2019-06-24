import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { LogMailSenderRoutingModule } from './logmailsender-routing.module';
import { LogMailSenderComponent } from './logmailsender.component';
import { LogMailSenderService } from './logmailsender.service';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      LogMailSenderRoutingModule
   ],
   providers: [LogMailSenderService],
   declarations: [LogMailSenderComponent],
})
export class LogMailSenderModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YaviracRoutingModule } from './yavirac-routing.module';
import { YaviracComponent } from './yavirac.component';

@NgModule({
  imports: [
    CommonModule,
    YaviracRoutingModule
  ],
  declarations: [YaviracComponent]
})
export class YaviracModule { }

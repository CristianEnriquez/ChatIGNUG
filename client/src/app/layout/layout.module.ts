import { FotoPerfilService } from 'app/CRUD/fotoperfil/fotoperfil.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent, SidebarComponent, ChatspaceComponent, ContactsComponent } from '../shared';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbDropdownModule.forRoot(),
        LayoutRoutingModule,
        TranslateModule
    ],
    declarations: [
        LayoutComponent,
        HeaderComponent,
        SidebarComponent,
        ChatspaceComponent,
        ContactsComponent,
    ],
    providers: [FotoPerfilService]
})
export class LayoutModule { }

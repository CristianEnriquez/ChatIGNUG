import { Component, OnInit, ViewContainerRef} from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { CupoAsignaturaService } from './cupo-asignatura.service';
@Component({
    selector: 'app-cupo-asignatura',
    templateUrl: './cupo-asignatura.component.html',
    styleUrls: ['./cupo-asignatura.component.scss']
})
export class CupoAsignaturaComponent implements OnInit {
    busy: Promise<any>;
    constructor(public toastr: ToastsManager,
        vcr: ViewContainerRef) {
        this.toastr.setRootViewContainerRef(vcr);
    }

    ngOnInit() {

    }

}

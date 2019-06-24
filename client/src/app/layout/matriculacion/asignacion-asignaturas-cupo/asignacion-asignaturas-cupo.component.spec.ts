import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AsignacionAsignaturasCupoComponent } from './asignacion-asignaturas-cupo.component';

describe('AsignacionAsignaturasCupoComponent', () => {
   let component: AsignacionAsignaturasCupoComponent;
   let fixture: ComponentFixture<AsignacionAsignaturasCupoComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ AsignacionAsignaturasCupoComponent ]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(AsignacionAsignaturasCupoComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatriculaAsignaturaComponent } from './matriculaasignatura.component';

describe('MatriculaAsignaturaComponent', () => {
   let component: MatriculaAsignaturaComponent;
   let fixture: ComponentFixture<MatriculaAsignaturaComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ MatriculaAsignaturaComponent ]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(MatriculaAsignaturaComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
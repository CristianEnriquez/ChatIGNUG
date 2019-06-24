import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DocenteAsignaturaComponent } from './docenteasignatura.component';

describe('DocenteAsignaturaComponent', () => {
   let component: DocenteAsignaturaComponent;
   let fixture: ComponentFixture<DocenteAsignaturaComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ DocenteAsignaturaComponent ]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(DocenteAsignaturaComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AsignaturaSolicitudMatriculaComponent } from './asignaturasolicitudmatricula.component';

describe('AsignaturaSolicitudMatriculaComponent', () => {
   let component: AsignaturaSolicitudMatriculaComponent;
   let fixture: ComponentFixture<AsignaturaSolicitudMatriculaComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ AsignaturaSolicitudMatriculaComponent ]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(AsignaturaSolicitudMatriculaComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DatosEstudianteComponent } from './datosestudiante.component';

describe('DatosEstudianteComponent', () => {
   let component: DatosEstudianteComponent;
   let fixture: ComponentFixture<DatosEstudianteComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ DatosEstudianteComponent ]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(DatosEstudianteComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
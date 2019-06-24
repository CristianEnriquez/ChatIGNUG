import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AsistenciaRegistroComponent } from './asistencia-registro.component';

describe('AsistenciaRegistroComponent', () => {
   let component: AsistenciaRegistroComponent;
   let fixture: ComponentFixture<AsistenciaRegistroComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ AsistenciaRegistroComponent ]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(AsistenciaRegistroComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});

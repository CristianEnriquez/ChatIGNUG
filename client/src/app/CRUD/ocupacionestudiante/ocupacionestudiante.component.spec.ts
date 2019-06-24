import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { OcupacionEstudianteComponent } from './ocupacionestudiante.component';

describe('OcupacionEstudianteComponent', () => {
   let component: OcupacionEstudianteComponent;
   let fixture: ComponentFixture<OcupacionEstudianteComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ OcupacionEstudianteComponent ]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(OcupacionEstudianteComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
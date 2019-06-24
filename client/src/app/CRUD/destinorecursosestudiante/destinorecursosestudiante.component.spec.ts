import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DestinoRecursosEstudianteComponent } from './destinorecursosestudiante.component';

describe('DestinoRecursosEstudianteComponent', () => {
   let component: DestinoRecursosEstudianteComponent;
   let fixture: ComponentFixture<DestinoRecursosEstudianteComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ DestinoRecursosEstudianteComponent ]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(DestinoRecursosEstudianteComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
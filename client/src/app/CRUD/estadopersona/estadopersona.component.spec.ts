import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EstadoPersonaComponent } from './estadopersona.component';

describe('EstadoPersonaComponent', () => {
   let component: EstadoPersonaComponent;
   let fixture: ComponentFixture<EstadoPersonaComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ EstadoPersonaComponent ]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(EstadoPersonaComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
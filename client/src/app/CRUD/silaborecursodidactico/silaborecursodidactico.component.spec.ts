import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SilaboRecursoDidacticoComponent } from './silaborecursodidactico.component';

describe('SilaboRecursoDidacticoComponent', () => {
   let component: SilaboRecursoDidacticoComponent;
   let fixture: ComponentFixture<SilaboRecursoDidacticoComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ SilaboRecursoDidacticoComponent ]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(SilaboRecursoDidacticoComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
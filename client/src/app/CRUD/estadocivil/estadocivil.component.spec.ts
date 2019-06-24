import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EstadoCivilComponent } from './estadocivil.component';

describe('EstadoCivilComponent', () => {
   let component: EstadoCivilComponent;
   let fixture: ComponentFixture<EstadoCivilComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ EstadoCivilComponent ]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(EstadoCivilComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
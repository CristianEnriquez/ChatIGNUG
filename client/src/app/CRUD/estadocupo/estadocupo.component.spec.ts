import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EstadoCupoComponent } from './estadocupo.component';

describe('EstadoCupoComponent', () => {
   let component: EstadoCupoComponent;
   let fixture: ComponentFixture<EstadoCupoComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ EstadoCupoComponent ]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(EstadoCupoComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
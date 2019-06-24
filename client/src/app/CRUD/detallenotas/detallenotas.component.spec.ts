import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleNotasComponent } from './detallenotas.component';

describe('DetalleNotasComponent', () => {
   let component: DetalleNotasComponent;
   let fixture: ComponentFixture<DetalleNotasComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ DetalleNotasComponent ]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(DetalleNotasComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
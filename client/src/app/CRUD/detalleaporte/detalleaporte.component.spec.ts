import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleAporteComponent } from './detalleaporte.component';

describe('DetalleAporteComponent', () => {
   let component: DetalleAporteComponent;
   let fixture: ComponentFixture<DetalleAporteComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ DetalleAporteComponent ]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(DetalleAporteComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
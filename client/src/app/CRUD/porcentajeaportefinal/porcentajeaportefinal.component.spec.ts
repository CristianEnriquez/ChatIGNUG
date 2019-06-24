import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PorcentajeAporteFinalComponent } from './porcentajeaportefinal.component';

describe('PorcentajeAporteFinalComponent', () => {
   let component: PorcentajeAporteFinalComponent;
   let fixture: ComponentFixture<PorcentajeAporteFinalComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ PorcentajeAporteFinalComponent ]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(PorcentajeAporteFinalComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
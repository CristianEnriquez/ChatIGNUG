import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TipoDiscapacidadComponent } from './tipodiscapacidad.component';

describe('TipoDiscapacidadComponent', () => {
   let component: TipoDiscapacidadComponent;
   let fixture: ComponentFixture<TipoDiscapacidadComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ TipoDiscapacidadComponent ]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(TipoDiscapacidadComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
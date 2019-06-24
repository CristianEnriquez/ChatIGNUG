import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TipoIngresosComponent } from './tipoingresos.component';

describe('TipoIngresosComponent', () => {
   let component: TipoIngresosComponent;
   let fixture: ComponentFixture<TipoIngresosComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ TipoIngresosComponent ]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(TipoIngresosComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
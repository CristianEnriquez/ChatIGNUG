import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AreaEmpresaTrabajaComponent } from './areaempresatrabaja.component';

describe('AreaEmpresaTrabajaComponent', () => {
   let component: AreaEmpresaTrabajaComponent;
   let fixture: ComponentFixture<AreaEmpresaTrabajaComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ AreaEmpresaTrabajaComponent ]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(AreaEmpresaTrabajaComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
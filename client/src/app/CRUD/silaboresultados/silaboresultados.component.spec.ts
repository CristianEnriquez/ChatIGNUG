import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SilaboResultadosComponent } from './silaboresultados.component';

describe('SilaboResultadosComponent', () => {
   let component: SilaboResultadosComponent;
   let fixture: ComponentFixture<SilaboResultadosComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ SilaboResultadosComponent ]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(SilaboResultadosComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
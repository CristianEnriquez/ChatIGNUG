import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SilaboUnidadesComponent } from './silabounidades.component';

describe('SilaboUnidadesComponent', () => {
   let component: SilaboUnidadesComponent;
   let fixture: ComponentFixture<SilaboUnidadesComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ SilaboUnidadesComponent ]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(SilaboUnidadesComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
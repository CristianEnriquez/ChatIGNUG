import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SilaboMetodologiaComponent } from './silabometodologia.component';

describe('SilaboMetodologiaComponent', () => {
   let component: SilaboMetodologiaComponent;
   let fixture: ComponentFixture<SilaboMetodologiaComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ SilaboMetodologiaComponent ]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(SilaboMetodologiaComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
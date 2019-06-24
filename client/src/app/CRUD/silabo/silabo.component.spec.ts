import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SilaboComponent } from './silabo.component';

describe('SilaboComponent', () => {
   let component: SilaboComponent;
   let fixture: ComponentFixture<SilaboComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ SilaboComponent ]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(SilaboComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
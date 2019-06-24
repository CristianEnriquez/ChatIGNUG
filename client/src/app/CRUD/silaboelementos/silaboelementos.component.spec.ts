import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SilaboElementosComponent } from './silaboelementos.component';

describe('SilaboElementosComponent', () => {
   let component: SilaboElementosComponent;
   let fixture: ComponentFixture<SilaboElementosComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ SilaboElementosComponent ]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(SilaboElementosComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TipoBachilleratoComponent } from './tipobachillerato.component';

describe('TipoBachilleratoComponent', () => {
   let component: TipoBachilleratoComponent;
   let fixture: ComponentFixture<TipoBachilleratoComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ TipoBachilleratoComponent ]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(TipoBachilleratoComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HorasClaseDiaComponent } from './horasclasedia.component';

describe('HorasClaseDiaComponent', () => {
   let component: HorasClaseDiaComponent;
   let fixture: ComponentFixture<HorasClaseDiaComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ HorasClaseDiaComponent ]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(HorasClaseDiaComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});